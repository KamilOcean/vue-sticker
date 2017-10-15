<template>
    <div tabindex="0"
        @keyup.enter="autoAction"
        class="vue-sticker__wrapper"
        :class="`${className + prefix}wrapper`"
        :style="wrapper">
        <div ref="invisible" v-show="!disableMove" class="vue-sticker__invisible" :style="invisible"></div>
        <div ref="invisibleRotate" v-show="!disableRotate" class="vue-sticker__invisible"></div>
        <div>
            <div v-show="showInner" class="vue-sticker__inner" :style="stylesInner">
                <div :style="backPicture">
                    <div class="sticker__overflow" :style="innerImageOverflow">
                        <div class="vue-sticker__inner" :class="`${className}__backside-image`" :style="clip">
                        </div>
                    </div>
                </div>
            </div>
            <div :style="mainStyle">
                <div :style="stayWrapper">
                    <div :class="`${className}__main-image`" :style="mainPicture"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 *  It's need to perfomance. Variables will not be declare
 *  in computed properties and it's work fine because
 *  we have not cases when we drag few stickers in the same time
 */
let startingAnimation,
    end,
    shape;

export default {
    name: 'VueSticker',
    props: {
        /**
         * Diameter (width) of your circle
         */
        d: {
            type: Number,
            required: true
        },
        /**
         * Allow to use your custom styles outside of compopnent itself
         */
        className: {
            type: String,
            default: 'vue-sticker'
        },
        /**
         * prefix for metodology, by default use BEM,
         * which means add __ to elements of block, and _ is modificator
         */
        prefix: {
            type: String,
            default: '__'
        },
        /**
         *  Endpoint of sticking ability
         */
        end: {
            type: [ Number, Boolean ],
            default: true,
            validator: function(value) {
                return !!value && value > 0
            }
        },
        /**
         *  Define point from top side when we can start move sticker
         */
        offset: {
            type: Number,
            default: 50
        },
        /**
         *  Degree for auto complit
         */
        deg: {
            type: Number
        },
        /**
         *  Tip animation, that indicate corner of sticker, which set by deg
         */
        tipAnimation: {
            type: Boolean,
            default: false
        }
    },
    data() {

        return {
            distance: 0,
            disableRotate: false,
            disableMove: false,
            degree: 0,
            showInner: false
        };

    },
    created() {

        if (this.tipAnimation) startingAnimation = window.setInterval(this.showHelper, 3000);

    },
    mounted() {

        /**
         * Attach main handler to events of our invisible circle
         */
        ['mousemove', 'mouseleave', 'mousedown', 'mouseup'].map(eventName => {

            this.$refs.invisible.addEventListener(eventName, e => this.movingHandler(e));

        });

        /**
         * There are events, that needs to calc Rotate and moving sticker in mobile devices
         */
        ['mousemove', 'touchmove', 'touchend'].map(eventName => {

            this.$refs.invisibleRotate.addEventListener(eventName, e => this.calcRotate(e));

        })

        this.$refs.invisibleRotate.addEventListener('mousedown', () => this.disableRotate = true);

    },
    methods: {
        calcRotate(e) {

            if (e.type === 'touchmove') {

                this.degree = 180;
                shape = e.target.getBoundingClientRect();
                this.distance = e.targetTouches[0].pageY - shape.top;
                this.showInner = true;

            } else if (!this.disableRotate) {

                this.degree = Math.atan2(e.offsetX - this.d / 2, e.offsetY - this.d / 2) * 180 / Math.PI;

            }

            if (e.type === 'touchend') {

                this.animation();

            }

        },
        movingHandler(e) {

            /**
             * Remove interval for auto animation
             */
            window.clearInterval(startingAnimation);

            if ((!this.endPoint || e.offsetY < this.endPoint) && e.type !== 'mouseleave') {

                this.distance = e.offsetY;
                this.$emit('getPercent', this.distance / this.d);

            }

            switch (e.type) {

                case 'mouseup' || 'mouseleave':
                    this.animation();
                    break;

                case 'mousemove':
                    this.distance = e.offsetY;
                    this.showInner = true;
                    break;

            }

        },
        animation(forward, endPoint) {

            let animate = speed => {

                if ((this.distance > 0 && this.distance < this.d) || !!forward) {

                    end = endPoint || this.endPoint || this.d;

                    if (this.distance >= end) forward = false;

                    if (!!forward) {

                        this.distance += speed;

                    } else {

                        this.distance -= speed;

                    }

                    this.disableRotate = true;
                    this.disableMove = true;
                    this.$emit('getPercent', this.distance / this.d);

                } else {

                    window.clearInterval(anim);
                    this.disableRotate = false;
                    this.disableMove = false;
                    this.showInner = false;
                    this.distance = 0;
                    this.$emit('getPercent', this.distance / this.d);

                }

            };

            let anim = window.setInterval(animate.bind(this, 1), 5);

        },
        autoAction() {

            this.degree = this.deg || 180;
            this.showInner = true;
            this.animation(1);

        },
        showHelper() {

            this.degree = this.deg || 180;
            this.distance = 0;
            this.showInner = true;
            this.animation(1, 50);

        }
    },
    computed: {
        /**
         * Check that end prop is less then Diametr,
         * TODO: make it with errorCaptured hook
         */
        endPoint() {

            return (this.end > 1 && this.end < this.d) && this.end;

        },
        /**
         * Styles for wrapper - main div, it's way to disallow
         * users change important styles from outside comoponent,
         * because sticker willn't work without these styles, like position: relative
         * Indeed this style can put in style scoped tag, but i stay it there now
         */
        wrapper() {

            return {
                position: 'relative',
                width: this.d + 'px',
                height: this.d + 'px',
                borderRadius: '50%'
            };
        },
        invisible() {

            return {
                transform: `rotateZ(${-this.degree - 180}deg)`
            }

        },
        mainStyle() {

                let height = !this.showInner ? (this.d + 'px') : (this.d - this.distance + 'px');

                return {
                    width: this.d + 'px',
                    height,
                    transformOrigin: `${this.d / 2}px ${this.d / 2}px`,
                    transform: `rotateZ(${-this.degree}deg)`,
                    overflow: 'hidden',
                };

        },
        stayWrapper() {

            return {
                transform: `translateY(0) rotateZ(${this.degree}deg)`
            };

        },
        stylesInner() {

            return {
                width: this.d + 'px',
                height: this.d + 'px',
                top: 0,
                left: 0,
                zIndex: 1,
                transformOrigin: `${this.d / 2}px ${this.d * 1.5}px`,
                transform: `translateY(${-this.d}px) rotateZ(${-this.degree - 180}deg)`
            };

        },
        mainPicture() {

            return {
                width: this.d + 'px',
                height: this.d + 'px',
                transform: 'translateY(0)',
                borderRadius: '50%'
            };

        },
        clip() {

            return {
                width: this.d + 'px',
                height: this.d + 'px',
                borderRadius: '50%',
                transform: `rotateY(180deg) rotateZ(${this.degree - 180}deg)`
            };

        },
        backPicture() {

            let height = !this.showInner ? (this.d + 'px') : (this.d - this.distance * 2 + 'px');

            return {
                height: `${this.d}px`,
                transform: `translateY(${this.distance * 2}px)`
            }
        },
        innerImageOverflow() {

            let height = !this.showInner ? (this.d + 'px') : (this.distance + 'px');

            return {
                height,
                transformOrigin: `${this.d / 2}px ${this.d / 2}px`,
                overflow: 'hidden',
                transform: 'rotateZ(180deg)'
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.vue-sticker

    &__wrapper

        &:focus
            outline: 0

    &__invisible
        position: absolute
        z-index: 2
        top: 0
        left: 0
        width: 100%
        height: 100%
        border-radius: 50%
        opacity: 0

    &__inner
        position: absolute
        top: 0
        left: 0
</style>
