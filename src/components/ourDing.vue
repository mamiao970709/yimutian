<template>
    <div class="box">
        <div class="top">
            <p>我的订单</p>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <i class="el-icon-bank-card"></i>待支付
                </li>
                <li>
                    <i class="el-icon-sell"></i>代发货
                </li>
                <li>
                    <i class="el-icon-truck"></i>待收货
                </li>
                <li>
                    <i class="el-icon-edit-outline"></i>
                    待评价
                </li>
                <li>
                    <i class="el-icon-document-add"></i>
                    退款/售后
                </li>
            </ul>
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
    height: 1.6rem;
    /* background:pink; */
    margin:0 auto;
    line-height: .6rem;
}
.box p{
    text-indent: .2rem;
    font-size: 18px;
}
.bottom{
    width:100%;
    height: 1rem;
    /* background:skyblue; */
} 
.bottom ul{
    display: flex; 
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
.bottom ul li{ 
    text-align: center;
}
i{
  font-size: .22rem;
  color:red;
  display: block;
}

           
</style>