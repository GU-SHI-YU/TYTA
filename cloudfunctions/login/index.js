// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: "tyta-3ggrdov8583a21f6",
})
const db = cloud.database()
/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()

  try {
    await db.collection('Userinfo').doc(wxContext.OPENID).get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
      },
      fail: function(err){
        cloud.callFunction({
          // 云函数名称
          name: 'register',
          // 传给云函数的参数
          data: {
            id : wxContext.OPENID,
            user_name: event.user_name
          },
          success: function(res) {
            //console.log(res.result.sum) // 3
          },
          fail: console.error()
        })
      }
    })
    
  } catch (e) {
    console.log(e)
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  }
}

