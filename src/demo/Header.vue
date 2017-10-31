<template>
    <header>
        <Container mod="header">
            <h1>Vue-sticker</h1>
            <!-- <div class="menu">
                <div v-for="(menu, index) in menus" :key="index" class="menu__item">{{ menu[lang] }}</div>
            </div> -->
            <TranslationSelect
                :langs="langs"
                :lang="lang"
                @selectLang="changeLang"
                ></TranslationSelect>
        </Container>
    </header>
</template>

<script>
import Container from './Container.vue'
import TranslationSelect from './TranslationSelect.vue'

export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },
    langs: {
      type: Array,
      required: true
    }
  },
  components: { Container, TranslationSelect },
  data () {
    return {
      menus: [
        {
          en: 'Examples',
          ru: 'Примеры',
          link: 'examples'
        },
        {
          en: 'Guide',
          ru: 'Инструкция',
          link: 'guide'
        },
        {
          en: 'About',
          ru: 'Об авторе',
          link: 'about'
        }
      ]
    }
  },
  methods: {
    changeLang (lang) {
      window.console.log('good')

      this.$emit('selectLang', lang)
    }
  }
}
</script>

<style lang="sass">
header
    position: fixed
    z-index: 3
    top: 0
    left: 0
    width: 100%
    height: 80px
    background-color: black

    h1
        margin-top: 0
        color: #fff
        font-size: 50px
        font-weight: bold

.menu
    display: flex
    color: #fff
    font-size: 35px
    font-weight: 300

    &__item
        margin-right: 20px
</style>
