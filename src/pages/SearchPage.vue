<!--
 * @Author: your name
 * @Date: 2019-11-11 14:09:31
 * @LastEditTime: 2019-11-12 17:12:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\SearchPage.vue
 -->
<template>
    <div class="box">
        <SearchHeader></SearchHeader>
        <SearchHot></SearchHot>
    </div>
</template>
     
<script>
import SearchHeader from '../components/SearchHeader';
import SearchHot from '../components/SearchHot';
export default {
    name:"SearchPage",
    data(){
        return {

        }
    },
   components:{
        SearchHeader,SearchHot
    }
}
</script>

<style scoped>

</style>