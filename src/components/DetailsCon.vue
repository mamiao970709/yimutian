<!--
 * @Author: your name
 * @Date: 2019-11-10 15:33:08
 * @LastEditTime: 2019-11-14 17:50:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\DetailsCon.vue
 -->

<template>
    <div class="box">   
        <div class="infoBox">
          <ul>
            <li>￥{{good.price}}元</li>
            <li>{{good.name}}</li>
            <li>{{good.describe}}</li>
            <li>
                <i class="el-icon-location-outline"></i>
                {{good.area}}
            </li>
            <li class="quick">
                <span>快递：0.00</span>
                <span>月销500</span>
                <span class="enjoy">
                    <i class="el-icon-share">分享</i>
                </span>
            </li>
          </ul>
        </div>
        <div class="activity">
            <span>活动</span>
            <span>
                <i class="el-icon-present">领20元红包</i>
            </span>
            <span>红包省钱卡，开卡本单立减</span>
            <span><i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="ensure">
            <span>保障</span>
            <span>假一赔四·坏单包赔·急速退款·不支持7天退换</span>
            <span><i class="el-icon-arrow-right"></i></span>
        </div>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetailsCon',
  props:['id'],
  data () {
    return {
        good:{}
    }
  },
  created() {
    //  console.log(this.id);
     //从后端获取数据     
    //  axios('/goods/byid/')
    //  .then(res=>{ 
    //      console.log(res.data);
    //      this.good = res.data;
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  });
  }
//   methods:{
//      goCar(){
//        this.$router.push({path:'/ShoppingCarPage'});
//      }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:100%;
}

.infoBox{
    width: 100%;
    background:#fff;
}
ul{
    padding-left:.2rem;
    padding-right:.2rem;
}
ul li:nth-child(1){
    color:red;
    padding-top:.1rem;
    margin-bottom:.1rem;
}
ul li:nth-child(2){
    width:.7rem;
    height:.3rem;
    line-height:.3rem;
    text-align:center;
    background:#eee;
    color:#999;
    border-radius:10px;
    margin-bottom:.1rem;
}
ul li:nth-child(3){
    font-size:16px;
    font-weight: bolder;
    margin-bottom:.1rem;
}
ul li:nth-child(4){
    color:#999;
    margin-bottom:.1rem;
}
ul li:nth-child(5){
    display:flex;
    justify-content:space-between;
    color:#999;
}
.enjoy{
    width:.6rem;
    height:.3rem;
    line-height:.3rem;
    text-align:center;
    border-radius:10px;
    background:#eee;
    margin-bottom:.1rem
}
.activity{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:.3rem;
    line-height:.3rem;
    background:#fff;
    margin-top:.1rem;
     padding-left:.2rem;
    padding-right:.2rem;
    box-sizing: border-box;
    font-size:12px;
}
.activity span :nth-child(0){
    color:#999;
}
.activity span :nth-child(1){
    color:red;
}
.activity span .el-icon-arrow-right{
    color:#999;
    font-size:16px;
}
.ensure{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:.3rem;
    line-height:.3rem;
    background:#fff;
    margin-top:.1rem;
     padding-left:.2rem;
    padding-right:.2rem;
    box-sizing: border-box;
    font-size:12px;
    margin-bottom:.1rem;
}
.ensure span .el-icon-arrow-right{
    color:#999;
    font-size:16px;
}
</style>
