<template>
    <div class="addresBox">
         <span><i class="el-icon-back"  @click="back()"></i></span>
         <span>添加地址</span>
    </div>
</template>

<script>
export default {
    name:"NewHeader",
    data(){
        return {

        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.addresBox{
    width:100%;
    height:.5rem;
    background:#fff;
}
.addresBox span:nth-child(1){
    margin-left:.2rem;
    line-height:.5rem;
    font-size:24px;
}
.addresBox span:nth-child(2){
    margin-left:1.1rem;
    font-size:18px;
}
</style>