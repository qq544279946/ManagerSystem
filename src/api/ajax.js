/**
 * 封装了能发ajax的函数
 */
import axios from 'axios';
import qs from 'qs'
import {message} from 'antd';

axios.interceptors.request.use((config)=>{
    let {method,data} = config;
    if(method.toLocaleLowerCase() === 'post' && typeof data === 'object'){
        config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        config.data = qs.stringify(config.data);
    }

    return config;
})

axios.interceptors.response.use((response)=>{
    return Promise.resolve(response.data);
},(err)=>{
    message.error('请求失败');
    return new Promise(()=>{});
})


export default axios;
 