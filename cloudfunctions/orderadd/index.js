// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init();
const db = cloud.database();//注意，不是wx.cloud.database()，这种是小程序端操作数据库的写法。云端没有“wx.”
 
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()//目的：获取_openid
 
  try {
    return await db.collection("order").add({
      data: {
        normalUser: wxContext.OPENID,//获取操作者_openid的方法
        recycleUser: '',
        acceptTime:'',
        followID:event.followID,
        cancelTime:'',
        orderType: event.orderType,
        wasteType: event.wasteType,
        recycleTime: event.recycleTime,
        recycleLocate1: event.recycleLocate1,
        recycleLocate2: event.recycleLocate2,
        service: event.service,
        serviceDetail: event.serviceDetail,
        weight: event.weight,
        acceptPrice1: event.acceptPrice1,
        acceptPrice2: event.acceptPrice2,
        createTime: event.createTime,
        orderState: "待接单",
        doneTime: event.doneTime,
        peopleNum: 1,
        sellerName: event.sellerName,
        tele: event.tele,
        img: event.img,
        distance: event.distance,
        lat: event.lat,
        lng: event.lng
      }, success: res => {
        //wx.showToast({
         // title: '订单发起成功',
        //})
      }, fail: err => {
        //wx.showToast({
          //icon: 'none',
          //title: '订单发起失败',
        //})
      }
    })
  } catch (e) {
    console.log(e)
  }
}
