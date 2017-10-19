<template>
  <div class="vue-example">
      <Container>
          <VueSticker :d="300" :tipAnimation="true" :deg="145" className="good"></VueSticker>
      </Container>
  </div>
</template>

<script>
import VueSticker from '../VueSticker.vue';
import Container from './Container.vue';

export default {
    components: { VueSticker, Container }
}
</script>

<style lang="sass">
.vue-example
    width: 100%
    height: 500px
    background: #F0C27B
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4B1248, #F0C27B)
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4B1248, #F0C27B)
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


.good

    &__wrapper
        position: absolute
        top: 135px
        left: 50%
        margin-left: -150px

        &:hover
            cursor: pointer

    &__main-image,
    &__backside-image
        background-color: rgba(255, 255, 255, .8)
        background-image: url(../../assets/logo.png)
        background-repeat: no-repeat
        background-position: center
        background-size: 70% 70%
</style>
