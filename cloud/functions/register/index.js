// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var orderid;

  try {
    return await db.collection("Orderinfo").add({
      data: {
        userid: event.id,//获取操作者_openid的方法
        user_name: event.username,
        credit_score: 60,
      }, success: res => {
        wx.showToast({
          title: '用户注册成功',
        })
      }, fail: err => {
        wx.showToast({
          //icon: 'none',
          title: '用户注册失败',
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