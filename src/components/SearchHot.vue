<!--
 * @Author: your name
 * @Date: 2019-11-11 16:03:27
 * @LastEditTime: 2019-11-12 09:52:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\SearchHot.vue
 -->
<template>
    <div class="hotBox">
        <p>热门搜索</p>
        <ul>
            <li>
                <span>山东苹果</span>
                <span>陕西柿子</span>
                <span>苹果</span>
                <span>河北柿子</span>
            </li>
            <li>
                <span>山西苹果</span>
                <span>汉中柑橘</span>
                <span>东方红柑橘</span>
            </li>
            <li>
                <span>冻柿子</span>
                <span>洛川县苹果</span>
                <span>柑橘</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.hotBox{
    width:100%;
}
.hotBox p{
    margin:.2rem 0 .15rem .1rem;
    color:#999;
}
ul li{
    box-sizing:border-box;
    width:100%;
    margin-top:.3rem;
    padding-left:.1rem;
}
span{
    height:.4rem;
    padding:.1rem .18rem;
    background:#f7f7f7;
    border:1px solid #ccc;
    margin-right:.05rem;
}
</style>