<!--
 * @Author: your name
 * @Date: 2019-11-09 09:48:05
 * @LastEditTime: 2019-11-09 15:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\Index.vue
 -->
<template>
      <div class="box">
          <Search class="search"></Search>
          <div class="center">
            <Navs></Navs>
            <Banner class="bannerBox"></Banner>
            <SellWell></SellWell>
            <Model></Model>
            <Myhot type="热卖促销"></Myhot>
            <Myhot type="有机新品"></Myhot>
          </div>
          <Myfooter class="footers"></Myfooter>
      </div>
</template>

<script>
import Search from '../components/Search';
import Navs from '../components/Navs';
import Banner from '../components/Banner';
import SellWell from '../components/SellWell';
import Model from '../components/Model';
import Myhot from '../components/Myhot';
import Myfooter from '../components/Myfooter';
export default {
  name: 'Index',
  data () {
    return {
    
    }
  },
  components:{
      Search,Navs,Banner,SellWell,Model,Myhot,Myfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .bannerBox{
     margin-top:.1rem;
 }
  .box{
      display:flex;
      height:100%;
      flex-direction: column;
   }
   .center{
      flex:1;
      overflow:auto;
      margin-top:.5rem;
   }
   .search{
      position:fixed;
      top:0;
      z-index:10;
   }
   .footers{
      position:fixed;
      bottom:0;
      z-index:10;
   } 
</style>
