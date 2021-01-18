import Taro from "@tarojs/taro";
/*********************基础的网络请求工具(配置axios http请求的方法)*****************
 *更新时间:2020.05.05
 *1.支持的请求方法：
    1)get(url, par):GET请求方式
    2)post(url, par):POST请求方式
    3)del(url, par):DEL请求方式
    4)put(url, par):PUT请求方式
 *日志:
 *1.优化get请求返回的数据结构
 */
/*****************************axios的请求的全局设置*******************************/
//设置请求头
let headers={
    'content-type':'application/json',// 默认值
    //'token':window.sessionStorage.getItem("myToken")||"",
};


/**
 * Get方法
 * @param url
 * @param param
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function get(url, param,callback){
    Taro.request({
        url:url,
        method:"GET",
        data:param,
        header:headers,//请求头
        success: function (response) {
          console.log(response.data)
          let statusCode=response.status==200?200:-1;//请求状态：成功:200,失败:-1
          let requestParam=response.config.params||{};
          let data=response.data;
          let responseData={
              status:statusCode,//状态码
              param:requestParam,//参数对象
              returnData:data//请求响应数据
          };
          callback(responseData);
        }
    })
}//e

/**
 * Post方法
 * @param url
 * @param param
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function post(url,param,callback){
    param=param||{};
    Taro.request({
        url:url,
        method:"POST",
        data:param,
        header:headers,//请求头
        success: function (response) {
          console.log(response.data)
            if(response.status==200){
                let param=response.config.data?qs.parse(response.config.data):{};
                let result={
                    param:param,
                    text:response.request.responseText,
                    data:response.data,
                    status:response.status
                };
                callback(result);
            }
        }
    })
}//e