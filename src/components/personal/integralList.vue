<template>
    <div class="integContent">
      <div class="first">
        <span>排行冠军奖励5积分</span>
        <router-link :to="{path:'/personal/historyList'}">
          <div class="frist_r">
            <span>查看历史冠军</span>
          </div>
        </router-link>
      </div>

      <div class="h_one">
        <div class="h_num">
          <span>32</span>
        </div>
        <img src="../../assets/images/ava72.png" />
        <div class="h_to">
          <span>金莫颉</span>
          <p>2017.11.15</p>
        </div>
        <div class="h_f">
          <span>100分</span>
        </div>
      </div>

      <div class="h_list">
          <div class="list_one"  v-for="item in 10">
              <div class="one_l">
                  <span>{{item}}</span>
              </div>
            <div class="one_in">
              <img src="../../assets/images/ava72.png" />
            </div>
            <div class="one_m">
              <p>吴二傻</p>
            </div>
            <div class="one_ff">
              <span>25.5分</span>
            </div>
          </div>

      </div>
      <div class="loadingMore">
        <p v-if="loadGif" class="page-infinite-loading">
          加载中...
          <mt-spinner type="fading-circle">
          </mt-spinner>
        </p>
        <p v-else>
          已加载完毕
        </p>
      </div>


    </div>
</template>

<style scoped>
.h_list .list_one:nth-child(1) .one_l{
    background: #ffb400;
    color: white;
  }

.h_list .list_one:nth-child(2) .one_l{
  background: #92beeb;
  color: white;
}

.h_list .list_one:nth-child(3) .one_l{
  background: #d79976;
  color: white;
}
</style>

<script type="text/babel">

  import Vue from 'vue'
  import { InfiniteScroll } from 'mint-ui';
  export default {
    name: 'hello1',
    data() {
      return{
        list:[],
//        col:["#ffb400","#92beeb","#d79976"],
        deCheck:"10",
        showLoading:true,
        loadGif:true,
        loading:false
      }
    },


    methods: {
      loadMore() {
        this.loading = true;
        this.loadGif = true;
        setTimeout(() => {
          this.loadGif = false;
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 1000);
      },



    },
    watch: {

    }
  }
</script>
