<template>
  <div class="promo-example">
      <Container mod="promo">
          <div class="promo-example__content">
              <div class="promo-example__title">{{ title[lang] }}</div>
              <div class="promo-example__input-wrapper">
                  <input
                    type="email"
                    name="email"
                    class="promoe-example__input"
                    v-model="promoCode"
                    placeholder="you can type anything, it's just a demo">
                </div>
                <div class="promo-example__description">{{ description[lang] }}</div>
          </div>
          <div class="promo-example__substrate">{{ realCode }}</div>
          <transition name="go">
              <VueSticker v-show="sticker" :d="200" :deg="0" :end="!enablePromo && 60" className="promo" @getPercent="end"></VueSticker>
          </transition>
      </Container>
  </div>
</template>

<script>
import VueSticker from '../VueSticker.vue'
import Container from './Container.vue'

export default {
    props: {
        lang: {
            type: String
        }
    },
    components: { VueSticker, Container },
    data() {

        return {
            promoCode: '',
            sticker: true,
            title: {
                en: 'Give your e-mail to get promo code for sale',
                ru: 'Оставьте свой e-mail для того, чтобы получить промо код со скидкой'
            },
            description: {
                en: 'There is a good example from real world. You can see promo-code and remove stiker only after you type one more symbol',
                ru: 'Это хороший пример применения стикера в реальном мире. Вы сможете увидеть промо-код и удалить стикер, только после ввода хотя бы одного символа'
            }
        }

    },
    computed: {
        enablePromo() {

            return this.promoCode.length > 0;

        },
        realCode() {

            return this.enablePromo ? Math.floor(Math.random(0, 10) * 100000, 10) : '****'

        }
    },
    methods: {
        end(p) {

            if (p > 0.8) this.sticker = false;

        }
    }
}
</script>

<style lang="sass">
.go-enter-active,
.go-leave-active
    transition: opacity .5s

.go-enter,
.go-leave-to
    opacity: 0

.promo-example
    width: 100%
    height: 500px
    margin-bottom: 200px
    padding-top: 100px
    background: #B993D6
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8CA6DB, #B993D6)
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8CA6DB, #B993D6)
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &__content
        width: 600px

    &__title
        margin-bottom: 20px
        font-size: 40px

    &__input-wrapper
        width: 600px
        height: 50px
        border-radius: 10px

        input
            width: 100%
            height: 100%
            padding-right: 20px
            padding-left: 20px
            border-radius: 25px
            font-size: 35px

    &__substrate
        position: absolute
        right: 0
        width: 200px
        height: 200px
        padding-top: 80px
        font-size: 50px
        text-align: center

.promo

    &__wrapper
        position: absolute
        right: 0

        &:hover
            cursor: pointer

    &__main-image
        background: #215f00
        background: -webkit-linear-gradient(to bottom, #e4e4d9, #215f00)
        background: linear-gradient(to bottom, #e4e4d9, #215f00)
        font-size: 50px
        text-align: center


        &::after
            content: 'Promo'
            display: block
            padding-top: 50px

    &__backside-image
        background-color: rgba(0, 0, 0, .8)

</style>
