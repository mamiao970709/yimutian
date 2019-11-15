<!--
 * @Author: your name
 * @Date: 2019-11-09 17:36:27
 * @LastEditTime: 2019-11-11 11:34:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\DetailsHeader.vue
 -->
<template>
    <div class="deheaders">
        <i class="el-icon-back"  @click="back()"></i>  
        <ul>
            <li>供应</li>
            <li>评价</li>
            <li>详情</li>
            <li>推荐</li>
        </ul>
       <el-dropdown>
            <span class="el-dropdown-link">
                 <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <router-link to="/Index">
                    回到首页
                    </router-link>
                    </el-dropdown-item>
                <el-dropdown-item>消息</el-dropdown-item>
                <el-dropdown-item>分享供应</el-dropdown-item>
                <el-dropdown-item>关心货源</el-dropdown-item>
                <el-dropdown-item>举报供应</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template> 

<script>
export default {
    name:"DetailsHeader",
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
.deheaders{
    width:100%;
    height:.5rem;
    background:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
.deheaders ul{
    width:70%;
    margin: 0 auto;
    display:flex;
}
li{
    /* margin-right:10px; */
    margin-left:30px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #999;
  }
.el-icon-arrow-down {
    font-size: 14px;
  }
i{
    font-size:24px;
    margin-left:20px;
}
.el-icon-more{
    margin-right:.2rem;
    color:#000;
}
</style>