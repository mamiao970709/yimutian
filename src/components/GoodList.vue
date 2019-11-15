<!--
 * @Author: your name
 * @Date: 2019-11-10 16:14:18
 * @LastEditTime: 2019-11-15 10:25:06
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
  name: 'GoodList',
  props:['typename'],//言情，武侠
  data () {
    return {
        allGoods:[],
        goods:[]
    }
  },
  created() {
     //从后端获取数据     
    //  axios.get('http://localhost:3000/goods')
    //  .then(res=>{ 
    //      this.allGoods = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
    //      this.goods = this.getGoodsByType(this.allGoods);//内部数据，由于渲染到了页面，所以，触发了组件更新
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:95%;
}

.box>ul{
    width: 100%;
}

.box>ul>li{
    margin-top:.1rem;
    width: 100%;
    display: flex;
}

.imgBox{
    width:40%;
    height: 1rem;
}

.infoBox{
    width: 60%;
    background-color: pink;
}
img{
    width: 100%;
    height: 100%;
}


</style>
