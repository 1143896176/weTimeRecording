/*
*promise对象（异步返回response.data)
* */

import axios from 'axios'

export default function ajax(url, data={}, type = 'GET') {

   return new Promise(function (resolve, reject) {
       //执行异步请求
       let premise
       if (type === 'GET') {
           let dataStr = '';
           Object.keys(data).forEach(key => {
               dataStr += `${key}=${data[key]}&`
           })
           if (dataStr !== '') {
               dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
               url = url + '?' + dataStr
           }
           premise = axios.get(url)
       } else {
           console.log(data)
           premise = axios.post(url, data)

       }
       //成功调用resolve
       premise.then(response=>{
          resolve (response.data)
       }).catch(err=>{
           reject(err)
       })
   })
}
