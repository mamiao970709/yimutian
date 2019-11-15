<template>
    <div class="totalpage">
        <!-- 提示信息 -->
        <div class="noloc_notice">
            为提高配送时效，请您尽量准确填写四级以上地址。
        </div>

        <!-- 可编辑部分 -->
        <div class="write_address"> 
            <label  class="text"> <span>收货人：</span><input type="text" v-model="textval" ></label>
            <label  class="mobile"> <span>联系电话：</span><input type="text" v-model="phone"></label>
            <label class="area"> <span>所在地区：</span><input type="text"  class="city" @click="toAddress" :value="province+city+district"><span class="right_arrow"></span></label>
            <label class="address" style="height:1.03rem"> <span>详细地址：</span><textarea maxlength="260" v-model="address"></textarea></label>
            <span  v-if="msgbool" class="msgbox">{{alertmag}}</span>
        </div>
          <!-- 省市级联动组件 -->
            <div class="mask" v-show="mask"></div>
            <v-distpicker type="mobile" @selected='selected' v-show="addInp" class="province_map">
            </v-distpicker>   

          <!-- 保存 -->
          <input class="save" @click="subFun()" type="button" value="保存" v-if="savebool">
           <!-- 保存并使用 -->
          <input class="save" @click="subanduseFun()" type="button" value="保存并使用" v-else>
    </div>
</template>
<script>

 
import VDistpicker from "v-distpicker";
export default {
     data(){
         return{
        title:"添加地址",//用来切换头部内容
        textval:"",//收件人
        phone:"",//联系电话
        province:'',//省
        city:"",//市
        district:"",//区
        address:"", //具体地址
        alertmag:"",//正则判断后的提示信息内容
        msgbool:false, //控制提示信息出现与否
        addInp :false, //加载地址栏的是否出现
        mask:false, //省市级联动的显示与否
        addnum:"",//判断是要修改还是要添加,0为修改，1为添加
        savebool:true,//判断是保存还是保存并使用
        addressid:""//保存用户Id
         }
     },
     components:{
          VDistpicker,
 
     },
     created(){

         this.addnum=this.$route.query.addnum
         this.addressid=this.$route.query.addressId
        //  判断是从订单点过来的还是从我的点进来的
        console.log(this.$route.query.savetstatus)
         if(this.$route.query.savetstatus==1){
             this.savebool=false
         }else{
             this.savebool=true
         }
        
        //  如果addnum为0表示是由修改点入的,为1表示是增加点入的
         if(this.addnum==0){
            //  把当前id的数据查询出来，显示在页面上
             var paramsadd = new URLSearchParams();
              paramsadd.append("addressId",this.addressid); 
              console.log(this.addressid)
           
            this.axios({
                url:"http://39.106.44.63:10086/address/loadAddressByAddressId",//
                method:"post",
                data: paramsadd
            }).then((ok)=>{
                //   返回对应的地址
               console.log(ok)
               this. textval=ok.data.consignee;
               this.phone=ok.data.telephone;
               this.province=ok.data.province;
               this.city=ok.data.city;
               this. district=ok.data.district;
               this.address=ok.data.street;

            })
         }
     },
    methods:{

        toAddress(){
        this.mask = true;
        this.addInp = true;
    },
  // 省级联动
     selected(data){
         this.mask =false;
         this.addInp = false;
         this.province=data.province.value
         this.city=data.city.value
         this.district= data.area.value
 }, 
        // 保存地址
        subFun(){
            // 验证手机号
            // let regphone=/^[1]\d{10}$/;
            let regphone= /^1[35798]\d{9}$/;
            let fphone=false;
            fphone=regphone.test(this.phone)?true:false;
           //如果有信息为空，点击保存，会有弹出框提示，弹出框于2秒后消失
            if(this.textval==""){
                this.msgbool=true
                let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
                this.alertmag="收件人不能为空"
            }else if(this. phone==""){
                this.msgbool=true
                 this.alertmag="手机号不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(this. city==""){
                this.msgbool=true
                 this.alertmag="省市区不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if (this.address==""){
                this.msgbool=true
                this.alertmag="地址不能为空"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(fphone==false){
                this.msgbool=true
                this.alertmag="请输入正确的手机号码"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                        this.msgbool=false
                    }
                }, 1000);
            }
            else{
                this.$store.commit("textup",{"textname":this.textval,"phone":this.phone,"area":this.city,"address":this.address})
                this.$router.push("/location")

                // 分两种情况,修改保存和添加保存
                if(this.addnum==0){
                    var paramadd = new URLSearchParams();
                    // console.log(window.localStorage.getItem("userId"));
                    paramadd.append("consignee",this.textval); 
                    paramadd.append("telephone",this.phone); 
                    paramadd.append("province",this.province); 
                    paramadd.append("city",this.city); 
                    paramadd.append("district",this.district); 
                    paramadd.append("street",this.address); 
                    paramadd.append("addressId",this.addressid); 
                    this.axios({
                    url:"http://39.106.44.63:10086/address/updateAddress",//连接地址信息库,通过用户id，保存该地址信息
                    method:"post",
                    data:paramadd
            }).then((ok)=>{
               if(ok.data==1){
                    this.$router.push("/location")
                }
             
            })
                }else{
                    // 添加地址操作没有addressId可以传输
                  var paramadd = new URLSearchParams();
            paramadd.append("user.userId",window.localStorage.getItem("uId"));
            // console.log(window.localStorage.getItem("userId"));
            paramadd.append("consignee",this.textval); 
            paramadd.append("telephone",this.phone); 
             paramadd.append("province",this.province); 
            paramadd.append("city",this.city); 
             paramadd.append("district",this.district); 
            paramadd.append("street",this.address); 
           
            // this.axios({
            //     url:"http://39.106.44.63:10086/address/addAddress",//连接地址信息库,通过用户id，保存该地址信息
            //     method:"post",
            //     data:paramadd
            // }).then((ok)=>{
            //     if(ok.data==1){
            //         this.$router.push("/location")
            //     }
             
            // })
            }
            }
        },
        //  保存并使用事件
        subanduseFun(){
               // 验证手机号
          
            let regphone=/^[1]\d{10}$/
            let fphone=false;
            fphone=regphone.test(this.phone)?true:false;
           //如果有信息为空，点击保存，会有弹出框提示，弹出框于2秒后消失
            if(this.textval==""){
                this.msgbool=true
                let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
                this.alertmag="收件人不能为空"
            }else if(this. phone==""){
                this.msgbool=true
                 this.alertmag="手机号不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(this. city==""){
                this.msgbool=true
                 this.alertmag="省市区不能为空"
                  let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if (this.address==""){
                this.msgbool=true
                this.alertmag="地址不能为空"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }else if(fphone==false){
                this.msgbool=true
                this.alertmag="手机号码不正确"
                 let i=2
                setInterval(() => {
                    i--
                    if(i==0){
                          this.msgbool=false
                    }
                }, 1000);
            }
            else{
                 // 分两种情况,修改保存和添加保存
                 if(this.addnum==0){
                // 修改需把addressid也返回给后台
            var paramadd = new URLSearchParams();
            paramadd.append("consignee",this.textval); 
            paramadd.append("telephone",this.phone); 
             paramadd.append("province",this.province); 
            paramadd.append("city",this.city); 
             paramadd.append("district",this.district); 
            paramadd.append("street",this.address); 
             paramadd.append("addressId",this.addressid); 
            this.axios({
                url:"http://39.106.44.63:10086/address/updateAddress",//连接地址信息库,通过用户id，保存该地址信息
                method:"post",
                data:paramadd
            }).then((ok)=>{
                // console.log(this.addressid)
              if(ok.data==1){

                    this.$router.push("/ordergoods?addressId="+this.addressid+"&isalter="+1)
                }
             
            })
                }else{
                // 添加地址操作没有addressId可以传输
                // isalter是0就是增加，是1是修改
            var paramadd = new URLSearchParams();
            paramadd.append("user.userId",window.localStorage.getItem("uId"));
            // console.log(window.localStorage.getItem("userId"));
            paramadd.append("consignee",this.textval); 
            paramadd.append("telephone",this.phone); 
             paramadd.append("province",this.province); 
            paramadd.append("city",this.city); 
             paramadd.append("district",this.district); 
            paramadd.append("street",this.address); 
            // this.axios({
            //     url:"http://39.106.44.63:10086/address/addAddress",//连接地址信息库,通过用户id，保存该地址信息
            //     method:"post",
            //     data:paramadd
            // }).then((ok)=>{
            //     if(ok.data==1){
            //         this.$router.push("/ordergoods?isalter="+0)
            //     }
             
            // })
            }


            } 
        }

    },
    
}
</script>
<style scoped>
.totalpage{
        position:relative;
        background:#eee;
        padding-bottom:2.25rem;
    }
 .noloc_notice{
    height:.42rem;
    text-align:center;
    line-height:.42rem;
    font-size:.14rem;
    color: #aeaeae;
    background:#eee;
}

