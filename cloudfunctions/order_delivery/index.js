// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: "tyta-3ggrdov8583a21f6",}
)

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var reason;

  try {
    await db.collection("Orderinfo").doc(event.orderid).remove({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
      }
    })
  } catch (e) {
    console.log(e)
  }
  reason = event.reason
  return {
    reason
  }
}