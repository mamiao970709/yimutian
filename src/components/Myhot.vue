
<template>
    <div class="hotBox">   
        <div class="top">
            {{type}}
        </div>   
        <div class="bottom">
            <ul>
                <li v-for="(good,index) in goods" :key="index">
                    <router-link  :to='"/DetailsPage/"+good.id'>
                    <img :src="good.img" alt="">
                     </router-link>
                    <span>{{good.name}}</span>
                    <span class="prices">￥{{good.price}}</span>
                    
                </li>
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Hot',
  props:['type'],
  data () {
    return {
        goods:[
        ],
        obj:{
            '有机新品':'getNews',
            '热卖促销':'getHot'
        }
    }
  },
//  created() {
//       fetch('api/goods')
//       .then(res=>{
//         return res.json();
//       })
//       .then(data=>{
//           let funcName = this.obj[this.type];
//           this.goods = this[funcName](data);
//      })
//      .catch(err=>{
//        console.log(err);
//      })
//   },
  methods:{
      getNews(data){
          let arr = [];
          for(let i in data){
              if(data[i].isNew){
                  arr.push(data[i]);
              }
          }
          return arr;
      },
      getHot(data){
          data.sort(function (obj1,obj2) {
              return obj2.buycount-obj1.buycount;
          });
          let arr = data.slice(0,4);
          return arr;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotBox{
  margin: 0 auto .5rem;
  width:95%;
}
.top{
    width: 25%;
    height: .3rem;
    background-color:#c6f2c6;
    font-size: 14px;
    line-height: .3rem;
    text-align: center;
}
.bottom{
    width: 100%;
    /* height: 1.5rem; */
      background:#f7f3f7;
}

ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

li{
    width:45%;
    height:2rem;
    background:#fff;
    text-align:center;
    margin-bottom:.1rem;
    border-radius:10px;
    margin-top:.1rem;
}
img{
    width: 100%;
    /* height: 80%; */
    height:1.5rem;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
}
span{
    display:block;
}
.prices{
    color:red;
}
</style>
