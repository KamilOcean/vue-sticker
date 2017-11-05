import VueSticker from './VueSticker.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSticker)
}

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-sticker', VueSticker)
  }
}
