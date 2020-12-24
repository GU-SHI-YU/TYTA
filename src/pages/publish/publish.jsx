import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './publish.scss'

export default class Publish extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openExpressModal:false,//是否打开发布快递订单modal
      openTakeoutModal:false
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleExpress = () =>{
    this.setState({
      openExpressModal:true
    })
  }

  handleTakeout = () =>{
    this.setState({
      openTakeoutModal:true
    })
  }



  closeExpressModal = () => {
    this.setState({
      openExpressModal: false
    })
  }

  closeTakeoutModal = () => {
    this.setState({
      openTakeoutModal: false
    })
  }

  toExpressPublish = () => {
    Taro.navigateTo({
      url:'/pages/publish_kd/publish_kd'
    })
  }

  toTakeoutPublish = () => {
    Taro.navigateTo({
      url:'/pages/publish_wm/publish_wm'
    })
  }

  render () {
    const {openExpressModal,openTakeoutModal} = this.state
    return (
      <View className='index'>
          <View className='express'>
          <Button onClick={this.handleExpress}>快递</Button>
          </View>
          <View className='take-out'>
          <Button onClick={this.handleTakeout}>外卖</Button>
          </View>
        <AtModal isOpened={openExpressModal}>
          <AtModalHeader>发布快递订单提醒</AtModalHeader>
          <AtModalContent>
            将发布快递订单
          </AtModalContent>
          <AtModalAction> <Button onClick={this.closeExpressModal}>取消</Button> <Button onClick={this.toExpressPublish} >发布快递订单</Button> </AtModalAction>
        </AtModal>

        <AtModal isOpened={openTakeoutModal}>
          <AtModalHeader>发布外卖订单提醒</AtModalHeader>
          <AtModalContent>
            将发布外卖订单
          </AtModalContent>
          <AtModalAction> <Button onClick={this.closeTakeoutModal}>取消</Button> <Button onClick={this.toTakeoutPublish} >发布外卖订单</Button> </AtModalAction>
        </AtModal>
    </View>

    )
  }
}
