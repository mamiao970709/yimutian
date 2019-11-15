<template>
    <div class="box">
        <div class="reg">
            <i class="el-icon-arrow-down" @click="back()"></i>
            <span>注册</span>
        </div>
        
    </div>           
</template>
<script>
export default {
   data() {
      return {
      }
   },

   methods:{
        back(){
        this.$router.go(-1);
        }
   }
}
</script>
<style scoped>
.box{
    width:86%;
    /* height: 2rem; */
    /* background:pink; */
    margin:0 auto;
}
.reg{
    width:100%;
    height:.4rem;
    /* background:skyblue; */
    padding-top:.2rem;
} 
.reg i{
    font-size: 30px;
} 
.reg span{
    font-size: 22px;
    margin-left:2rem;
}         
</style>