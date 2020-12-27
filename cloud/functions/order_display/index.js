// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const _ = db.command
  let res

  if (event.type === 1){
    try {
       res = await db.collection('Orderinfo').doc(event.orderid).get({
        success: function(res) {
          console.log(res.data)
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  else if (event.type === 2){
    try {
      res = await db.collection('Orderinfo').where({
        publish_id: _.eq(wxContext.OPENID)
      })
      .get({
        success: function(res) {
          console.log(res.data)
        }
      })
      res = res.data
    } catch (e) {
      console.log(e)
    }
  }
  else if (event.type === 3) {
    try {
      res =  await db.collection('Orderinfo').where({
        recipient_id: _.eq(wxContext.OPENID)
      })
      .get({
        success: function(res) {
          console.log(res.data)
        }
      })
      res = res.data
    } catch (e) {
      console.log(e)
    }
  }
  else if (event.type === 4) {
    try {
      res =  await db.collection('Orderinfo').where({
        publish_id: _.neq(wxContext.OPENID)
      })
          .get({
            success: function(res) {
              console.log(res.data)
            }
          })
      res = res.data
    } catch (e) {
      console.log(e)
    }
  }
  return res
}