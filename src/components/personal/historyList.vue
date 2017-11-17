<template>
 <div class="historyContent">
    <div class="h_content" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="20">
      <div class="h_one"  v-for="item in 10">
        <ul>
          <li>
            <img src="../../assets/images/ava72.png" />
            <div class="h_to">
              <span>金莫颉</span>
              <p>2017.11.15</p>
            </div>
            <div class="h_f">
              <span>100分</span>
            </div>
          </li>
        </ul>
      </div>

    </div>



 </div>


</template>

<!--<style scoped>-->
    <!---->
<!--</style>-->

<script type="text/babel">
  import Vue from 'vue'
  import { InfiniteScroll } from 'mint-ui';

  Vue.use(InfiniteScroll);

  export default {
    name: 'hello1',
    data() {
      return{
          list:[]
        }
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
        }, 1000);
      }
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
  .h_one:last-child{
    border-bottom: none;
  }
   .h_f span{
    float:right;
    margin: 25px 20px 0 0;
    font-size: 13px;
    color: #999999;

  }
</style>
