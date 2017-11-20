<<template>
    <div class="exchangContent">



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

<style>
  html body{
    background: #fe5050;
  }
  .record{
    width: calc(100% - 30px);
    background: #ffffff;
    margin: 15px 0 78px 15px;
    border-radius: 8px;
    height:auto;


  }
  .record_on{
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #ededed;
  }
  .record_on:last-child{
    border-bottom: none;
  }
  .record_on img{
    background-size: 100% 100%;
    background: no-repeat;
    width: 80px;
    height: 80px;
    border: 1px solid #e5e5e5;
    display: block;
    float: left;
    margin: 15px;
  }
  .record_m span{
    width: 178px;
    display: inline-block;
    margin: 16px 0 10px 0;
    font-size: 14px;
    color: #222222;
    overflow: hidden;
    text-overflow: ellipsis;
  }
    .record_con li{
      font-size: 13px;
      color: #666666;
 }
  .foot{
    width: calc(100% - 30px)!important;
    background: url(../../assets/images/btn-4.png);
    height: 70px;
    background-size: 100% 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    display: block;
    margin: 0 15px;
  }
  .foot span{
    display: block;
    width: calc(100% - 30px);
    margin: 0 0 0 10px;
    line-height: 70px;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
  }

</style>
