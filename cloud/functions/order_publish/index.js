// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let orderID;
  let timestamp = Date.parse(new Date());

  try {
    return await db.collection("Orderinfo").add({
      data: {
        publish_id: wxContext.OPENID,//获取操作者_openid的方法
        pick_up_addr: event.pick_up_addr,
        delivery_addr: event.delivery_addr,
        receive_date: event.receive_date,
        fee: event.fee,
        remarks: event.remarks,
        message: event.message,
        _id: timestamp + wxContext.OPENID,
        whether: 0,
      }, success: res => {
        wx.showToast({
          title: '订单发起成功',
        })
      }, fail: err => {
        wx.showToast({
          //icon: 'none',
          title: '订单发起失败',
        })
      }
    })
  } catch (e) {
    console.log(e)
  }
  orderID = db.collection("Orderinfo")._id;
  return {
    orderID: orderID,
  }
}