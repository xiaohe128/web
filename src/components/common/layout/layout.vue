<template>
	<div class="layout">
		<header>
			深圳市悦动天下科技有限公司/ {{user.name}} (id:3265822) <span class="exit-button">退出</span>
		</header>
		<div class="content">
			<div class="menu-wrapper">
				<left-menu></left-menu>
			</div>
			<div class="main-wrapper">
				<router-view></router-view>	
			</div>
		</div>
	</div>	 
</template>

<script type="text/javascript">
	import leftMenu from './leftMenu'
	import api from '@/server/login'
	import { mapState } from 'vuex'
	export default {  
		data(){
			return { 
				
			}
		},
		created(){ 
			
		},
		components:{
			leftMenu,
		},
		methods:{ 
			handleLoginOut() { 	
				api.loginOut().then(result=> { 
					this.$router.push({path:"/login"});
				});
			},
			setHistoryUrl(){
				let nowUrl=location.href;
				let sliceNum=location.host.length;               
				nowUrl=nowUrl.slice(sliceNum+7);
				sessionStorage.setItem("beforeUrl",nowUrl);
			}
		},
		computed:{
			...mapState(['user'])
		},
	}

</script>

<style lang="less" scoped>
	@import url(../../../style/root.less);
	.layout{
		height: 100%;
	}
	header{
		.abso();
		line-height: 66px;
		font-size: 20px;
		background-color: #12e79b;
		color: #fff;
		text-align: right;
		padding-right: 20px;
		.exit-button{
			cursor: pointer;
		}
	}
	.content {
		padding-top:66px;
		background-color:#fff;
		display: flex;
		height: 100%;
		.menu-wrapper{
			width: 200px;
            height: 100%;
			text-align: center;
			overflow: auto;
			background-color: #e4e4e4
		}
		.main-wrapper{
			flex: 1;
			height: 100%;
			overflow: auto;
			padding: 20px;   
		}	
	}
</style>