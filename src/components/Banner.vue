<!--
 * @Author: your name
 * @Date: 2019-11-09 10:24:50
 * @LastEditTime: 2019-11-15 08:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Banner.vue
 -->

<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <a v-bind:href="img.href"><img :src="img.src" ></a>
            </div>
        </div>      
    </div>  
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Banner',
  data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
    fetch('api/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true,
                    loop: true,
              });
        });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:100%;
  height: 1.7rem; 
}
img{
  width:100%;
  height: 100%;
}

</style>
