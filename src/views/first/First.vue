<template>
  <div>
    <titlebar></titlebar>
    <icon></icon>
    <fswiper></fswiper>
    <bottombar></bottombar>
  </div>
</template>

<script>
import fswiper from "@/views/first/firstchild/fswiper";
import titlebar from "@/views/first/firstchild/titlebar";
import icon from "@/views/first/firstchild/icon";
import bottombar from "@/views/first/firstchild/bottombar";
export default {
  name: "First",
  components:{
    fswiper,
    titlebar,
    icon,
    bottombar
  },
}
</script>

<style scoped>
</style>