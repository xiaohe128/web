// 封装ajax请求
import axios from 'axios'

const post = (url, parms={}, headers={}) => {
	let option = Object.assign({'Content-Type': 'application/x-www-form-urlencoded'}, headers);
	let instance = axios.create({
		timeout: 1000 * 30,
		headers: option
	});
	let comObj = {
		session_from: 1,
		timestamp: Date.parse(new Date())/1000
	}
	Object.assign(parms, comObj);
	let qs = require('qs');
	if(parms.special){
		url = "http://doclever.17yund.me/mock/17"+url;
	} else {
		url = "https://api1.51yund.com"+url;
	}
	return instance.post(url,qs.stringify(parms)).then(function(res){
		let data = res.data;
		if(data.code !== 0){
			globalVue.$message.error(data.msg);
		}
		return data;
	}).catch(res=>{
		console.log(res);
	}); 

}

const get = (url,headers={}) => {
	let option = Object.assign({},headers);
	let instance = axios.create({
		timeout: 1000 * 30,
		headers: option
	});

	return instance.get(url).then(function(res){
		return res.data;
	}).catch(res=>{
		console.log('error',res);
	});
}

export const injectHttp = () => {
	if (typeof window.$http == 'undefined') {
		window.$http = {
			post: post,
			get: get
		}
	}
}