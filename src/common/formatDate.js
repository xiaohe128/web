 // 日期格式化 created by zhongquan He on 2019-03-11
 /**
   * @param {Object} date      //需要格式化的时间戳
   * @param {Object} str       //时间准确度，如"hms"或者"hm", hms表示带时分秒,hm表示时分,day表示精确到天，默认到秒
   * @param {Object} format    //时间间隔符，如"-"或者"/", 默认'-'
   * formatDate                //返回2017-06-20形式的日期
   * tsToDateTime              //返回2017-06-20 18:44:26 形式的日期
   */
const formatDate = (date, str = 'hms', format = '-') => {
	if(typeof(date)!='object'){
		return date;
	}
	let year, month, day, hour, minute, second;
	year = date.getFullYear();
	month=deal(date.getMonth()+1);
    day=deal(date.getDate());  
    hour=deal(date.getHours());  
    minute=deal(date.getMinutes());  
    second=deal(date.getSeconds());  
    function deal(t){
		t = t < 10 ? '0' + t : t;
		return t;
    }
	let actTime = year + format + month + format + day;
	if(str === 'h'){
		actTime += ' ' + hour;
	} else if(str === 'hm'){
		actTime += format + minute;
	} else if(str === 'hms'){
		actTime += format + second;
	}
	return actTime;
}

export const injectFormat = () => {
	if (typeof window.Format == 'undefined') {
		window.formatDate = formatDate;
	}
}