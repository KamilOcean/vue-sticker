# Примеры

> Здесь вы сможете найти примеры использования компонента vue-sticker

## Простой двухцветный стикер

Просто опишите два css класса: vue-sticker__main-image и vue-sticker__backside-image и не забудьте передать компоненту обязательное свойство - d (диаметр, ширина и высота вашего стикер компонента в пикселях). Это всё.

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

## Стикер с двумя изображениями и кастомным именем классов

Для использования кастомных названий классов передайте парамер className (class-name) vue-sticker компоненту. К примру, давайте установим название классов "good" и добавим стили с изображениями для нашего компонента. В качестве изображения возьмём логотип Vue.

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
