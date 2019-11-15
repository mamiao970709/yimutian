<!--
 * @Author: your name
 * @Date: 2019-11-11 09:19:37
 * @LastEditTime: 2019-11-11 11:25:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\ShopHeader.vue
 -->
<template>
    <div class="shopHeader">
        <div class="head">
            <span> <i class="el-icon-back"  @click="back()"></i></span>
            <span>购物车</span>
            <span>编辑</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"ShopHeader",
    data(){
        return {

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
</style>