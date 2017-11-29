<<template>
    <div class="exchangContent">

    <div class="records">
      <div class="record">

          <div class="record_on"  v-for="item in list">
            <img src="../../assets/images/Magic.jpg" />
            <div class="record_m">
                <span>奖品名称:{{prize}}</span>
            </div>
              <ul class="record_con">
                <li>兑换数量:2</li>
                <li>支付数量:40</li>
                <li>兑换时间:2017.11.16 12:32:45</li>
              </ul>
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
          <div class="foot_v">
            <div class="foot">
              <span>下载魔法现金APP ，现金借款不用愁</span>
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
        list:["1","2","3","4","5"],
        prize:"",
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
