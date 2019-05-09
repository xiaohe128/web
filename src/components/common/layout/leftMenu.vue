<template>
	<!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>-->
	<el-menu unique-opened router @select="handleselect">
		<div :key="index1" v-for="(item,index1) in menu">
			<el-submenu class="first-level" :index="'first'+index1" v-if="item.children && item.children.length > 0">
				<template slot="title"><i class="iconfont" :class="item.icon"></i>{{item.name}}</template>
				<div v-for="(child,index2) in item.children" :key="'second'+index2">
					<el-submenu class="second-level" :index="index2+''" v-if="child.children && child.children.length > 0">
						<template slot="title"><i class="icon iconfont icon-home"></i>{{child.name}}</template>
						<el-menu-item v-for="(grandchild, index3) in child.children" :index="grandchild.path" :key="index3">{{grandchild.name}}</el-menu-item>
					</el-submenu>
					<el-menu-item v-else :index="child.path">{{child.name}}</el-menu-item>
				</div>
			</el-submenu>
			<el-menu-item class="first-level-index" v-else :index="item.path">
				<i class="iconfont" :class="item.icon"></i>{{item.name}}
			</el-menu-item>
		</div>
	</el-menu>	
</template>

<script>
	// import memberLogic from '@/server/memberLogic.js'
	// import menuMethod from '@/common/matchMenu.js'
	export default {
		data() {
			return {
				menu: [{
						name: "首页",
						path: "/home"
					},{
						name: "企业运动",
						path: "/sport",
						children: [{
							name: "每日步数",
							path: "/sport/day"
						}, {
							name: "活动数据",
							path: "/sport/data"
						}]
					}
				]
			}
		},
		mounted() {
			
		},
		methods: {
			handleselect(index) {
				// var timer = setTimeout(function(){
				// 	var elArr = document.getElementsByClassName("is-opened");
				// 	var subTitleArr = document.getElementsByClassName("el-submenu__title");
				// 	for(var i=0;i<subTitleArr.length;i++){
				// 		subTitleArr[i].classList.remove("menu-title-active");
				// 	}
				// 	var oEl = {};
				// 	for(var i=0;i<elArr.length;i++){
				// 		if(elArr[i].className.search(/is-active/) != -1){
				// 			var oEl = elArr[i];
				// 			elArr[i].children[0].classList.add("menu-title-active");
				// 			break;
				// 		}
				// 	}
				// 	clearTimeout(timer);
				// },100);
			},
		}
	}
</script>

<style lang="less" scoped>

</style>