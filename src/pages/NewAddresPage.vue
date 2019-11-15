<!--
 * @Author: your name
 * @Date: 2019-11-13 14:17:26
 * @LastEditTime: 2019-11-13 14:57:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\pages\NewAddresPage.vue
 -->
<template>
    <div class="box">
        <NewHeader></NewHeader>
        <NewAddres></NewAddres>
    </div>
</template>

<script>
import NewHeader from '../components/NewHeader';
import NewAddres from '../components/NewAddres';
export default {
    name:"NewAddresPage",
    data(){
        return{

        }
    },
    components:{
        NewHeader,NewAddres
    }
}
</script>

<style scoped>

</style>