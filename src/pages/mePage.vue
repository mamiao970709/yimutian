<!--
 * @Author: your name
 * @Date: 2019-11-15 10:53:21
 * @LastEditTime: 2019-11-15 11:39:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\mePage.vue
 -->
<template>
    <div class="box">
        <ourTop></ourTop>
        <ourTu></ourTu>
        <ourDing></ourDing>
        <ourList></ourList>
        <Myfooter style="position:fixed;bottom:0;z-index:10;"></Myfooter>
    </div>            
</template>
<script>
import ourTop from "../components/ourTop";
import ourTu from "../components/ourTu";
import ourDing from "../components/ourDing";
import ourList from "../components/ourList";
// import ourFooter from "../components/ourFooter";
import Myfooter from "../components/Myfooter";

export default {
    name:"mePage",
   data() {
      return {
      }
   },
   components:{
       ourTop,ourTu,ourDing,ourList,Myfooter
   }
}
</script>
<style scoped>
            
</style>