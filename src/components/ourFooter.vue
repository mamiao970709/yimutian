<!--
 * @Author: your name
 * @Date: 2019-11-15 10:52:37
 * @LastEditTime: 2019-11-15 10:59:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\ourFooter.vue
 -->
<template>
    <footer>
        <ul>
            <li>
                <router-link to="/Index">
                    <i class="el-icon-s-home"></i>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/GoodsListPage">
                    <i class="el-icon-menu"></i>分类
                </router-link>
            </li>
            <li>
                <router-link to="/ShoppingCarPage">
                    <i class="el-icon-shopping-cart-2"></i>
                    购物车
                </router-link>
            </li>
            <li>
                <i class="el-icon-s-custom"></i>
                我的
            </li>
        </ul>
    </footer>       
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
footer{
  margin: 0 auto;
  width:100%;
  height: .5rem;
  background-color: white;
  border-top:1px solid #eee;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
li{ 
    text-align: center;
}
i{
  font-size: .2rem;
  color:black;
  display: block;
}          
</style>