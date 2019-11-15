<template>
    <div class="box">
        <div class="shopHeader">
            <div class="head">
                <span> <i class="el-icon-back"  v-on:click="back()"></i></span>
                <span>购物车</span>
                <span @click="delGoods()" >删除</span>
            </div>
        </div>
        <div id="box">
            <!-- 购物车列表 -->
            <ul>
                <li class="goodsBox" v-for="(good,index) in goods" :key="index">
                    <div class="radioBox">
                        <input type="checkbox" v-model="good.isChecked">
                    </div>
                    <div class="goodsImgBox">
                        <img :src="good.img" alt="">
                    </div>
                    <div class="goodsInfoBox">
                            <!-- <p>{{good.id}}</p> -->
                            <p>{{good.name}}</p>
                            <p>{{good.describe}}</p>
                            <p>
                                <span class="price">￥{{good.price}}</span> 
                                <span>
                                        <input class="btnReduce" type="button" value=" - " @touchstart="reduceCount(index)">
                                        <input class="count" type="text" v-model="good.count">
                                        <input class="btnAdd" type="button" value=" + " @touchstart="addCount(index)">
                                </span> 
                            </p>
                    </div>
                </li>                                     
            </ul>
        </div>
        <div class="goodsTotalBox">
            <p>
               全选：<input type="checkbox"  id="allCheckBox" v-model="allcheck" @click="checkall" >  
            </p>  
            <p>
               合计：<span id="totalMoney">￥{{totalMoney}}</span>
            </p>
            <p>
                <span class="settleAccounts" v-on:click="isSelect()">
                    <!-- <router-link :to='"/SettlePage/"+goods.id'> -->
                     结算
                    <!-- </router-link> -->
                </span>
            </p>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
  name: 'ShoppingCar',
  
  data () {
    return {
        goods:[ 
        ],
        allcheck:false,
         
    }
  },
  created() {
     axios.get('http://localhost:3000/shoppingCar')
     .then(res=>{
         let tempGoods = res.data;
         //给每个商品增加属性 isChecked
         for(let i in tempGoods){
             tempGoods[i].isChecked = false;
         }
         this.goods = tempGoods;
     })
     .catch(err=>{
         console.log(err);
     })
  },
  computed:{
      totalMoney:function () {          
          let money = 0;
          let isAllCheck = true;
          for(let i in this.goods){
              if(this.goods[i].isChecked){
                  money+=this.goods[i].count*this.goods[i].price;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          console.log(money);
          return money;
      }
  },
  methods:{
      back(){
        this.$router.go(-1);
      },
      reduceCount(index){
          if(this.goods[index].count <= 1){
              this.goods[index].count=1;
              return;
          }
          this.goods[index].count--;
      },
      addCount(index){
          console.log(index);
          this.goods[index].count++;
      },
      checkall(){
        //   console.log(this.allcheck);
          console.log(event.target.checked);
          this.goods.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      },
      isSelect(){
            let count=0;
            // let str="";
            let str=[];
            for(let i in this.goods){
                if(this.goods[i].isChecked==false){
                    count++;
                }else{
                    str+=this.goods[i].id;
                    
                }
            }
            if(count==this.goods.length){
                // alert("请选择要付款的商品");
                Toast({
                    message: '请选择要付款的商品',
                    position: 'middle',
                    duration: 5000
                    });
            }else{
                this.$router.push({path:`/SettlePage/${str}`});
            }
       },
       delGoods(){
            let count=0;
            let str=[];
            for(let i in this.goods){
                if(this.goods[i].isChecked==true){
                    count++;
                    // str=+this.goods[i];
                    // console.log(str);
                    // for(let index in str){
                       
                    // }
                    this.goods.splice(i,count+1);
                     
                    // axios('http://localhost:3000/shoppingCar'+this.id)
                    // .then(data=>{
                    //      if(this.data==1){
                    //             Toast({
                    //             message: '删除成功',
                    //             position: 'middle',
                    //             duration: 2000  
                    //            });
                    //      }else{
                    //          Toast({
                    //             message: '删除失败',
                    //             position: 'middle',
                    //             duration: 2000  
                    //            });
                    //      }
                    // })
                }
            }
            if(count==0){
                Toast({
                    message: '请选择要删除的商品',
                    position: 'middle',
                    duration: 1000  
                });
                return;
            }else{

            }
        }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopHeader{
    width:100%;
    height:.5rem;
    background:#fff;
}
.head{
    width:100%;
    height:100%;
    line-height:.5rem;
    display:flex;
    justify-content:space-around;
}
.head span:nth-child(1){
    font-size:24px;
    color:#999;
}
.head span:nth-child(2){
    font-size:18px;
}
.head span:nth-child(3){
    color:#999;
    
}
.box{
  
  width:100%;
}

#box{
    margin-top: .2rem;
    width: 90%;
    margin: 0 auto;
    flex: 1;
    overflow-y: auto;
}
#box>ul{
    width: 100%;
}
#box>ul>li{
    margin: 10px auto;
    width: 100%;
    height: 1.6rem;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
}
#box div{
    height: 100%;
    box-sizing: border-box;
}
#box .radioBox{
    width:12%;
    text-align:center;
    padding-top:.65rem;
}
#box .radioBox input{
    margin: auto 0;
}
#box .goodsImgBox{
    width:28%;
}
#box .goodsImgBox img{
    width:100%;
    height: 70%;
    margin-top:.23rem;
    margin-right:.1rem;
    border-radius:5px;
}
#box .goodsInfoBox{
    width: 60%;
    margin-left:.1rem;
    padding-right:.1rem;

}
#pId{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.goodsInfoBox p:nth-child(1){
    margin-top:.2rem;
    margin-bottom:.1rem;
}

.goodsInfoBox p:nth-child(3){
    float:right;
    margin-top:.2rem;
}
.price{
    color:red;
}
.btnReduce{
    width:.4rem;
    height:.3rem;
    background:#fff;
    border:1px solid #ccc;
    margin-left:.1rem;
}
.count{
    width:.35rem;
    height:.28rem;
    background:#fff;
    border:1px solid #ccc;
    text-align:center;
}
.btnAdd{
    width:.4rem;
    height:.3rem;
    background:#fff;
    border:1px solid #ccc;
}
input{
    padding:0;
    margin:0;
    vertical-align: middle;
    outline: none;
}
.goodsTotalBox{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#fff;
    display:flex;
    justify-content:space-around;
    position:fixed;
    bottom:0;
    left:0;
}
#totalMoney{
   color:red;
}
.settleAccounts{
    display:block;
    width:.8rem;
    height:.35rem;
    line-height:.35rem;
    text-align:center;
    background:#f66a2d;
    margin-top:.08rem;
    border-radius:8px;
    color:#fff;
}
</style>
