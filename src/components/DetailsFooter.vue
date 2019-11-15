<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-11-14 18:18:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <div class="DetFooter">
        <ul>
            <li>
                <i class="el-icon-chat-dot-round"></i>
                聊一聊
            </li>
            <li>
            <i class="el-icon-phone-outline"></i>
             打电话</li>
            <li><router-link to="/ShoppingCarPage">
             <i class="el-icon-shopping-cart-2"></i>
            购物车</router-link></li>
            <li>
                <span class="addCar" @click="addCars()">加入购物车 </span>
                <span class="purchase">立即购买</span>
            </li>
        </ul>
  </div> 
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetailsFooter',
  data () {
    return {
       
    }
  },
  methods:{
    //   addCar(){
    //       axios('http://localhost:3000/shoppingCar')
    //       .then(res=>{
              
    //       })
    //   }
  }
  
}
</script>
<style scoped>
.DetFooter{
  width:100%;
  height: .5rem;
  background-color:#fff;
  margin-top:.1rem;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
li{
    font-size:12px;
    color: #999;
}
i{
    display:block;
    text-align:center;
    font-size:16px;
}
ul li:nth-child(4){
    display:flex;
}
.addCar{
    width:.8rem;
    height:.4rem;
    line-height: .4rem;
    background: orange;
    color:#fff;
    text-align: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.purchase{
    width:.8rem;
    height:.4rem;
    line-height: .4rem;
    background: red;
    color:#fff;
    text-align: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>