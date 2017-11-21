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

      <div class="h_list"  v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
         infinite-scroll-distance="deCheck">
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
    </div>
</template>

<style scoped>

</style>

<script type="text/babel">

  import Vue from 'vue'
  import { InfiniteScroll } from 'mint-ui';
  export default {
    name: 'hello1',
    data() {
      return{
        list:[],
        col:["#ffb400","#92beeb","#d79976"],
        deCheck:"10"
      }
    },

    methods: {
      loadMore() {
        var that = this;
        that.loading = true;
        setTimeout(() => {
          let last = this.list[that.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            that.list.push(last + i);

          }
          that.loading = false;
        }, 2500);
      }
    },
    watch: {

    }
  }
</script>

<style>

</style>
