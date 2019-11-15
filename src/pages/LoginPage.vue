<!--
 * @Author: your name
 * @Date: 2019-11-15 11:17:26
 * @LastEditTime: 2019-11-15 11:25:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\LoginPage.vue
 -->
<template>
    <div class="box">
        <Back></Back>
        <login></login>
        <loginDet></loginDet> 
        <weiXin></weiXin>
    </div>
   
</template>
<script>
import Back from '../components/Back';
import login from '../components/login';
import loginDet from '../components/loginDet';
import weiXin from '../components/weiXin';


export default {
    name:"LoginPage",
    props:['from'],
   data() {
      return {
      }
   },
   components:{
       Back,login,loginDet,weiXin
   }
}
</script>
<style scoped>         
</style>