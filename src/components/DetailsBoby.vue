<!--
 * @Author: your name
 * @Date: 2019-11-10 23:36:27
 * @LastEditTime: 2019-11-14 17:38:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\DetailsBoby.vue
 -->
<template>
    <div class="box">   
        <h3>宝贝详情</h3>
        <ul>
          <li v-for="(comment,index) in currcomment" :key="index" >
            <p class="headImg">
                <img :src="comment.img" alt="">
            </p> 
          </li>
        </ul>   
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetailsBoby',
  props:['id'],
  data () {
    return {
        allcomment:{},
        currcomment:null
    }
  },
  created() {
  //    //从后端获取数据     
  //    axios.get('http://localhost:3000/detailsImgs')
  //    .then(res=>{ 
  //        console.log(res.data);
  //        this.allcomment =res.data;
  //        this.currcomment = this.allcomment[this.id];
  //    })
  //    .catch(err=>{
  //        console.log(err);
  //    });
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:100%;
}
h3{
    text-align:center;
    color:#999;
    margin-bottom:.1rem;
}
img{
    width:100%;
    height:2.5rem;
}
</style>
