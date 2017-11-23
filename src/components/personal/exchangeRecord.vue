<<template>
    <div class="exchangContent">


      <div class="record">
       <div>
          <div class="record_on"  v-for="item in list">
            <img src="../../assets/images/Magic.jpg" />
            <div class="record_m">
                <span>魔法币200个</span>
            </div>
              <ul class="record_con">
                <li>兑换数量:2</li>
                <li>支付数量:40</li>
                <li>兑换时间:2017.11.16 12:32:45</li>
              </ul>
          </div>


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
        loading:false

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

      },
    },
    watch: {

    }
  }
</script>
