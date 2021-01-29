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
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 12px;
}

</style>
