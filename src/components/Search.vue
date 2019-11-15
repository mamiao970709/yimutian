<template>
    <div class="searchBox">
         <div class="headLeft">
           <el-dropdown>
                <el-button type="primary">
                    雁塔区<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>高新区</el-dropdown-item>
                    <el-dropdown-item>碑林区</el-dropdown-item>
                    <el-dropdown-item>莲湖区</el-dropdown-item>
                    <el-dropdown-item>长安区</el-dropdown-item>
                    <el-dropdown-item>蓝天区</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="head">
            <div class="headCon">
                <router-link to="/SearchPage">
                 <i class="el-icon-search"></i> 
                <!-- <input type="text" placeholder="甘肃特产" autocomplete="off" onfocus="this.placeholder=''" onblur="this.placeholder='甘肃特产'">  -->
                <span>甘福园毛桃</span>
                </router-link>
            </div>
        </div>
        <div class="headRight">
            <i class="el-icon-plus"></i>
            <p>发布</p>
        </div>
    </div>
</template> 

<script>
export default {
    name:'Search',
    data(){
        return{

        }
    },
     methods: {
      handleClick() {
        alert('button click');
      }
    }
}
</script> 

<style scoped>
.searchBox{
    width:100%;
    height:.5rem;
    display:flex;
    background:#fff;
}
.headLeft{
    width:1rem;
    height:100%;
    line-height:.5rem;
}
.headLeft select{
    width:.7rem;
    height:.3rem;
    border:none;
    outline: none;
}
.headLeft option{
    width:.4rem;
}
.head{
    width:2.2rem;
    height:100%;
}
.headCon{
    width:2.2rem;
    height:.3rem;
    line-height:.3rem;
    margin-top:.1rem;
    background:#f7f7f7;
    border-radius:8px;
}
.headCon span{
    margin-left:.2rem;
}

.headRight{
    padding-top:.1rem;
    padding-left:.15rem;
    font-size:12px;
}
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-button{
    width:.8rem;
    background:#fff;
    color:#999;
    border:none;
  }
  i{
      font-size:18px;
    margin-left:.03rem;
  }
</style> 