<template>
  <div class="translation-select">
      <div @click="toggle" class="translation-select__current">{{ lang }}</div>
      <div v-show="opened" class="translation-select__dropdown">
          <div v-for="(language, index) in langs"
            :key="index"
            @click="select(language)"
            class="translation-select__row">{{ language }}</div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        langs: {
            type: Array,
            required: true
        },
        lang: {
            type: String
        }
    },
    data() {

        return { opened: false }

    },
    methods: {
        toggle() {

            this.opened = !this.opened

        },
        select(lang) {

            this.$emit('selectLang', lang)
            this.opened = false;

        }
    }
}
</script>

<style lang="sass">
.translation-select
    position: relative
    width: 40px
    height: 100%
    color: #fff
    font-size: 30px
    font-weight: 300
    line-height: 100%
    text-transform: uppercase

    &::after
        content: ''
        display: block
        position: absolute
        top: 10px
        right: -5px
        border: 5px solid transparent
        border-top: 5px solid #fff

    &__current
        width: 100%
        padding-left: 5px

        &:hover
            color: rgba(255, 255, 255, .7)
            cursor: pointer

    &__dropdown
        position: absolute
        top: 30px
        width: 100%
        background-color: #000

    &__row
        padding-top: 5px
        padding-left: 5px

        &:hover
            color: rgba(255, 255, 255, .7)
            cursor: pointer
</style>
