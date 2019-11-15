<template>
    <div class="boxg">
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
                                <li>{{good.describe}}</li>
                                <li>价格：￥{{good.price}}元</li>
                                <li>产地：{{good.area}}</li>
                            </ul>
                        </div>
                </router-link>
            </li>
        </ul>
    </div>         
</template>
<script>
import Axios from 'axios';

export default {
  name:'goodsList',
  props:['typename'],
  data () {
    return {
        allGoods:[],
        goods:[]
    }
  },
  created() {
     //从后端获取数据     
     Axios.get('/goods')
    .then(res=>{ 
         this.allGoods = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.goods = this.getGoodsByType(this.allGoods);//内部数据，由于渲染到了页面，所以，触发了组件更新
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.goods = this.getGoodsByType(this.allGoods);
  },
  methods:{
     getGoodsByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>
<style scoped>
.boxg{
  margin: 0 auto;
  width:95%;
  /* position:fixed; */
  top:0;
  margin-top:.76rem;
}

.boxg>ul{
    width: 100%;
}

.boxg>ul>li{
    margin-top:.1rem;
    width: 100%;
    display: flex;
}

.imgBox{
    width:40%;
    height: 1.3rem;
    float:left;
}
img{
    width: 100%;
    height: 100%;
} 

.infoBox{
    width: 57%;
    margin-left:3%;
    float:right;
}
.infoBox  ul li:nth-child(1){
    width:.8rem;
    letter-spacing: .06rem;
    font-size:16px;
    background: green;
    text-indent: .12rem;
    border-radius: 8px;
    color:white;
}
.infoBox ul li{
    line-height: .26rem;
} 
.infoBox  ul li:nth-child(3) {
    color:red;
}         
</style>