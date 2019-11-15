<!--
 * @Author: your name
 * @Date: 2019-11-09 17:20:14
 * @LastEditTime: 2019-11-11 12:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\DetailsPage.vue
 -->
<template>
      <div class="box">
          <DetailsHeader class="DetailsHeader"></DetailsHeader>
          <div class="center">
            <DetailsBanner :id="id"></DetailsBanner>
            <DetailsCon :id="id"></DetailsCon>
            <DetailsComment :id="id"></DetailsComment>
            <DetailsBoby :id="id"></DetailsBoby>
            <Myhot type="有机新品"></Myhot>
          </div>
          <DetailsFooter class="DetailsFooter"></DetailsFooter>
      </div>
</template>

<script>
import DetailsHeader from '../components/DetailsHeader';
import DetailsBanner from '../components/DetailsBanner';
import DetailsCon from '../components/DetailsCon';
import DetailsComment from '../components/DetailsComment';
import DetailsBoby from '../components/DetailsBoby';
import Myhot from '../components/Myhot';
import DetailsFooter from '../components/DetailsFooter';


export default {
  name: 'DetailsPage',
  props:['id'],
  data () {
    return {
    
    }
  },
  components:{
      DetailsHeader,DetailsBanner,
      DetailsCon,DetailsComment,
      DetailsBoby,Myhot,DetailsFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .box{
      display:flex;
      height:100%;
      flex-direction: column;
      background:#f7f3f7;
   }
   .center{
      flex:1;
      overflow:auto;
      margin-top:.5rem;
   }
   .DetailsHeader{
      position:fixed;
      top:0;
      z-index:10;
   }
   .DetailsFooter{
      position:fixed;
      bottom:0;
       z-index:10;
   } 
</style>
