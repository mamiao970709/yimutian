<!--
 * @Author: your name
 * @Date: 2019-11-10 16:14:18
 * @LastEditTime: 2019-11-15 09:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\GoodList.vue
 -->
 
<template>
    <div class="box">   
        <div style="display:none" >{{typename}}</div>
         <ul>
            <li v-for="(good,index) in goods" :key="index" >
                <router-link  :to='"/DetailsPage/"+good.id'>
                        <div class="imgBox">
                            <img :src="good.img" alt="">
                        </div>
                        <div class="infoBox">
                            <ul>
                                <li>{{good.name}}</li>
                               
                                <li>价格：￥{{good.price}}元</li>
                            </ul>
                        </div>
                </router-link>
            </li>
        </ul>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'FruitProduct',
  props:['typename'], 
  data () {
    return {
        allGoods:[],
        goods:[]
    }
  },
  created() {
     //从后端获取数据     
    //  axios('/goods/all')
    //  .then(res=>{ 
    //      console.log(res.data);
    //      this.allGoods = res.data; 
    //      this.goods = this.getGoodsByType(this.allGoods); 
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  });
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.goods = this.getGoodsByType(this.allGoods);
  },
  methods:{
     getGoodsByType(data){ 
         let arr=[];
         for(let i in data){
             if(data[i].type=="水果"){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin-bottom:.5rem;
  width:100%;
}

.box>ul{
    width: 100%;
}

.box>ul>li{
    margin-top:.1rem;
    width: 45%;
    float:left;
    margin-left:.13rem;
    background:#f7f7f7;
    margin-bottom: .15rem;
    border-radius:8px;
}

.imgBox{
    /* width:40%; */
    height: 1.5rem;
}

.infoBox{
    /* width: 60%; */
    height:.6rem;
    text-align:center;
}
.infoBox li:nth-child(1){
    padding-top:.1rem;
    padding-bottom:.1rem;
}
.infoBox li:nth-child(2){
    color:red;
}
img{
    width: 100%;
    height: 100%;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
}


</style>
