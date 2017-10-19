<template>
    <div class="container" :class="!!mod && 'container_' + mod">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    mod: {
      type: String
    }
  }
}
</script>

<style lang="sass">
.container
    position: relative
    width: 990px
    height: 100%
    margin-right: auto
    margin-left: auto

    &_header
        display: flex
        align-items: baseline
        justify-content: space-between

    &_promo
        display: flex
        align-content: center
        justify-content: space-between
</style>
