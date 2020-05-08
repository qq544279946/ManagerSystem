/**
 * 包含应用中所有请求接口的函数：接口请求函数
 */

 import ajax from './ajax';


 export function reqLogin(username,password){
    return ajax({
        method:'post',
        url:'/login',
        data:{username,password}
    });
}

