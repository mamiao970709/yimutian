<!--
 * @Author: your name
 * @Date: 2019-11-09 20:47:17
 * @LastEditTime: 2019-11-14 17:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\DetailsBanner.vue
 -->
   
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(comment,index) in currcomment" :key="index"   >
               <img :src="comment.img">
            </div>
        </div> 
        <div class="swiper-pagination"></div>     
    </div>  

</template>

<script>
import axios from 'axios';
import Swiper from 'swiper'

export default {
  name: 'DetailsBanner',
  props:['id'],
  data () {
    return {
        allcomment:{},
        currcomment:null
    }
  },
  created(){
    //  axios.get('http://localhost:3000/detailsImgs')
    //   .then(res=>{
    //      console.log(res.data);
    //      this.allcomment =res.data;
    //      this.currcomment = this.allcomment[this.id];
    //      console.log(this.currcomment);
    //      this.$nextTick(function () {
    //           let mySwiper = new Swiper('.swiper-container',{
    //             //    autoplay:true,
    //                 speed:300,
    //                 grabCursor:true,
    //                 loop: true,
    //                 pagination: {
    //                 el:'.swiper-pagination',
    //                 },
    //           });
    //     })
    //   })
    //  .catch(err=>{
    //    console.log(err);
    //  })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:100%;
  height: 2.3rem; 
}
img{
  width:100%;
  height: 100%;
}

</style>
