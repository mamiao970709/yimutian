<template>
    <div class="box">
        <div class="content">
            <i class="el-icon-star-off"></i>
            <span>收藏</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="content">
            <i class="el-icon-chat-round"></i>
            <span>消息</span>
            <i class="el-icon-arrow-right"></i>
        </div>       

        <div class="content">
            <i class="el-icon-bank-card"></i>
            <span>卡卷</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="content">
            <i class="el-icon-user"></i>
            <span>客服</span> 
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>         
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
.box{
    width:100%;
    height:2rem;
    margin-bottom:.5rem;
}
.box .content{
    width:100%;
    height:.5rem;
    font-size: .2rem;
}
.box .content i:nth-child(1){
    margin-left:.3rem;
}
.box .content span{
    width:20%;
    height: .5rem;
    /* background: pink; */
    /* text-indent: .6rem; */
    margin-left:.4rem;
}
.box .content  .el-icon-arrow-right{
    margin-left:1.8rem;
    /* font-size: 40px; */
}

</style>