// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: "tyta-3ggrdov8583a21f6",}
)

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var orderid;

  try {
    return await db.collection("Orderinfo").add({
      data: {
        publish_id: wxContext.OPENID,//获取操作者_openid的方法
        pick_up_addr: event.pick_up_addr,
        delivery_addr: event.delivery_addr,
        recieve_date: event.recieve_date,
        fee: event.fee,
        remarks: event.remarks,
        message: event.message,
        _id: event.recieve_date + event.publish_id,
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
  orderid = db.collection("Orderinfo")._id;
  return {
    orderid,
  }
}