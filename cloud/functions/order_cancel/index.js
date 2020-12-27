// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {env: cloud.DYNAMIC_CURRENT_ENV}
)
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let that = this;
  let done;

  try {
    await db.collection('Orderinfo').doc(event.orderid).remove({
      success: function(res) {
        console.log(res.data)
      }
    })
  } catch (e) {
    console.log(e)
  }
  return 0
}