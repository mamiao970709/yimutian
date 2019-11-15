<!--
 * @Author: your name
 * @Date: 2019-11-11 14:22:23
 * @LastEditTime: 2019-11-15 08:38:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\SearchHeader.vue
 -->
<template>
    <div class="box">
        <div class="searchBox">
            <span><i class="el-icon-back"  @click="back()"></i></span>
            <span><i class="el-icon-search"></i>
                <input type="text" placeholder="甘福园毛桃" autofocus="autofocus" v-model="searchKeyWords" @input="cancelOrSearch()">
            </span>
            <span>
                <input type="button" value="搜索" id="searchBtn"   @click="search()"> 
                 <!-- v-show="isShow" -->
                <!-- <input type="button" value="取消" id="cancelBtn" v-show="!isShow" @click="cancel()"> -->
            </span>
        </div>
        <div class="searchShow">
            <ul>
                <li v-for="(good,index) in goods" :key="index">
                    <router-link  :to='"/DetailsPage/"+good.id'>
                        <div class="imgBox">
                            <img :src="good.img" alt="">
                        </div>
                        <div class="infoBox">
                           <span>{{good.name}}</span> 
                           <span>{{good.describe}}</span> 
                           <span> ￥{{good.price}}元 </span> 
                           <span><i class="el-icon-shopping-cart-full"></i></span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
       
<script>
import axios from 'axios';
export default {
    name:"SearchHeader",
    data(){
        return {
            // isShow:true,
            searchKeyWords:"",
            goods:[],
            // save:[]
        }
    },
    created(){
         
    },
    methods:{
        back(){
              this.$router.go(-1);
        },
        search:function(){
            this.isShow=false;
            // axios('api/goods')
            // .then(res=>{
            //   this.goods=res.data;
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
        },
        // cancel:function(){
        //     this.isShow=true;
        //     this.$router.path({path:"/"});
        // },
        cancelOrSearch:function(){
            if(this.searchKeyWords!=""){
                 this.isShow=true;
            }else{
                this.isShow=false;
            }
        }
    }
}
</script>

<style scoped>
.box{
    width:100%;
    box-sizing:border-box;
}
  .searchBox{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#f7f7f7;
    display:flex;
    justify-content: space-around;
    position:fixed;
    top:0;
    left:0;
}
#searchBtn{
    border:none;
    background:#f7f7f7;
    font-size:16px;
} 
.searchBox span:nth-child(1){
    font-size:24px;
    color:#999;
}
.searchBox span:nth-child(2){
    display:block;
    width:2.3rem;
    height:.3rem;
    line-height:.3rem;
    background:#fff;
    margin-top:.1rem;
    border-radius:5px;
}
.searchBox span:nth-child(3){
    font-size:16px;
}
input{
    height:.3rem;
    border:none;
    outline: none;
    background:#fff;
    margin-left:.15rem;
}
i{
    margin-left:.1rem;
}
 
.searchShow{
    width:100%;
    background:#f7f7f7;
    margin-top:.5rem;
}
.searchShow ul li{
    box-sizing:border-box;
    width:100%;
    height:1.5rem;
    background:#fff;
    margin-bottom:.1rem;
    padding-left:.1rem;
    padding-top:.15rem;
    display:flex;
    justify-content:space-around;
    
}
img{
    width:100%;
    height:1.2rem;
    border-radius:6px;
}
.imgBox{
    width:40%;
    height:100%;
    float:left;
}
.infoBox{
    width:55%;
    height:100%;
    /* background:darkkhaki; */
    float:right;
}  
.infoBox span{
    display:block;
}
.infoBox span:nth-child(2){
    margin-top:.15rem;
    margin-bottom:.15rem;
}
.infoBox span:nth-child(3){
    color:red;
    float:left;
}
.infoBox span:nth-child(4){
    float:right;
    font-size:20px;
    padding-right:.2rem;
}
</style>