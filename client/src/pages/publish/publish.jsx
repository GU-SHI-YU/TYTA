import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './publish.scss'

export default class Publish extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


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
    return (
      <View className='index'>
        <View className='express'>
          <Button onClick={this.toExpressPublish}>快递</Button>
        </View>
        <View className='take-out'>
          <Button onClick={this.toTakeoutPublish}>外卖</Button>
        </View>
      </View>
    )
  }
}
