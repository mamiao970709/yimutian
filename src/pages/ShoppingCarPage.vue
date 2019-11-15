<!--
 * @Author: your name
 * @Date: 2019-11-09 09:48:05
 * @LastEditTime: 2019-11-14 00:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\Index.vue
 -->
<template>
      <div class="box">
         <!-- <ShopHeader></ShopHeader> -->
         <ShoppingCar></ShoppingCar>
         <ShopPro></ShopPro>
      </div>
</template>

<script>
// import ShopHeader from '../components/ShopHeader';
import ShoppingCar from '../components/ShoppingCar';
import ShopPro from '../components/ShopPro';
 
export default {
  name: 'ShoppingCarPage',
  data () {
    return {
    
    }
  },
  components:{
     ShoppingCar,ShopPro
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    background:#f7f3f7;
}
</style>
