<template>
    <div class="MyCentent">
        <div class="banner">
          <div>
           <div class="residue">
            <span class="ative">60</span>
            <p>剩余积分</p>
           </div>
           <div class="all">
            <span class="ative">100</span>
            <p>获得总积分</p>
           </div>
          </div>
          <ul class="nf">
              <li>直接推荐好友数 ：324</li>
              <li class="nf_jian">间接推荐好友数 ： 2431</li>
              <li>我的推荐人 ： 吴胜</li>
          </ul>
          <div class="banner_rule">
            <span>活动规则</span>
          </div>
        </div>

      <div class="center">
          <div class="center_rank">

                <p>积分排行榜</p>
          </div>

        <div class="center_record">
              <p>兑换记录</p>
        </div>
      </div>

        <div class="List">
            <div class="list_s">
                <p>我的推荐好友</p>
            </div>

            <div class="list_l">
                <div class="l_one">
                  <img src="../../../static/image/ava72.png" />
                  <div class="l_ot">
                    <span>金莫颉</span>
                    <p>2017.11.15</p>
                  </div>
                  <div class="l_f">
                    直接好友
                  </div>
                </div>
            </div>

          <div class="list_l">
            <div class="l_one">
              <img src="../../../static/image/ava72.png" />
              <div class="l_ot">
                <span>金莫颉</span>
                <p>2017.11.15</p>
              </div>
              <div class="l_f">
                直接好友
              </div>
            </div>
          </div>

          <div class="list_l">
            <div class="l_one">
              <img src="../../../static/image/ava72.png" />
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

     <footer>
        <span>邀请好友得积分</span>
     </footer>
    </div>
</template>

<style scoped>

</style>

<script type="text/babel">
import HistoryList from '../../components/personal/historyList'
  export default {
    name: 'hello2',
    components:{HistoryList},
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
<style>
  body{
    background: #ffdcdc;
  }

    .banner {
      background: url(../../../static/image/pre.png) no-repeat;
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
  background: url(../../../static/image/btn-2.png) no-repeat;
  margin-top: 13px;
  height:60px;
  width:46%;
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
    background: url(../../../static/image/btn-3.png) no-repeat;
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

