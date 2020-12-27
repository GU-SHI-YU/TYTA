// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: "tyta-3ggrdov8583a21f6",}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  
  try {
    return await db.collection('Userinfo').where({
      userid: event.userid
    }).get({
      success: function(res) {
        console.log(res.data)
        //that.setData({done: res.data.whether})
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
  }
}