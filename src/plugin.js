import VueSticker from './VueSticker.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-sticker', Clock);
  }
};
