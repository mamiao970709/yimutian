<!--
 * @Author: your name
 * @Date: 2019-11-15 11:16:00
 * @LastEditTime: 2019-11-15 11:27:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\loginDet.vue
 -->
<template>
    <div class="box">
        <el-input class="phone"  v-model="username" placeholder="请输入手机号" maxlength="11"></el-input>
        <el-input placeholder="请输入密码" v-model="userpass" show-password maxlength="8"></el-input>
        <span>{{cont}}</span>
        <router-link v-bind:to="shouye">
            <input class="login" type="button" value="登录" @click="denglu">
        </router-link>
        <!-- <input type="button" value="注册"> -->
    </div>            
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name:'loginDet',
    props:['from'],
   data() {
      return {
        username: '',
        userpass: '',
        cont:'',
        shouye:''
      }
   },

   methods:{
        denglu:function(){
            // var re = /^1\d{10}$/;
            var re = /^1[3456789]\d{9}$/;
            let str = this.username;
            if(this.username=="" || this.userpass==""){
                this.cont="请输入手机号和密码";
                this.shouye="";
            }else if(re.test(str)){
                fetch('/api/user?name='+this.username+'&pass='+this.userpass)
                .then(res=>{
                    return res.json();
                })
                .then(data=>{
                    console.log(data);
                    // this.users = data;
                    this.shouye="/";
                    //还要判断手机号或密码是否正确
                })
                .catch(err=>{
                    console.log(err);
                })
            }else{
                this.cont="手机号或密码有误"
                this.shouye="";
            } 
        }

   }

   
}
</script>
<style scoped>
.box{
    width:90%;
    height:2rem;
    /* background:pink; */
    margin:0 auto;

}
.box .phone{
    margin-top:.1rem;
    margin-bottom:.2rem;
    border:none;
}
.login{
    width:99%;
    height:.4rem;
    margin-top:.5rem;
    text-align: center;
    background:#02ceb3;
    border:none;
    outline: none;
    border-radius: 6px;
}
.box span{
    width:99%;
    height:.4rem;
    margin-top:.06rem;
    /* position:absolute; */
}        
</style>