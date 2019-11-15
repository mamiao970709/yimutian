<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-12 16:52:35
 -->
<template>
    <div class="sellWell">
        <ul>
            <li>
                <img src="../assets/img/fruit1.png" alt="">
                <span>苹果</span>
            </li>
            <li>
                <img src="../assets/img/fruit2.png" alt="">
                <span>橘子</span>
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
                <img src="../assets/img/fruit9.png" alt="">
                <span>桃子</span>
            </li>
        </ul>   
    </div>  
</template>

<script>

export default {
  name: 'SellWell',
  data () {
    return {
    }
  }
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
