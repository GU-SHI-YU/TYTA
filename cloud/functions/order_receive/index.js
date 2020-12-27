// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let info;

  try {
    info = await db.collection('Orderinfo').doc(event.orderid).get({
      success: function (res) {
        console.log(res.data)
      }
    })
  } catch (e) {
    console.log(e)
  }
  if (info.whether) {
    wx.showToast({
      title: '订单已被他人接受',
    })
  } else {
    await db.collection("Orderinfo").doc(event.orderid).update({
      data: {
        recipient_id: wxContext.OPENID,//获取操作者_openid的方法
        whether: 1,
      }, success: res => {
        wx.showToast({
          title: '订单接受成功',
        })
      }, fail: err => {
        wx.showToast({
          title: '订单接受失败',
        })
      }
    })
  }
  return 0
}