<template>
 <div class="historyContent">
    <div class="h_content">
      <div class="h_one">
        <img src="../../../static/image/ava72.png" />
        <div class="h_to">
          <span>金莫颉</span>
          <p>2017.11.15</p>
        </div>
        <div class="h_f">
          <span>100分</span>
        </div>
      </div>

      <div class="h_one">
        <img src="../../../static/image/ava72.png" />
        <div class="h_to">
          <span>金莫颉</span>
          <p>2017.11.15</p>
        </div>
        <div class="h_f">
          <span>100分</span>
        </div>
      </div>
    </div>



 </div>


</template>

<!--<style scoped>-->
    <!---->
<!--</style>-->

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
  .h_content{
    background: #ffffff;
    width:calc(100% - 30px);
    border-radius: 8px;
    margin: 15px 0 0 15px;
  }
  .h_one{
    height: 70px;
    border-bottom: 1px solid #ededed;

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
</style>
