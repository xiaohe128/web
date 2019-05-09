<template>
    <div class="home">
        <h2>企业概况</h2>
        <ul class="des clearfix">
           <li>企业总人数：123人</li>
           <li>今日人均步数：7483步</li>
           <li>昨日人均步数：7483步</li>
           <li>今日运动人数：74人</li>
           <li>昨日运动人数：74人</li>
        </ul>
        <div class="search-wrapper">
            <el-row :gutter="10">
                <el-col :span="3">
                    <el-select class="common" clearable placeholder="选择类型" v-model="obj.tpe">
                        <el-option value="0" label="人均步数"></el-option>
                        <el-option value="1" label="运动人数"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-date-picker
                        v-model="obj.start_time"
                        type="date"
                        placeholder="起始日期"
                        :picker-options="policyTime0"
                        >
                    </el-date-picker>
                </el-col>
                <el-col :span="3">
                    <el-date-picker
                        v-model="obj.end_time"
                        type="date"
                        placeholder="结束日期"
                        :picker-options="policyTime1">
                    </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-button type="success" @click="search">查询数据</el-button>
                    <el-button type="primary" @click="exportExcel">导出数据</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import api from '@/server/home'
export default {
    name: 'home',
    data() {
        return {
            obj:{
                tpe:"",
                start_time:"",
                end_time:""
            },
            policyTime0: {
		        disabledDate: (time) => {
		        	return this.timeLimit(time,'end_time','s');
		        }
	        },
	        policyTime1: {
		        disabledDate: (time) =>  {
		        	return this.timeLimit(time,'start_time');
		        }
	        },
        }
    },
    mounted: function () {

    },
    created: function () {
        
    },
    methods: {
        search() {
           
        },
        exportExcel(){

        },
        timeLimit(time,name,d){
            let target = this.obj[name];
        	if(target){
        		if(d=='s'){
        			return time.getTime() > target;
        		} else {
        			return time.getTime() < target;
        		}
        	}
        },
    },
    computed:{
        
    },
    watch:{
        
    }
}
</script>
<style lang='less' scoped>
    @import url(../../style/root.less);
    .home{
        font-size: 16px;
        h2{
            text-align: center;
            font-size: 34px;
            color: #333;
            padding: 40px 0
        }
        .des{
            margin-bottom: 10px;
            li{
                width: 240px;
                float: left;
                margin-bottom: 20px;
            }
        }
    }
    
    h3{
        line-height: 30px;
        color: #696
    }

</style>
