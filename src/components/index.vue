<template>  
  <div class="homeConeten"  >
    <header>
      <router-link to='/other/activityRules'>   <button class="fixedCircle"> 参与方式</button></router-link>
      <mt-swipe :show-indicators="false">
          <mt-swipe-item><img src="../assets/images/banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/banner.jpg"></mt-swipe-item>
<!--           <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item> -->
          <ul class="twoButton">
              <a>邀请我的好友得积分</a>
                <a href="/personal/personalCenter"> 查看我的积分</a>
          </ul>
        </mt-swipe>
        
    </header>
        
        <ul class="goodsList">
          <li v-for='site in 6'>
            <router-link :to="{path:'/commodity/prizeInfo',query:{goodsId:'123'}}">  
             <div class="goodsImg">
              <img src="../assets/images/goods.jpg">
             </div>
             <div class="content">
               <p>爱奇艺会员爱奇艺会员爱奇艺会员</p>
               <div class="bottom"><p>20积分</p>
                  <button class="exchangeButton">兑换</button>
                  <!-- <button class="noExchangeButton">已兑光</button> -->
              </div>
             </div>
           </router-link>
          </li>
        </ul>
  </div>

</template>

<style lang="scss" scoped="" type="text/css">
 @import '../assets/scss/homeAndPrize.scss';
</style>

<script type="text/babel">
import Vue from 'vue'
 import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'hello1',
    data() {
       return{

       }
      },
    mounted() {

    },
    methods: {

    },
    watch: {
     
      },
  }
</script>
