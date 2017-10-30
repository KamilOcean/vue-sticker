import Vue from 'vue'
import VueSticker from '../src/VueSticker.vue'

describe('Render with props', () => {
  it('should render correct elements in component itself by prop :d="500"', () => {
    const vm = new Vue({
      template: '<div><VueSticker :d="500"></VueSticker></div>',
      components: { VueSticker }
    }).$mount()
    expect(vm.$el.querySelector('.vue-sticker__wrapper').style.width).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__wrapper').style.height).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__inner').style.width).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__inner').style.height).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__inner').style.transformOrigin).toBe('250px 750px 0px')
    expect(vm.$el.querySelector('.vue-sticker__inner').style.transform).toBe('translateY(-500px) rotateZ(-180deg)')
    expect(vm.$el.querySelector('.vue-sticker__main-image').style.width).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__main-image').style.height).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__backside-image').style.width).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__backside-image').style.height).toBe('500px')
    expect(vm.$el.querySelector('.vue-sticker__backside-image').style.transform).toBe('rotateY(180deg) rotateZ(-180deg)')
  })
})

// describe('Init component', () => {
//   // Inspect the raw component options
//   it('has a created hook', () => {
//     expect(typeof VueSticker.created).toBe('function')
//   })
//   // Evaluate the results of functions in
//   // the raw component options
//   it('sets the correct default data', () => {
//     expect(typeof VueSticker.data).toBe('function')
//     const defaultData = VueSticker.data()
//     expect(defaultData.distance).toBe(0)
//     expect(defaultData.disableRotate).toBe(false)
//     expect(defaultData.disableMove).toBe(false)
//     expect(defaultData.degree).toBe(0)
//     expect(defaultData.showInner).toBe(false)
//   })
// })
