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
</script>

## Choosing methodology

You can set custom prefix, that will add between block and elements. By default component uses BEM methodology, it's mean classes will be .vue-sticker__main-image and .vue-sticker__backside-image. You may set prefix="--" and classes will be .vue-sticker--main-image and .vue-sticker--backside-image.

<vuep template="#prefix"></vuep>
<script v-pre type="text/x-template" id="prefix">
<style>
.good--main-image,
.good--backside-image {
  background-color: rgba(0, 0, 0, .05);
  background-image: url(https://vuejs.org/images/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: center;
}

.good--backside-image {
  opacity: .7
}
</style>

<template>
  <vue-sticker :d="200" class-name="good" prefix="--"></vue-sticker>
</template>
</script>

## End point

You can define end point, that disallow sticky by end prop.

<vuep template="#end"></vuep>
<script v-pre type="text/x-template" id="end">
<style>
.vue-sticker__main-image,
.vue-sticker__backside-image {
  background-color: rgba(0, 0, 0, .05);
  background-image: url(https://vuejs.org/images/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: center;
}

.vue-sticker__backside-image {
  opacity: .7;
}
</style>

<template>
  <vue-sticker :d="200" :end="50"></vue-sticker>
</template>
</script>

## Firstly animation

Component can appear by default animation tip. To turn it on just set tip-animation prop to true. By default it's false.

> Animation ends after first user actions. If you start drag sticker, than animation will end. By default animation direction is from top to bottom i.e. 0 degree. But you can set your custom degree (see 'deg' prop)

<vuep template="#animation"></vuep>
<script v-pre type="text/x-template" id="animation">
<style>
.vue-sticker__main-image,
.vue-sticker__backside-image {
  background-color: rgba(0, 0, 0, .05);
  background-image: url(https://vuejs.org/images/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: center;
}

.vue-sticker__backside-image {
  opacity: .7;
}
</style>

<template>
  <vue-sticker :d="200" :tip-animation="true"></vue-sticker>
</template>
</script>

## Setup degree animation and tab pressing

Deg prop is degree of firstly animation and tab key pressing.

> Yes, vue-sticker support accessibility. And has tabindex property.

<vuep template="#deg"></vuep>
<script v-pre type="text/x-template" id="deg">
<style>
.vue-sticker__main-image,
.vue-sticker__backside-image {
  background-color: rgba(0, 0, 0, .05);
  background-image: url(https://vuejs.org/images/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: center;
}

.vue-sticker__backside-image {
  opacity: .7;
}
</style>

<template>
  <vue-sticker :d="200" :tip-animation="true" :deg="90"></vue-sticker>
</template>
</script>
