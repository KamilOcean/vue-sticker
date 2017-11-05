import VueSticker from './VueSticker.vue'

const VueStickerPlugin = {
  install (Vue) {
    Vue.component('vue-sticker', VueSticker)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueStickerPlugin)
}

export default VueStickerPlugin
