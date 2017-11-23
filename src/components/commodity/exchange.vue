<template>  
  <div class="exchangeContent">
      <ul class="inputInfo">
        <li class="normalInput"><p>姓名</p><input type="text" placeholder="请输入收货人姓名" v-model='userName'></li>
        <li class="normalInput"><p>电话</p><input type="text" placeholder="请输入收货人联系电话" v-model='phoneNum'></li>
        <li class="normalInput remakes"><p>备注</p><textarea type="text" v-model='message'placeholder="请输入收货人地址/兑换平台账号" ></textarea> </li>
        <li class="goodsInfo">
          <img src="../../assets/images/icon.jpg">
          <div>
              <p>爱奇艺会员一个月爱奇艺会员一个月</p>
              <p ><span>兑换数量：2</span><span>支付积分：40</span></p>
          </div>
        </li>
        <li class="delivery"> <span>配送方式</span> <span>包邮</span></li>
      </ul>
      <div class="onsure">
          <p>温馨提示：确认兑换后不可取消</p>
          <button v-on:click='isSure()'>确认兑换</button>
      </div>
  </div>

</template>

<style lang="scss" type="text/css">
 @import '../../assets/scss/homeAndPrize.scss';
</style>

<script type="text/babel">
import { Toast } from 'mint-ui'
  export default {
    name: 'hello1',
    data() {
       return{
         phoneNum:'',
         message:'',
         userName:''
       }
      },
    mounted() {

    },
    methods: {
      isSure(){
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        if(this.userName==''){
          return this.alertMessage('请输入收货人姓名');
        }else if(!myreg.test(this.phoneNum)){
          return this.alertMessage('请输入合法的号码');
        }else if(this.message ==''){
          return this.alertMessage('请输入收货人地址或兑换平台账号');
        }else{
          this.$router.push({path:'/commodity/exchangeSuccess'});
        }
         
      },
      alertMessage(message){
          Toast({
              message: message,
              position: 'center',
              duration: 1500
            });
      }
    },  
    watch: {
     
      },
  }
</script>
