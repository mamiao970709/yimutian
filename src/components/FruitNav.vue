<!--
 * @Author: your name
 * @Date: 2019-11-09 10:00:38
 * @LastEditTime: 2019-11-11 20:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Navs.vue
 -->
<template>
    <div class="box">
         <div class="classBox">
            <ul>
                <li><router-link to="/Index">首页</router-link></li>
                <li>水果</li>
                <li>蔬菜</li>
                <li>土特产</li>
                <li>坚果干果</li>
                <li>农副产品</li>
                <li>肉蛋奶</li>
                <li>名宿旅游</li>
                <li>影视城</li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    
}
</script> 

<style scoped>
.box{
    width:100%;
    background:#fff;
}
.classBox ul{
    display: flex;
    width: 100%;
    height: .3rem;
    overflow-x: auto; 
}
.classBox ul li{
    margin-right:30px;
    flex-shrink: 0; /*在一行显示*/
    text-align: center;
    line-height: .3rem;
    color:#636563;
}
.classBox ul li:nth-child(1){
    margin-left:12px;
}
.classBox ul li:nth-child(2){
    color:olivedrab;
    border-bottom:1px solid olivedrab
}
</style> 