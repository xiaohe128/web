const tool = {
    getUrlParam: function(){
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null){
            return decodeURI(r[2]);
        }
        return null;
    },
    getCookieValue: function(name){
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return "";
    },
    createCookie: function(name, value, days){
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } 
        let cookieDomain = "";
        if(name == "user_id" || name == "sid"){
            cookieDomain = "; domain=51yund.com";
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + cookieDomain + "; path=/";
    }
}

export const injectTool= () => {
    if (typeof window.tool == 'undefined') {
        window.tool = tool;
    }
}
