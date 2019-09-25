import axios from 'axios'


//第一种 传三个参数
// export function request(config,success,fatial){

//     const inst=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:8000
//         })
        
//         inst(config).then(function(res){
//         //console.log(res)
//         success(res)
//            }).catch(function(err){
//           console.log(err)
//           fatial(err)
//           })


// }


//第二种 只传一个参数
// export function request(config){

//   const inst=axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:8000
//       })
      
//       inst(config.baseconfig).then(function(res){
//       //console.log(res)
//       config.success(res)
      
//       }).catch(function(err){
//         console.log(err)
//         config.fatial(err)
//         })
// }


export function request(config){
  return new Promise(function(resolve,reject){
   const inst=axios.create({
         baseURL:'http://123.207.32.32:8000',
         timeout:8000
         })
      //拦截了有啥用 可以给数据加上header{}等然后发给服务器
      //比如每次发送网络请求时都希望有一个等待小圆圈图标 //比如每次网络请求例如有没有登录时(took令牌),必须携带特殊信息

        //请求服务器时候拦截
        inst.interceptors.request.use(function(succ){
         console.log(succ)
         //拦截操作了要给别人把数据返回去  操作部分
         return succ
        },function(err){
          console.log(err)
        })
   //响应拦截
   inst.interceptors.reqponse.use(function(result){
    console.log(result)
     //拦截操作了要给别人把数据返回去  操作部分
     return result.data
   },function(err){
    console.log(err)
  })


         inst(config).then(function(res){
         resolve(res)
        }).catch(function(err){
           reject(err)
           })

  })
}