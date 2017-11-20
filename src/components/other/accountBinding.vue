<template>
	<div class="content_Binding">
    
        <!-- <div class="cell-left">手机号：</div> -->
        <div class="content_BindingPhone"><input type="number" pattern="[0-9]*" placeholder="请输入您的魔法现在注册手机号码" autocomplete="off" v-model="phoneNum"/></div>
   
     <div class="getcontent_BindingPhone">
        <!-- <div class="cell-left">验证码：</div> -->
        
         <input type="number" placeholder="请输入短信验证码" autocomplete="off" v-model="code"/>
        	<div v-on:click="getVcode" class="getcontent_BindingPhone2">
            <button v-show="show" type="button">
            <span >获取验证码</span>  
          </button>
        	<button v-show="!show" type="button">
         		<span  class="count">{{count}} s  后重新获取</span>
        	</button>
        </div>
        
    </div>
    <div class="New_user">新用户将自动注册,并视为同意<a href=""><<用户注册协议>></a></div>
    <button type="button" class="new_sure" v-on:click="bindNumber">确定</button>
    <div id="bind_success">绑定成功</div>
    </div>

</template>
<style type="text/css">
  @import '../../assets/style/other.css';
  
</style>
<script>

 
// import http from '../utils/axios'
// import api from '../utils/api'
import { Toast } from 'mint-ui'
export default {
	name:'',
	mounted(){

	},
  created() {
      document.title = '绑定手机号'
      
      console.log(this.phoneNum)
    },
	data(){
		return {
	        show: true,
	        count: '',
	        timer: null,
          prePhoneNum:0,
          // prePhoneNum:this.$route.query.phoneNum,
	        phoneNum:'0',
          code:''
	      }
	},
	methods:{
		getVcode: async function(){
      if(!(/^1[34578]\d{9}$/.test(this.phoneNum))){
         return this.alertMessage('手机号码有误，请重新填写');

      }else if(this.prePhoneNum ==this.phoneNum.trim()){
        return this.alertMessage('该手机号已绑定');
      }
          let parms ={
          	phoneNumber:this.phoneNum
          };
         const res = await http.get(api.senVtfCode,parms)
         if(res.status==200){
            const TIME_COUNT = 60;
            if (!this.timer) {
                  this.count = TIME_COUNT;
                  this.show = false;
                  this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                      this.count--;
                    } else {
                      this.show = true;
                      clearInterval(this.timer);
                      this.timer = null;
                    }
                  }, 1000)
                }
         }
		},
    bindNumber:async function(){
         let parms ={
            captcha:this.code,
            phoneNumber:this.phoneNum
          };
         const res = await http.post(api.bindMobile,parms)
         if(res.status==200){
            var bind_success=document.getElementById('bind_success');
                bind_success.display=='block';
                setTimeout("function (){ this.$router.push({path: '/'});}", 2000);
           
         }else{

            this.alertMessage(res.data.message);
         }
    },
     alertMessage(message){
          Toast({
              message: message,
              position: 'center',
              duration: 2000
            });
     }
	}

}
</script>
