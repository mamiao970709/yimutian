<!--
 * @Author: your name
 * @Date: 2019-11-09 11:49:02
 * @LastEditTime: 2019-11-09 13:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Model.vue
 -->
<template>
      <div class="bigMode">
            <div class="model">
                <div class="modeLeft">
                    <span>包邮专区</span>
                    <span>一件起</span>
                    <p>全场包邮&nbsp;&nbsp;低至9.9</p>
                    <img src="../assets/img/index_mode1.png" alt="">
                    <img src="../assets/img/index_mode2.png" alt="">
                    <div class="prefevture">
                        <p> 
                            <span style="color:#000">今日爆款</span>
                            <img src="../assets/img/index_mode3.png" alt="">
                        </p>
                        <p>
                            <span style="color:#000">产地直播</span>
                            <img src="../assets/img/index_mode4.png" alt="">
                        </p>
                    </div>
                </div>
                <div class="modeRight">
                        <span style="color:#000">闪电发货</span>
                        <span ></span>
                    <p>在24小时内发货</p>
                    <img src="../assets/img/index_mode7.png" alt="">
                    <img src="../assets/img/index_mode8.png" alt="">
                    <div class="prefevture">
                        <p>
                            <span style="color:#000">视频看货</span>
                            <img src="../assets/img/index_mode5.png" alt="">
                        </p>
                        <p> 
                            <span style="color:#000">最近浏览</span>
                            <img src="../assets/img/index_mode6.png" alt="">
                        </p>
                    </div>
                </div>              
            </div>
        </div>
</template> 
<script>
export default {
    
}
</script>

<style scoped>
 .bigMode{
    width:100%;
    height:2.6rem;
    /* background:pink; */
    padding-top:.15rem;
}
.model{
    width:94%;
    height:94%;
    background:#fff;
    margin:auto;
    border-radius:8px;
    display:flex;
    justify-content: space-around;
}
.modeLeft{
    width:50%;
    height:100%;
    border-right:2px solid #eee;
    padding-right:.15rem;
}
.modeLeft span:nth-child(1){
    display:block;
    float: left;
    font-size:18px;
    margin-top:.1rem;
    margin-bottom:5px;
}
.modeLeft span:nth-child(2){
    display:block;
    float:left;
    font-size:14px;
    width:.6rem;
    height:.2rem;
    margin-top:.13rem;
    margin-left:.1rem;
    margin-bottom:5px;
    background:red;
}
.modeLeft p{
    clear:both;
    float:left;
    color:red;
    margin-bottom:5px;
}
.modeLeft img{
    width:46%;
    height:.6rem;
    float:left;
    margin-left:5px;
}
.prefevture{
    width:100%;
    display:flex;
    justify-content:space-around;
    text-align:center;
}
 
.prefevture img{
    width:94%;
    height:.6rem;
}
.modeRight{
    width:50%;
    height:100%;
    padding-left:.15rem;
}
.modeRight span:nth-child(1){
    display:block;
    float: left;
    font-size:18px;
    margin-top:.1rem;
    margin-bottom:5px;
}

.modeRight p{
    clear:both;
    float:left;
    color:red;
    margin-bottom:5px;
}
.modeRight img{
    width:46%;
    height:.6rem;
    float:left;
    margin-left:5px;
}
.prefevture{
    width:100%;
    display:flex;
    justify-content:space-around;
    text-align:center;
}
 
.prefevture img{
    width:94%;
    height:.6rem;
}
 
</style>
