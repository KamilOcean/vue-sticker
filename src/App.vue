<template>
  <div id="app">
    <h1>Examples</h1>
    <VueSticker
        className="my-sticker"
        :d="400"
        :deg="-45"
        />
  </div>
</template>

<script>
import VueSticker from './VueSticker.vue';

export default {
  name: 'app',
  components: { VueSticker },
  methods: {
    begin(x, y) {

        this.x = x;
        this.y = y;

    }
  },
  data () {
    return {
      x: 0, y: 0, text: ''
    }
},
    methods: {
        showText(v) {

            this.text = v;

        }
    }
}
</script>

<style lang="sass">
.my-sticker

    &__wrapper
        margin-right: auto
        margin-left: auto

        &:hover
            cursor: pointer

    &__main-image
        background-image: url('./assets/1.jpg')
        background-repeat: no-repeat
        background-position: center

    &__backside-image
        opacity: .7
        background-image: url('./assets/1.jpg')
        background-repeat: no-repeat
        background-position: center
</style>
