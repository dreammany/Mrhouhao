// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { request } from './network/request';

Vue.config.productionTip = false

new Vue({
  el: '#app'
  
})










//全局配置url只是公共的
//axios.default.baseURL='http://123.207.32.32:8000'
//axios.default.timeout=5000

// axios(config)  axios.post() axios.get()  url:'httpbin.org'
// axios({
// baseURL:'http://123.207.32.32:8000',
// timeout:5000
// url:'/home/multidata',//如果省略掉前面的默认就是全局配置的
// methods:'get',
// //专门针对get请求的参数拼接 或者直接拼接在url后面
// params:{
//   type:'pop',page:1
// }
// }).then(function(res){
// console.log(res)

// })
//需求 两个请求同时请求数据 且一起处理返回 并发请求
// axios.all([
// axios({url:'http://123.207.32.32:8000/home/multidata'}),
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{type:'sell',page:1}
// })

// ])
// .then(function(res){
// //两个请求结果统一处理 res包含两个结果两个 
// console.log(res)
// })
// .then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res1);
// }))
//把并发请求的结果拆分为数据组
// .then(axios.spread(function(res1,res2){
//   console.log(res1);
//  console.log(res1);
// }))









//问题来了: 如果我其他页面比如首页/分类/会员/等不需要这个全局的http://123.207.32.32:8000这个默认的根路径 或者请求超时时间长一点

//这时候就创建对应的axios实例
// const inst=axios.create({
// baseURL:'http://123.207.32.32:8000',
// timeout:5000
// })

// inst({
// url:'/home/multidata',
// params:{
//   type:'pop',page:1
// }
// }).then(function(res){
// console.log(res)

// })


// const inst1=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:8000
//   })
  
//   inst1({
//   url:'/home/data',
//   params:{
//     type:'pop',page:1
//   }
//   }).then(function(res){
//   console.log(res)
  
//   })








import Request from './network/request'
//第一种
// request(
// {url:'/home/data'},
// function(res){ console.log(res)},
// function(err){ console.log(err)}
// )


//第二种

// request({
// baseconfig:{

// },success:function(res){

// },faital:function(err){

// }

// })
  
//第三种promise

request({
url:'/home/data'

}).then(function(res){
  console.log(res)
}).catch(function(err){
console.log(err)
})


  //如果以后axios作者死了 不维护了 得换新的网络请求方式 你项目用到axios的地方很多 不可能一个一个去改正  所有我们得封装下
  //入口调用一下就行







//axios拦截器的作用 每次请求成功或者得到响应时进一步处理再返回 比如加上什么效果 

//拦截了有啥用 可以给数据加上header{}等然后发给服务器
//比如每次发送网络请求时都希望有一个等待小圆圈图标 //比如每次网络请求例如有没有登录时(took令牌),必须携带特殊信息

    //请求服务器时候拦截   //请求成功 失败都可以拦截  
    inst.interceptors.request.use(function(succ){
    console.log(succ)
    //拦截操作了要给别人把数据返回去  操作部分
    return succ
    },function(err){
    console.log(err)
    })
    //响应拦截  
    //响应成功 响应失败拦截
    inst.interceptors.reqponse.use(function(result){
    console.log(result)
    //拦截操作了要给别人把数据返回去  操作部分
    return result.data
    },function(err){
    console.log(err)
    })


















