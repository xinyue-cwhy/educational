<template>
  <div class="icon">
    <img src="@/assets/img/first_img/8.jpg" id="i3">
    <label id="i2">心悦</label>
    <img src="@/assets/img/first_img/9.png" id="i1">
    <div class="text">
      <label>学校概况</label>
      <label>机构设施</label>
      <label>师资队伍</label>
      <label>人才培养</label>
      <label>科学研究</label>
      <label>交流合作</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "icon"
}
</script>

<style scoped>
/*电脑头像*/
#i3{
  top: 72px;
  left: 70px;
  position: absolute;
  border-radius: 50px;
}
/*心悦*/
#i2{
  top: 80px;
  left: 167px;
  position: absolute;
  border-radius: 50px;
  font-size: 22px;
  color: red;
}
#i1{
  top: 120px;
  left: 160px;
  position: absolute;
  border-radius: 50px;
}
.text{
  margin-left: 47%;
  top: 82px;
  position: absolute;
  display: flex;
  width: 50%;
  height: 10%;
}
.text>label{
  flex: 1;
  vertical-align: center;
  cursor: pointer;
  margin-top: 3%;
  font-size: 19px;
}
.text>label:hover{
  color: red;
}
</style>