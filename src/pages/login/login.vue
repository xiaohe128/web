<template>
	<div class="login">
		<p class="title">企业悦动管理后台</p>
		<p class="login-mess">登录/注册</p>
		<div class="user-mess">
			<input type="number"  v-model="phoneNo" class="phone valid" data-valid='type:phone,msg:请输入正确的手机号' placeholder="输入手机号">
			<div class="user-pwd">
				<input type="number" v-model="numCode" class="valid" data-valid='type:vfCode,msg:请输入正确的验证码' placeholder="输入验证码" >
				<span @click="getCode()"  v-bind:class="['reach-code',{'done': isActive}]">{{msgStr}}</span>
			</div>
		</div>
		<div class="login-btn" @click="login()">进入</div>
    </div>
</template>
<script>
import api from '@/server/login'
import reg from "@/common/reg"
export default {
    name: 'login',
    data(){
        return{
            phoneNo:"",
            numCode:"",
            userId:"",
            timeLeft:60, //时间间隔
            isActive:false,
            msgStr:"获取验证码"
        }
    },
    mounted: function () {

    },
    created: function () {

    },
    methods:{
        login() {
			let validResult = $ValidHelper.check({container:'user-mess'});
            if(!validResult.pass){
                return this.$message({type:'error', message:validResult.msg, duration: 1500});
            }
			let param = {
				"phone": this.phoneNo,
				"verify_code": this.numCode
			}
            api.login(param).then((res)=>{
                if( res.code == 0){
                    tool.createCookie("userId",  res.user_id, 1)
					tool.createCookie("xyy", res.xyy, 1)
					this.getSession();
                }
            })			
		},
		getSession(){
			api.getSession(param).then((res)=>{
				if(res.code == 0){
					let expireTime = res.session_ttl/ (24*3600);
					tool.createCookie("session_key", res.session_key, expireTime);
					this.$router.push('/home');
				}
			})
		},
        getCode(){
			if(this.isActive) return;
			let phone = this.phoneNo;
			if (!phone) {
				return this.$message.error("请输入手机号")
			} else if(!reg.phone.test(phone)){
				return this.$message.error("请输入正确的手机号")
			}
            api.getVfCode({"phone": phone}).then((res)=>{
				if(res.code === 0){
					this.isActive = true;
					this.timedCount();
				}
            })
		},
		timedCount(){
			this.timeLeft-- ;
			this.msgStr = "重新获取"+ this.timeLeft +"s";
			let timer = "";
			if(this.timeLeft === 0){
				this.msgStr = "重新获取";
				this.isActive = false;
				this.timeLeft = 60;
				timer = null;
			}else{
				timer = setTimeout(() => {
					this.timedCount();
				},1000)
			}
		}
    }
}
</script>
<style lang='less' scoped>
	@import url(../../style/root.less);
    .com(@bgColor: #fff){
		width: 310px;
		margin: 0 auto;
		border-radius: 6px;
		background-color: @bgColor;
	}
    .login{
        background-color:#11D59C;
		text-align: center;
		padding-top: 280px;
		height: 100%;
		color: #fff;
		.title{
			font-size: 30px;
		}
		.login-mess{
			margin:86px 0 34px;
			font-size: 25px;
		}
		.user-mess{
			.com();
			border: 1px solid #C9C9C9;
			text-align: left;
			overflow: hidden;
			input{
				padding:16px 10px;
				width: 100%;
			}
			.user-pwd{
				position: relative;
				border-top: 1px solid #C9C9C9;
				input{
					width: 60%;
				}
				.reach-code{
					position: absolute;
					right: 16px;
					top: 0;
					cursor: pointer;
					padding: 16px 0;
					color: #1B7ECA;
					&.done{
						color: #ccc;
					}
				}
			}
		}
		.login-btn{
			.com(#1B7ECA);
			line-height: 40px;
			margin-top: 40px;
			cursor: pointer;
			.btnBg(#0b67ad);
		}
    }
</style>
