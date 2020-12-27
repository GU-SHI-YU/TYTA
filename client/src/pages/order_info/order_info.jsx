import React, { Component } from "react"
import Taro from "@tarojs/taro"
import { View, Button } from '@tarojs/components'
import {AtButton, AtList, AtListItem} from "taro-ui"
import {getCurrentInstance} from "@tarojs/runtime"

import "taro-ui/dist/style/components/button.scss"
import "taro-ui/dist/style/components/list.scss"
import "taro-ui/dist/style/components/icon.scss"
import "./order_info.scss"


export default class Order_info extends Component {

  constructor(props) {
    super(props);
    const param = getCurrentInstance().router.params
    this.state = {
      isReceive: param.isReceive,
      _id: param._id,
      info: {}
    }
  }

  onReady () { }

  componentDidShow () {}

  async componentDidMount () {
    await Taro.cloud.callFunction({
      name: 'order_display',
      data: {
        type: 1,
        orderid: this.state._id
      }
    }) .then(res => {
      this.setState({
        info: res.result.data
      })
    })
  }

  async handleDelivery () {
    await Taro.cloud.callFunction({
      name: 'order_delivery',
      data: {
        orderid: this.state.info._id
      }
    }).then(async res => {
      await Taro.showToast({
        title: '交付成功',
        icon: 'success',
        duration: 2000,
        mask: true
      }).then(async res => {
        await Taro.navigateBack({
          delta: 1
        })
      })
    })
  }

  async handleCancel () {
    await Taro.cloud.callFunction({
      name: 'order_cancel',
      data: {
        orderid: this.state.info._id
      }
    }).then(async res => {
      await Taro.showToast({
        title: '撤销成功',
        icon: 'success',
        duration: 2000,
        mask: true
      }).then(async res => {
        await Taro.navigateBack({
          delta: 1
        })
      })
    })
  }

  render() {

    return (
      <View className='order_info'>
        <AtList>
          <AtListItem title='订单号' extraText={this.state.info._id} />
          <AtListItem title='订单状态' extraText={this.state.info.whether ? '已接单' : '未接单'} />
          <AtListItem title='预期时间' extraText={this.state.info.receive_date} />
          <AtListItem title='预期地点' extraText={this.state.info.delivery_addr} />
          <AtListItem title='取货地址' extraText={this.state.info.pick_up_addr} />
          <AtListItem title='劳务费' extraText={this.state.info.fee} />
        </AtList>
        {
          this.state.isReceive !== 'true'
            ? <AtButton onClick={this.handleCancel.bind(this)}>取消</AtButton>
            : <AtButton onClick={this.handleDelivery.bind(this)}>交付</AtButton>
        }
      </View>
    )
  }
}

