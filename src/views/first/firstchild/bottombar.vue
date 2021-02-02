<template>
  <div class="bottom">
    <p>Copyright心悦2021</p>
    <p id="p1">地址：吉林省长春市</p>
    <p id="p2">联系电话：15526645761</p>
  </div>
</template>

<script>
export default {
  name: "bottombar"
}
</script>

<style scoped>
.bottom{
  background:url("../../../assets/img/first_img/bg.png");
  width: 100%;
  height: 10%;
  top: 90%;
  position: absolute;
}
.bottom>p{
  color: white;
  position: absolute;
  left: 70px;
  font-family: 华文楷体;
}
#p1{
  margin-top: 40px;
}
#p2{
  margin-top: 40px;
  margin-left: 15%;
}
</style>