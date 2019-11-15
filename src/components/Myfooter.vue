<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-11-15 10:55:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <footer>   
        <ul>
            <li>  
                <i class=" el-icon-s-home"></i>
                首页
            </li>
            <li>
                <router-link to="/GoodsListPage">
                <i class="el-icon-menu"></i>分类
                </router-link>
            </li>
            <li>
                <img src="../assets/img/logo.png" alt="">
            </li>
            <li>
                <router-link to="/ShoppingCarPage">
                <i class="el-icon-shopping-cart-2"> </i>
                购物车
                </router-link>
            </li>
            <li>
                <router-link to="/mePage">
                    <i class="el-icon-s-custom"></i>
                    我的
                </router-link>
            </li>
        </ul>
    </footer>  
</template>

<script>

export default {
  name: 'MyFooter',
  data () {
    return {
       
    }
  }
}
</script>
<style scoped>
footer{
  width:100%;
  height: .5rem;
  background-color:#f7f3f7;
  margin-top:.1rem;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
ul li:nth-child(1){
    color:limegreen;
}
img{
    width:.3rem;
    height:.4rem;
}
.el-icon-s-home{
    display:block;
    text-align:center;
}
i{
    display:block;
    text-align:center;
}
</style>