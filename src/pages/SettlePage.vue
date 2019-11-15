<!--
 * @Author: your name
 * @Date: 2019-11-12 19:14:13
 * @LastEditTime: 2019-11-13 13:49:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\SettlePage.vue
 -->
<template>
     <div class="box">
         <SettleHead></SettleHead>
         <SettleAddrse :id="id"></SettleAddrse>
     </div>
</template>

<script>
import SettleHead from '../components/SettleHead';
import SettleAddrse from '../components/SettleAddrse';
export default {
     name:"SettlePage",
     props:['id'],
     data(){
         return{

         }
     },
     components:{
         SettleHead,SettleAddrse
     },
     mounted(){
         console.log(this.id);
     }
}
</script>

<style scoped>
 
</style>