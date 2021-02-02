<template>
  <div>
    <lf_first>
      <tsyhgl :s_id="id" :s_status="status"></tsyhgl>
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import Tsyhgl from "@/views/loginto/lfchild/importviw/tsyhgl";
export default {
  name: "yhgl",
  components:{
    Tsyhgl,
    lf_first
  },
  data(){
    return{
      id:this.$route.query.s_id,
      status:this.$route.query.s_status
    }
  }
}
</script>

<style scoped>

</style>