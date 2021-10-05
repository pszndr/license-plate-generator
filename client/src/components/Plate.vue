<template lang="pug">
.plate {{ plate }}
</template>

<script>
export default {
  name: "Plate",
  props: {
    plate: String
  }
};
</script>

<style lang="sass" scoped>
.plate
  width: 60vw
  min-width: 600px
  height: 20vw
  min-height: 200px
  display: flex
  align-items: center
  justify-content: center
  padding-top: 24px
  font-family: monospace
  font-size: calc(92px + 4vw)
  font-weight: 500
  letter-spacing: 4px
  background: #fafafa
  color: #111
  border: 7px solid #111
  border-radius: 7px
  position: relative

  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 32px
    background: #014da5
</style>
