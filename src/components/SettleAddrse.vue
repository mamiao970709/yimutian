<!--
 * @Author: your name
 * @Date: 2019-11-12 20:19:59
 * @LastEditTime: 2019-11-14 17:40:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\SettleAddrse.vue
 -->
<template>
    <div class="addrseBox">
        <p class="takeOver">
           <router-link to="/NewAddresPage">
            <i class="el-icon-location-outline"></i>
            <span>请选择收货地址</span>
            <i class="el-icon-arrow-right"></i>
            </router-link>
        </p>
        <div class="orderBox">
            <div class="imgBox">
                <img :src="good.img" alt="">
            </div>
            <div class="infoBox">
                <span>{{good.name}}</span>
                <span>{{good.describe}}</span>
                <span>￥{{good.price}}元</span>
                <span>
                    <i class="el-icon-location-outline"></i>
                    {{good.area}}
                </span>
            </div>
            <div class="orders">
                <p>
                    <span>运费险</span>
                     <span class="send">卖家赠送，退换货可赔</span>
                </p>
                <p> 
                    <span>订单备注</span>
                    <span>选填，填写内容与卖家协商</span>
                </p>
            </div>
        </div>
        <div class="settleFooter">
            <span>{{good.totalMoney}}</span>
            <span> 提交订单</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"SettleAddrse",
    props:['id'],
    data(){
        return{
           good:[]
        }
    },
    created(){
        let arr=this.id.slice();
        // let str=id=0011&&id=002
        // let str=str.split("/");
        console.log(this.str);
        // axios('http://localhost:3000/shoppingCar/'+this.id)
        // .then(res=>{
        //     console.log(res.data);
        //     this.good=res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    },
    mounted(){
        // console.log("ha"+this.id);
    }
}
</script>

<style scoped>
.addrseBox{
    width:100%;
    height:.5rem;
    background:#f7f3f7;
}
.takeOver{
     padding-top:.1rem;
     padding-left:.1rem;
     font-size:18px;
}
.el-icon-arrow-right{
    margin-left:1.8rem;
    height:.5rem;
    font-size:24px;
}
.orderBox{
    box-sizing: border-box;
    width:90%;
    margin:0 auto;
    /* height:2rem; */
    /* display:flex; */
    margin-top:.1rem;
    padding:.22rem .1rem;
    background:#f7f3f7;
}
.imgBox{
    width:35%;
      float:left;
}
.imgBox img{
    width:1.3rem;
    height:1.5rem;
   
}
.infoBox{
    width:55%;
    float:right;
}
.infoBox span{
    display:block;
    margin-bottom:.1rem;
}
.infoBox span:nth-child(3){
    color:red;
}
.infoBox span:nth-child(4){
    color:#999;
}
.orders{
    clear:both;
    padding-top:.15rem;
}
.orders p{
      padding-bottom:.1rem;
}
.orders p span:nth-child(2){
    margin-left:.4rem;
    color:#999;
}
.orders p .send{
    margin-left:.5rem;
}
.settleFooter{
    width:100%;
    height:.5rem;
    position:fixed;
    bottom:0;
    left:0;
}
.settleFooter span{
    display:block;
    float:right;
    width:1rem;
    height:.4rem;
    line-height:.4rem;
    background:coral;
    border-radius:8px;
    text-align:center;
    color:#fff;
    margin-right:.3rem;
}
</style>