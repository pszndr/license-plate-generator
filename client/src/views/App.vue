<template lang="pug">
#app
  router-view
</template>

<style lang="sass">
*
  box-sizing: border-box

html, body
  width: 100%
  height: 100%
  margin: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  width: 100%
  height: 100%
  background-color: palegoldenrod

  & > div
    width: 100%
    height: 100%

  & > nav
    position: absolute
    top: 0
    right: 0
</style>
