# Examples

> There are you'll find examples of usage vue-sticker

## Simple two colors

Just describe two css classes: vue-sticker__main-image and vue-sticker__backside-image and don't miss required property - d (diametr, width and height of your sticker in px's). That's all.

<vuep template="#simpledemo"></vuep>
<script v-pre type="text/x-template" id="simpledemo">
<style>
.vue-sticker__main-image {
  background-color: red;
}

.vue-sticker__backside-image {
  background-color: orange
}
</style>

<template>
  <vue-sticker :d="200"></vue-sticker>
</template>

<script>
  Vue.use(VueSticker)
</script>
</script>

## Sticker with image and class names

To use your custom class names you have to set className prop to vue-sticker component. For example, let's set className="good" and set styles to this class with main logo of Vue.

<vuep template="#withimage"></vuep>
<script v-pre type="text/x-template" id="withimage">
<style>
.good__main-image,
.good__backside-image {
  background-color: rgba(0, 0, 0, .05);
  background-image: url(https://vuejs.org/images/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: center;
}

.good__backside-image {
  opacity: .7
}
</style>

<template>
  <vue-sticker :d="200" class-name="good"></vue-sticker>
</template>

<script>
  Vue.use(VueSticker)
</script>
</script>
