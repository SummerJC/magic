<template>  
  <div class="mainContent">
      <div style="width:100%;height:100%;position:absolute">
            <div class="shareImg" id='toImg'  style="z-index:0" >
             <img class="title" src="../assets/images/word.png">
              <p>邀请的好友越多，获得积分越多</p>
              <img src="../assets/images/sq.gif">
              <p>我的专属二维码</p>
              <p>好友点击识别后关注即可获得积分</p>
            </div>
            <p class="message">长按二维码可分享我的专属海报</p>
    </div>
  <div class="homeConeten" >
   
    <header>
      <router-link to='/other/activityRules'>   <button class="fixedCircle"> 参与方式</button></router-link>
      <mt-swipe :show-indicators="false">
          <mt-swipe-item><img src="../assets/images/banner.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/banner.jpg"></mt-swipe-item>
<!--           <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item> -->
          <ul class="twoButton">
              <a @click='displayImg()'>邀请我的好友得积分</a>
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
        <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade" class="popup">
        <img :src="ownerImg" >
        <p class="message">长按二维码进行分享</p>
      </mt-popup>
       <mt-popup
        v-model="popupVisible1"
        popup-transition="popup-fade" class="popup" style="color:#fff;font-size:24px;text-align:center">
        您未关注公众号，正在为你跳转页面....
      </mt-popup>
  </div>
</div>
</template>

<style lang="scss" scoped="" type="text/css">
 @import '../assets/scss/homeAndPrize.scss';
</style>

<script type="text/babel">
import Vue from 'vue'
 import { Swipe, SwipeItem } from 'mint-ui';
import '../assets/html2canvas.js'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'hello1',
    data() {
       return{
          popupVisible:false,
           ownerImg:'',
           popupVisible1:false
       }
      },
    mounted() {
      var url = window.location.href;
      
     this.ownerImg = JSON.parse(window.localStorage.getItem('userImg'));
     if(!this.ownerImg){
        this.initImg();
     }
      
    },
    methods: {
      initImg(){
        var that = this;
        html2canvas(document.getElementById('toImg'), {
            onrendered: function(canvas) {
                var url = canvas.toDataURL("image/png");
                that.ownerImg = url;
                window.localStorage.setItem('userImg',JSON.stringify(url));
                
            },
        });
      },
      displayImg(){
        this.popupVisible = true;

      }
    },
    watch: {
     
      },
  }
</script>
