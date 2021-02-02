<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
#tabbar{
  display: flex;
  text-align: left;
  position: fixed;
  top: 30%;
  width: 9%;
  font-size: 12px;
}

</style>
