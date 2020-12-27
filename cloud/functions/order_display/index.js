// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  if (event.type === 1){
    try {
      return await db.collection('Orderinfo').doc(event.orderid).get({
        success: function(res) {
          console.log(res.data)
          //that.setData({done: res.data.whether})
        }
      })      
    } catch (e) {
      console.log(e)
    }
  }
  else if (event.type === 2){
    try {
      return await db.collection('Orderinfo').where({
        publish_id: event.userid
      })
      .get({
        success: function(res) {
          console.log(res.data)
          //that.setData({done: res.data.whether})
          
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  else if (event.type === 3){
    try {
      return await db.collection('Orderinfo').where({
        recipient_id: event.userid
      })
      .get({
        success: function(res) {
          console.log(res.data)
          //that.setData({done: res.data.whether})
          
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}