<template>  
  <div class="exchangeSuccessContent">
      <ul>
        <li>
            <img src="../../assets/images/exchangeSuccess.png">
            <p>兑换成功</p>
            <p class="residue">剩余可用积分:20</p>
        </li>
        <li class="twoButton">
            <button>查看兑换记录</button>
            <button>返回活动主页</button>
        </li>
        <li ><button class="share" @click='shareToFriend'>分享给好友</button></li>
      </ul>
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
         <div style="width:100%;height:100%;position:absolute" class="shareToFriend" @click='closePopup'>
            <div><img src="../../assets/images/arrows.png"></div>
            <div><img src="../../assets/images/share.png"></div>
          </div>
           
      </mt-popup>
     
  </div>

</template>

<style scoped >
 @import '../../assets/style/homeAndPrize.css';
</style>

<script type="text/babel">

  export default {
    name: 'hello1',
    data() {
       return{
         popupVisible:false
       }
      },
    mounted() {
    },
    methods: {
      shareToFriend(){
          this.popupVisible = true;

      },
      closePopup(){
         this.popupVisible = false;
      }
    
    },
    watch: {
     
      },
  }
</script>
