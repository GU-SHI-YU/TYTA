// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var that = this;
  var done;

  try {
    await db.collection('Orderinfo').doc(event.orderid).get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({done: res.data.whether})
        //return "abcd"
        //done = res.data.whether
      }
    })
    if (done){
      wx.showToast({
        //icon: 'none',
        title: '订单已被他人接受',
      })
    }
    else {
      return await db.collection("Orderinfo").doc(event.orderid).update({
        data: {
          recipient_id: wxContext.OPENID,//获取操作者_openid的方法
          whether: 1,
        }, success: res => {
          wx.showToast({
            title: '订单接受成功',
          })
        }, fail: err => {
          wx.showToast({
            //icon: 'none',
            title: '订单接受失败',
          })
        }
      })
    }  
    
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