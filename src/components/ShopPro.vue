<template>
    <div class="relProducts">
            <span class="related">相关产品</span>
        <div class="boxs" style="display:block;">
            <div class="conLeft">
                <a href="#"> 
                    <img src="../assets/img/index_mode1.png" alt="">
                    <p>云南高原红泥<br>雪莲果一件代发</p>
                    <span>¥13.00 元/件</span>
                </a>
                <a href="#"> 
                    <img src="../assets/img/index_mode2.png" alt="">
                    <p>云南天山红泥红<br>心雪莲果批发一件代发</p>
                    <span>¥5.00 元/件</span>
                </a>
                    
            </div>
            <div class="conRight">
                <a href="#"> 
                    <img src="../assets/img/index_mode3.png" alt="">
                    <p>云南红泥红心雪莲果<br>四件起包邮</p>
                    <span>¥23.00 元/件</span>
                </a>
                <a href="#"> 
                    <img src="../assets/img/index_mode4.png" alt="">
                    <p>云南新鲜红心火龙果<br>新鲜水果顺丰包邮</p>
                    <span>¥12.00 元/件</span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:"ShopPro"
}
</script>

<style scoped>
.relProducts{
    width:100%;
    height:3rem;
    background:#fff;
    margin-top:.1rem;
}
.boxs a{
    display:block;
    width:1.7rem;
    border-radius:5px;
    background:#fff;
    color: #333; 
}
.related{
    display:block;
    width:100%;
    height:.5rem;
    box-sizing: border-box;
    line-height:.5rem;
    padding-left:.3rem;
    margin-top:.1rem;
    font-size:18px;
    color:#9c9a9c;
    border-bottom:1px solid #eee;
}
.conLeft{
    width:1.7rem;
    float:left;
    margin-right:.11rem;
    margin-left:.13rem;
    text-align: center;
}
.conLeft img{
    width:1.7rem;
    height:1.7rem;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}
.conLeft span{
    color:red;
    display:block;
    margin-bottom:.2rem;
}
.conRight{
    width:1.7rem;
    float:left;
    text-align: center;
}
.conRight img{
    width:1.7rem;
    height:1.7rem;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}
.conRight span{
    color:red;
    display:block;
    margin-bottom:.1rem;
}
</style>