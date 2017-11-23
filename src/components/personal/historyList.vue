<template>
 <div class="historyContent">

    <div class="h_content">
      <div class="h_one"  v-for="item in list">

            <img src="../../assets/images/ava72.png" />
            <div class="h_to">
              <span>金莫颉</span>
              <p>2017.11.15</p>
            </div>
            <div class="h_f">
              <span>100分</span>
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

<!--<style scoped>-->
    <!---->
<!--</style>-->

<script type="text/babel">
  import Vue from 'vue'
  export default {
    name: 'hello1',
    data() {
      return{
        list:["1","2","3","4","5","6"],
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
      }


    },
    watch: {

      }
  }
</script>
