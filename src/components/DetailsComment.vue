<template>
    <div class="box">   
        <h3>最新评论</h3>
        <span class="noComment" v-show="hasComment">没有评论，快来抢沙发吧！</span>
        <ul>
          <li v-for="(comment,index) in currcomment" :key="index" >
            <p class="headImg">
                <img :src="comment.img" alt="">
                <span> {{comment.sayer}}</span>
            </p> 
            <p class="comContent">
                {{comment.content}}
            </p>
            <p class="comDate">
                【{{comment.date}}】
            </p>
          </li>
        </ul>   
        <div class="discribe">
            <ul>
                <li>
                    <span>宝贝描述</span>
                    <span>4.6</span>
                    <span>高</span>
                </li>
                <li>
                    <span>卖家服务</span>
                    <span>4.7</span>
                    <span>高</span>
                </li>
                <li>
                    <span>物流服务</span>
                    <span>4.6</span>
                    <span>高</span>
                </li>
            </ul>
        </div>     
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetailsComment',
  props:['id'],
  data () {
    return {
        allcomment:{},
        currcomment:null
    }
  },
  computed:{
      hasComment(){
        if(!this.currcomment) {
          return true;
        }
        
        let arr = Object.keys(this.currcomment);
        return arr.length==0;
        return true;
      }
  },
  created() {
     //从后端获取数据     
    //  axios.get('http://localhost:3000/comment')
    //  .then(res=>{ 
    //      console.log(res.data);
    //      this.allcomment =res.data;
    //      this.currcomment = this.allcomment[this.id];
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  });
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:100%;
}
h3{
    padding-left:.2rem;
}
img{
    width:.4rem;
    height:.4rem;
    border-radius:50%;
    margin-top:.06rem;
    margin-left:.06rem;
    float:left;
    margin-right:.15rem;
}
ul{
    padding-left:.15rem;
    padding-right:.15rem;
}
li{
    width:100%;
    background:#fff;
    margin-top:.1rem;
    border-radius:5px;
}
.headImg{
    width:100%;
    height:.5rem;
    line-height:.5rem;
}
span{
    display:block;
    float:left;
}
.comContent{
    margin-top:.1rem;
    margin-bottom:.1rem;
    margin-left:.1rem;
}
.comDate{
    color:#999;
}
.discribe ul{
    width:90%;
    height:.3rem;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    background: #fff;
    margin-top:.1rem;
    margin-bottom:.1rem;
    color:#999;
} 
.discribe ul li{
    width:30%;
    font-size: 12px;
    display:flex;
    justify-content: space-around;
    border-radius:none;
}
ul li span:nth-child(3){
    color:orangered;
}
.noComment{
    text-align:center;
    color:#999;
    margin-top:.2rem;
    margin-bottom:.2rem;
}
</style>
