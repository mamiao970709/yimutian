<!--
 * @Author: your name
 * @Date: 2019-11-12 19:20:39
 * @LastEditTime: 2019-11-13 13:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\SettleHead.vue
 -->
<template>
    <div class="settleBox">
        <span><i class="el-icon-back" @click="back()"></i></span>
        <span>确认订单</span>
    </div>
</template>

<script>
export default {
    name:"SettleHead",
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.settleBox{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    /* background:#f7f3f7; */
}
.settleBox span:nth-child(2){
    margin-left:1.2rem;
    font-size:18px;
}
.el-icon-back{
    font-size:24px;
    margin-left:.1rem;
}
</style>