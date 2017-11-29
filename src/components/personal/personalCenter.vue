<template> 
  <div class="perCenter">
    <div style="width:100%;height:100%;position:absolute">
        <div class="shareImg" id='toImg'  style="z-index:0" >
         <img class="title" src="../../assets/images/word.png">
          <p>邀请的好友越多，获得积分越多</p>
          <img src="../../assets/images/sq.gif">
          <p>我的专属二维码</p>
          <p>好友点击识别后关注即可获得积分</p>
        </div>
        <p class="message">长按二维码可分享我的专属海报</p>
    </div>
    <div class="MyCentent">
        <div class="banner">
          <div>
               <div class="residue">
                <span class="ative">{{surplus}}</span>
                <p>剩余积分</p>
               </div>
               <div class="all">
                <span class="ative">{{aggregate}}</span>
                <p>获得总积分</p>
               </div>
          </div>
          <ul class="nf">
              <li>直接推荐好友数 ：{{directNum}}</li>
              <li class="nf_jian">间接推荐好友数 ： {{indirectNum}}</li>
              <li>我的推荐人 ： {{Myref}}</li>
          </ul>
          <div class="banner_rule">
            <span>活动规则</span>
          </div>
        </div>

      <div class="center">
        <router-link :to="{path:'/personal/integralList'}">
          <div class="center_rank">
            <p>积分排行榜</p>
          </div>
        </router-link>
        <router-link :to="{path:'/personal/exchangeRecord'}">
          <div class="center_record">
                <p>兑换记录</p>
          </div>
        </router-link>
      </div>
      <div class="List">
          <div class="list_s">
              <p>我的推荐好友</p>
          </div>
          <div class="list_l"  v-infinite-scroll="loadMore"
               infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">
              <div class="l_one"  v-for="item in list">
                <img src="../../assets/images/ava72.png" />
                <div class="l_ot">
                  <span>金莫颉</span>
                  <p>2017.11.15</p>
                </div>
                <div class="l_f">
                  直接好友
                </div>
              </div>
          </div>
      </div>
        <footer @click='displayImg'>
          <span >邀请好友得积分</span>
        </footer>
      </div>
       <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade" class="popup">
        <img :src="ownerImg" >
        <p class="message">长按二维码进行分享</p>
      </mt-popup>
  </div>
</template>

<style scoped>

</style>

<script type="text/babel">

  import Vue from 'vue'
  import { InfiniteScroll } from 'mint-ui';

  Vue.use(InfiniteScroll);
import HistoryList from '../../components/personal/historyList'

import '../../assets/html2canvas.js'

  export default {
    name: 'hello2',
    data() {
       return{
         surplus:"60",
         aggregate:"100",
         directNum:"123",
         indirectNum:"345",
         Myref:"吴胜",
         list:["1","2","3"],
         ownerImg:'',
         popupVisible:false,
		     showLoading:true,
         loadGif:true,
         loading:false

       }
      },
    mounted() {
      this.initImg();
    },
    methods: {

      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      },
      initImg(){
        var that = this;
        html2canvas(document.getElementById('toImg'), {
            onrendered: function(canvas) {
                var url = canvas.toDataURL("image/png");
                that.ownerImg = url;
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



