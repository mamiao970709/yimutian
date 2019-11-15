<!--
 * @Author: your name
 * @Date: 2019-11-15 10:06:43
 * @LastEditTime: 2019-11-15 10:16:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\FenLei.vue
 -->
<template>
    <div class="boxf">
        <div class="classbox">
             <ul>
                 <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
             </ul>
        </div>
        <div class="content">
            <goodsList :typename="currtype"></goodsList>
        </div>    
    </div>       
</template>
<script>
import goodsList from "./goodsList";
import Axios from 'axios';

export default {
   data() {
      return {
          types:[],
          currtype:""
      }
   },
   components:{
       goodsList
   },
    created(){
    Axios.get('/types')
    .then((response)=> {
        // console.log(response.data);
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          console.log(typename);
          this.currtype = typename;
      }
  }
}

</script>
<style scoped>
.boxf{
    width:95%;
    height: 2rem;
    margin:0 auto;
} 
.classbox{
    width:100%;
    position: fixed;
    margin-top:.3rem;
}
.classbox ul{
    width: 100%;
    height:.4rem;
    background: green;
    display:flex;
    overflow-x: auto;
    border-radius: 6px;
    color:white;
    font-size: 16px;
} 
.classbox ul li{
    width:25%;
    flex-shrink: 0; 
    text-align: center;
    line-height: .4rem;
}
.content{
    width:100%;
    height: 1.2rem;
    margin-top:.1rem;
    display:flex;
}

 
</style>
