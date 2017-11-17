<template>  
  <div class="prizeInfoContent">
      <header>
        <img src="../../assets/images/goods.jpg">
        <div class="goodsInfo">
            <p>爱奇艺会员1个月</p>
            <p><span>20积分</span> <span>市场价:￥25</span><span>剩余库存:{{inventory}}</span></p>
        </div>
      </header>
      <article>
          测试内容
          <img src="../../assets/images/aqy1.jpg">
          <img src="../../assets/images/aqy2.jpg">
      </article>
      <div class="bottomArea">
         <p><span>支付:{{integral}}积分</span> <span>可用积分:{{totalIntegral}}</span> </p>
          <ul class="btn-numbox">
              <li>
                  <ul class="count">
                      <li> <span :class="['num-add', inputNum > 1 ?'icon-add':'icon-add-forbid']" @click='minusNum'></span> </li>
                      <li><input type="text" class="input-num" v-model="inputNum" @input='changeNum()'/></li>
                      <li   @click="addNum()"><span  :class="['num-minus',canAdd?'icon-minus':'icon-minus-forbid']" ></span></li>
                    
                  </ul>
              </li>
  　　　  </ul>
        <button @click='toExchange'>立即兑换</button>
      </div>
         
  </div>

</template>

<style scoped>
 @import '../../assets/style/homeAndPrize.css';
</style>

<script type="text/babel">
  export default {
    name: 'hello1',
    data() {
       return{
          inputNum:1,
          inventory:20,
          totalIntegral:100,
          integral:20,
          canAdd:true,
          goodsId:this.$route.query.goodsId
       }
      },
    mounted() {

    },
    methods: {
      changeNum(){
        var inputNum = parseInt(this.inputNum)||0;
          if(inputNum*this.integral > this.totalIntegral ||inputNum>this.inventory){
              this.inputNum = 1;
              this.canAdd = true;
          }else if(inputNum==0){
             this.inputNum='';
          }else{
             this.canAdd = true;
          }
      },
      minusNum(){
        var inputNum = parseInt(this.inputNum);
        if(inputNum>1){
          this.inputNum =this.inputNum- 1;
           this.canAdd = true;
        }
      },
      addNum(){
        if(this.inputNum*this.integral < this.totalIntegral && this.inputNum<this.inventory){
           this.inputNum = parseInt(this.inputNum)+1;
        }
        var addInputNum = this.inputNum+1;
        if(addInputNum*this.integral > this.totalIntegral || addInputNum > this.inventory){
            this.canAdd = false;
        }
        
      },
      toExchange(){
        this.$router.push({path:'/commodity/exchange'});
      }
    },
    watch: {
     
      },
  }
</script>
