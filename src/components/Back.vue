<!--
 * @Author: your name
 * @Date: 2019-11-15 10:06:36
 * @LastEditTime: 2019-11-15 10:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Back.vue
 -->
<template>
    <div class="boxs">
        <!-- 分类页左箭头 -->
        <img src="../assets/img/sy_sdk_left.png" alt="" @click="back()">
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
.boxs{
    width:95%;
    height: .4rem;
    margin:0 auto;
    position:fixed;
    top:0;
    background: #fff;
}
img{
    width:.25rem;
    height:.25rem;
    margin-top:.08rem;
}
</style>