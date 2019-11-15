<template>
    <div>
        <regTop></regTop> 
        <regContent></regContent> 
    </div>
        
</template>
<script>
import regTop from "../components/regTop";
import regContent from "../components/regContent";
export default {
    name:"regPage",
   data() {
      return {
      }
   },
   components:{
        regTop,regContent
   }
}
</script>
<style scoped>
            
</style>