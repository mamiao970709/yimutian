<!--
 * @Author: your name
 * @Date: 2019-11-11 17:05:52
 * @LastEditTime: 2019-11-11 20:54:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\FruitPage.vue
 -->
<template>
   <div class="box"> 
        <Search class="search"></Search>
        <div class="center">
            <FruitNav></FruitNav>
            <FruitClassify></FruitClassify>
            <FruitProduct></FruitProduct>
        </div>
        <Myfooter class="footers"></Myfooter>    
    </div>
</template>

<script>
 
import Search from '../components/Search';
import FruitNav from '../components/FruitNav';
import FruitClassify from '../components/FruitClassify';
import FruitProduct from '../components/FruitProduct';
import Myfooter from '../components/Myfooter';
export default {
    name:"FruitPage",
    data(){
        return {

        }
    },
    components:{
       Search,FruitNav,FruitClassify,FruitProduct,Myfooter
    } 
    
}
</script>

<style scoped>
 
.box{
    display:flex;
    height:100%;
    flex-direction: column;
}
.center{
    flex:1;
    overflow:auto;
    margin-top:.5rem;
}
.search{
    position:fixed;
    top:0;
    z-index:10;
}
.footers{
    position: fixed;
    bottom:0;
    z-index:10;
    clear:both;
} 
</style>