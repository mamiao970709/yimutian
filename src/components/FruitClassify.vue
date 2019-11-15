<!--
 * @Author: your name
 * @Date: 2019-11-11 17:22:43
 * @LastEditTime: 2019-11-15 10:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\FruitClassify.vue
 -->
 
<template>
    <div class="sellWell">
        <ul>
            <li>
                 <router-link to="/DetailsPage/001001">
                <img src="../assets/img/fruit1.png" alt="">
                <span>苹果</span>
                 </router-link>
            </li>
            <li>
                <router-link to="/DetailsPage/001002">
                <img src="../assets/img/fruit2.png" alt="">
                <span>桃子</span>
                </router-link>
            </li>
            <li>
                <img src="../assets/img/fruit3.png" alt="">
                <span>橙子</span>
            </li>
            <li>
                <img src="../assets/img/fruit4.png" alt="">
                <span>梨</span>
            </li>
            <li>
                <img src="../assets/img/fruit5.png" alt="">
                <span>梨</span>
            </li>
            <li>
                <img src="../assets/img/fruit6.png" alt="">
                <span>甘蔗</span>
            </li>
            <li>
                <img src="../assets/img/fruit7.png" alt="">
                <span>葡萄</span>
            </li>
            <li>
                <router-link to="/GoodsListPage">
                <img src="../assets/img/fruit10.png" alt="">
                <span>查看更多</span>
                </router-link>
            </li>
        </ul>   
    </div>  
</template>

<script>
import axios from 'axios'
export default {
  name: 'SellWell',
  props:['id'],
  data () {
    return {
        goods:[]
    }
  },
//   created(){
//       axios('/goods/all')
       
//       .then(res=>{
//           console.log(res.data);
//           this.goods=res.data;
//       })
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sellWell{
    width: 100%;
    height: 1.9rem;
    background-color: #f7f3f7;
    padding-bottom:.1rem;
    box-sizing:border-box;
}
ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}
li{
    width:.6rem;
    height: .8rem;
    /* margin: .18rem .15rem;  */
    margin:.1rem .15rem .01rem;
    text-align:center;
}
img{
    width:.6rem;
    height:.6rem;
}

</style>
