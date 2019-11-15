<!--
 * @Author: your name
 * @Date: 2019-11-15 10:52:45
 * @LastEditTime: 2019-11-15 11:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\ourTop.vue
 -->
<template>
    <div class="box">
        <div class="left">
            <i class="el-icon-s-custom"></i>
        </div>
        <div class="midd">
            <router-link to="/LoginPage">
                <p class="login">登录</p>
            </router-link>
            <router-link to="/regPage">
                <p>注册</p>
            </router-link>
        </div>
        <div class="right">
            <i class="el-icon-setting"></i>
        </div>
    </div>           
</template>
<script>
export default {
   data() {
      return {
      }
   },
}
</script>
<style scoped>
.box{
    width:100%;
    height: 1.4rem;
    background: #0cd0c2;
    padding-top:.6rem;
    /* padding-left:.2rem; */
    position:relative;
} 
.box .left{
    width:1rem;
    height: 1rem;
    background: #ffffff;
    border-radius: 50%;
    text-align: center; 
    margin-left:.12rem;
} 
.el-icon-s-custom{
    font-size: 78px;
    line-height:.9rem;
    color:#c9c9cb;
} 
.midd{
    width:1.2rem;
    height: .2rem;
    /* background:pink; */
    position:absolute;
    left:1.2rem;
    top:1rem;
}
.midd p{
    font-size: 18px;
    color:white;
    margin-left:.15rem;
}
.midd p:nth-child(1){
    margin-bottom:.1rem;
    float:left;
    margin-right:.1rem;
}
.right{
    width:.3rem;
    height: 1rem;
    /* background: pink; */
    position:absolute;
    left:3.3rem;
    top:.3rem;
    font-size: 30px;
    color:white;
}       
</style>