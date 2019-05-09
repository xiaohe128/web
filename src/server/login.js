/**
 * Created by zach He on 2019-04-29
 */
import url from './urls'

export default class LoginMember {
    static login(params) {
        return $http.post(url.login, params);
    }

    static getVfCode(params) {
        return $http.post(url.getVfCode, params);
    }

    static getSession(params) {
        return $http.post(url.getSession, params);
    }

    // 登出管理
    static loginOut(params) {
        return $http.post(url.loginOut, params);
    }
}
