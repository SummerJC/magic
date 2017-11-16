<template>
    <div class="integContent">
      <div class="first">
        <span>排行冠军奖励5积分</span>
        <div class="frist_r">
            <span>查看历史冠军</span>
        </div>
      </div>

      <div class="h_one">
        <div class="h_num">
          <span>32</span>
        </div>
        <img src="../../../static/image/ava72.png" />
        <div class="h_to">
          <span>金莫颉</span>
          <p>2017.11.15</p>
        </div>
        <div class="h_f">
          <span>100分</span>
        </div>
      </div>

      <div class="h_list">
          <div class="list_one">
              <div class="one_l">
                  <span>1</span>
              </div>
            <div class="one_in">
              <img src="../../../static/image/ava72.png" />
            </div>
            <div class="one_m">
              <p>王二傻</p>
            </div>
            <div class="one_ff">
              <span>25.5分</span>

            </div>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>

<script type="text/babel">
  export default {
    name: 'hello1',
    data() {
      return{}
    },

    methods: {

    },
    watch: {

    }
  }
</script>

<style>
  html body{
    background: #fe5050;
  }
  .first{
    height: 62px;
  }
  .first span{
    font-size: 15px;
    color: #ffffff;
    line-height: 62px;
    margin: 0 0 0 15px;
    float: left;
  }
  .frist_r{
    background: url(../../../static/image/ranking.png) no-repeat;
    background-size: 100% 100%;
    width: 150px;
    height: 50px;
    float: right;
    margin: 13px 8px 0 0;
  }
  .frist_r span{
    line-height: 40px;
    margin-left: 30px;
    display: block;
  }
  .h_one{
    height: 70px;
    background: #ffffff;
    width:calc(100% - 30px);
    margin: 3px 0 0 15px;
    border-radius: 6px;
  }
  .h_one img{
    height:40px;
    width:40px;
    float: left;
    display: block;
    margin: 15px 10px 15px 15px;
  }
  .h_to {
    padding-top: 18px;
    float: left;
  }

  .h_to span{
    font-size: 15px;
    color: #222222;
  }
  .h_one  p{
    font-size: 13px;
    color: #999999;
    padding-top: 6px;
  }
  .h_f span{
    float:right;
    margin: 25px 20px 0 0;
    font-size: 13px;
    color: #999999;
  }
  .h_num span{
    float: left;
    line-height: 70px;
    margin:  0 0 0 20px;
    font-size: 13px;
  }

  .h_list{
    width:calc(100% - 30px);
    margin:  10px 0 0 15px;
    border-radius: 6px;
    background: #ffffff;
  }

  .list_one{
    width: 100%;
    border-bottom: 1px solid #318aff;
    height: 70px;
  }

  .one_l{
    float: left;
    background: #ffb400;
    font-size: 13px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #ffffff;
    text-align: center;
    line-height: 20px;
    margin: 25px 15px 25px 15px;
  }

  .one_in img{
    width: 40px;
    height: 40px;
    float: left;
    margin: 15px 15px 15px 0;
  }
  .one_m p{
    float: left;
    line-height: 70px;
    font-size: 15px;
    color: #222222;
  }
  .one_ff span{
    float: right;
    font-size: 13px;
    color: #666666;
    line-height: 70px;
    margin: 0 20px 0 0;
  }
</style>
