import Vue from 'vue';
import axios from 'axios'
import {Base64} from 'js-base64'
import { MessageBox} from 'element-ui'
let instance = axios.create({
	responseType: "json",
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 加密token
function baseFun(){
  const token = localStorage.getItem("openid")
  const base64 = Base64.encode(token+':')
  return 'Basic ' + base64
}

// http request 拦截器:是在ajax请求发出之前的操作
instance.interceptors.request.use(
  config => {
    let token = localStorage.getItem("openid")
    console.log(token)
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = baseFun();
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
  
//响应拦截：请求发出之后的操作
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                console.log('没有访问权限')
                MessageBox.alert('没有权限访问,请重新登录', '提示',{
				          confirmButtonText: '好的',
				          showCancelButton:false,
		              type: 'warning',
		              showClose:false,
		              closeOnClickModal:false
				        })
                .then(() => {
				          console.log('去登陆')
				          window.location.href = '/'
				        }).catch(() => {
				         console.log('取消')        
				        })
                break;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default instance
