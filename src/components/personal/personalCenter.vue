<template>
  <div>
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
                 infinite-scroll-distance="20">
                <div class="l_one"  v-for="item in 10">
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
        list:[],
         ownerImg:'',
         popupVisible:false


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
<style>
.popup{
 background: none;
 width: calc(100% - 80px)
}
.popup img{
  width: 100%;
}
 .shareImg{
  width: calc(100% - 60px);
  height: 50%;
  margin: 35% 30px 0;
  background: url('../../assets/images/shareQRcode.png');
  background-size:100% 100%;
  /*background: #fe5050;*/
  text-align: center;
  border-radius: 5px;
  color: #fff;
  font-size: 13px;
  line-height:20px;
}
 .shareImg .title{
  width: 70%;
  padding-top: 20px;
}
.shareImg  img{
  width: 50%;
  margin:10px auto;
}
 .shareImg  p:nth-child(2){
  font-size: 13px;
  margin-top: -20px;
}
.message{
  font-size: 13px;
  color: #fff;
  text-align: center;
  margin-top: 15px;
}
.MyCentent{
  z-index: 10;
  width: 100%;
  min-height: 100%;
  height: auto;
  position: absolute;
  background-size: cover;
  background: #ffdcdc;
}

    .banner {
      background: url(../../assets/images/pre.png) no-repeat;
      width:100%;
      height:250px;
      background-size: 100% 100%;
      overflow: hidden;
    }
  .banner .residue{
    text-align: center;
    width:50%;
    border-right: 1px solid #fe9798;
    float: left;
    margin-top: 30px;
  }
  .banner .ative{
      font-size: 32px;
    color: #fffeae;
  }
  .banner .all{

    text-align: center;
    width:50%;
    float: left;
    margin-top: 30px;
  }
  .banner p{
    font-size: 14px;
    color: white;
  }
 .nf{
    width:100%;
    height:200px;
    padding-top: 130px;
   margin: 0 0 45px 15px;
  }
.nf li{
  font-size: 13px;
  color: white;
}
  .nf .nf_jian{
    margin: 10px 0;
  }
  .banner_rule span{
    text-align: center;
   display: block;
    margin-top: -20px;
    font-size: 13px;
    color: white;
  }
  .center{
    display: block;
  }
.center .center_rank{
  float: left;
  background: url(../../assets/images/btn-2.png) no-repeat;
  margin-top: 13px;
  height:60px;
  width:calc(50%  - 15px);
  background-size: 100% 100%;
  margin-left: 13px;
}
  .center .center_rank p{
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 15px;
    }

  .center_record{
    background: url(../../assets/images/btn-3.png) no-repeat;
    margin-top: 13px;
    height:60px;
    width:46%;
    background-size: 100% 100%;
    margin-right: 13px;
    float: left;
  }
  .center .center_record p{
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 15px;
  }
  .List{
    width:100%;
    height:auto;
    overflow: hidden;
    padding-bottom: 86px;
  }
  .list_s{
    width:calc(100% - 30px);
    height: 40px;
    background: #a046fe;
    float: left;
    margin-top: 3px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-left: 15px;
  }
  .list_s p{
    color: #ffffff;
     font-size: 15px;
    text-align: center;
    line-height: 40px;
  }
  .l_one{
    height: 70px;
   width:calc(100% - 30px);
    border-bottom:1px solid #ededed;
    margin-left: 15px;
  }
  .l_one img{
    height:40px;
    width:40px;
    float: left;
    display: block;
    margin: 15px 10px 15px 0px;
  }
  .list_l{
    float: left;
    background: #ffffff;
    width:calc(100% - 30px);
    margin-left: 15px;
    overflow: hidden;
  }
  .l_ot{
    padding-top: 18px;
    float: left;
  }
  .l_ot span{
    font-size: 15px;
    color: #222222;
  }
  .l_ot p{
    font-size: 13px;
    color: #999999;
    padding-top: 6px;
  }
  .l_f{
    float:right;
    margin: 25px 0 0 0;
    font-size: 13px;
    color: #999999;
  }
  footer{
    box-shadow: 1px 5px 6px #eaaeae;
    margin-top: 13px;
    float: left;
    background: #fe5050;
    height: 66px;
    width:calc(100% - 30px);
    margin-left: 15px;
    border-radius: 6px;
    text-align: center;
    position: fixed;
    bottom: 10px;
  }
  footer span{
    color: #ffffff;
    font-size: 15px;
    line-height: 65px;
  }

</style>

