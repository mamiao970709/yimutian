<template>
  <div class="box">
    <input type="text" placeholder="请输入手机号"  maxlength="11" v-model="username"/>
    <input type="text" placeholder="请输入密码" v-model="userpass"  maxlength="8"/>
    <input type="text" placeholder="确认密码" v-model="surepass" maxlength="8"/>
    <input type="button" value="注册" @click="reg()" />

    <p>
      如有任何疑问,请拨打一亩田客服电话400-898-3008
    </p>
    <router-link v-bind:to="loginye">
      <p class="xinxi">{{content}}</p>
    </router-link>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
    name:"regContent",
  data() {
    return {
      username: "",
      userpass: "",
      surepass: "",
      content: "",
      loginye:""
    };
  },
  methods: {
    reg: function() {
            var re = /^1[356789]\d{9}$/;
            let str = this.username;
            if(this.username=="" ||this.userpass=="" ||this.surepass==""){
                this.content="输入框不能为空";
                this.loginye="";
            }else if(!re.test(str)){
                this.content="请输入正确的手机号!";
             }
            else if(this.surepass!=this.userpass){
                this.content="两次密码不一致!";
                this.loginye="";
            }
              else if(re.test(str) ){
              fetch('/api/user?name='+this.username+'&pass='+this.userpass)
              .then(res=>{
                  return res.json();
              })
              .then(data=>{
                  console.log(data);
                  // this.users = data;
                  if(data==0){
                    this.content ="注册失败！";
                  }else if(data==1){
                    this.content ="注册成功！";
                    this.shouye="/LoginPage";
                  }else{
                    this.content ="服务器错误！";
                  } 
              })
              .catch(err=>{
                  console.log(err);
              })
            }else{
                this.cont="手机号或密码有误"
                this.loginye="";
            } 
        }
  }
};
</script>
<style scoped>
.box {
  width: 86%;
  height: 2rem;
  /* background: red; */
  margin: 0 auto;
}
.box input {
  display: block;
  margin-top: 0.38rem;
  width: 100%;
  height: 0.5rem;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  text-indent: 0.2rem;
}
.box input:nth-child(4) {
  border-bottom: none;
  border-radius: 10px;
}
.box p {
  color: #666;
  margin-top: 0.2rem;
}

.box .xinxi{
  color:red;
}
</style>