.write_address{
    font-size:.16rem;
    color:#d0d0d0;
    padding-left:.15rem;
    background:white;
    position:relative;
}
.write_address label{
    height:.52rem;
    display:-webkit-flex;
    align-items: center;
    padding-left:.15rem;
    border-bottom:2px solid #eee;
    
}
.write_address label .address{
    height:1.5rem;
}
.write_address textarea{
    display:block;
    border:none;
    height:1.03rem;
    width:2.3rem;
    outline: none;
    font-size:.16rem;
    color:black;
}
.write_address span{
    width:.8rem;
    height:.52rem;
    line-height:.52rem;
    }

.write_address input{
    border:none;
    width:2.3rem;
    height:.49rem;
    outline: none;
    font-size:.16rem;
    color:black;
    }

    .write_address .right_arrow{
    height:.08rem;
    width:.08rem;
    font-weight:900;
    border-top:3px solid #D0D0D0;
    border-right:3px solid #D0D0D0;
    transform: rotate(45deg);
    }
.save{
    display:block;
    width:2.3rem;
    height:.51rem;
    text-align:center;
    line-height:.51rem;
    background:#999;
    margin:0 auto;
    margin-top:.2rem;
    font-size:.18rem;
    color:white;
    cursor:pointer;
}
.write_address .msgbox{
    height:.52rem;
    width:1.2rem;
    background:#444;
    color:white;
    font-size:.12rem;
    text-align:center;
    line-height:.52rem;
    border-radius:.05rem;
    padding-right:.15rem;
    padding-left:.15rem;
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
}
.write_address .msgbox{
    height:.52rem;
    width:1.2rem;
    background:#444;
    color:white;
    font-size:.12rem;
    text-align:center;
    line-height:.52rem;
    border-radius:.05rem;
    padding-right:.15rem;
    padding-left:.15rem;
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    margin:auto;
}


.province_map{
    font-size:1px;
}
.mask{
    height:3.2rem;
    width:100%;
    /* background:black; */
    /* opacity:.3; */
    position:absolute;
    left:0px;
    top:0px;
}
/* 修改选址的样式 */
.province_map[data-v-2e7de450] {
font-size: 1px;
position: absolute;
width: 100%;
overflow: auto;
height: 3rem;
}
  
</style>