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
  padding-top: calc(24px + 2vw)
  font-family: cargo2
  font-size: calc(74px + 5vw)
  letter-spacing: 4px
  background: #fafafa
  color: #111
  border: 10px solid #111
  border-radius: 24px
  position: relative

  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: calc(24px + 2vw)
    background: #0636a2
    border-top-left-radius: 12px
    border-top-right-radius: 12px
</style>
