import React, { Component } from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component {


  componentWillMount() {}

  async componentDidMount() {
    const {result} = await Taro.cloud.callFunction({
      name:'login'
    })
    console.log(result)

    Taro.cloud.callFunction({
      name: 'sum',
      data: {
        x: 1,
        y: 5,
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}





  toPublish = () => {
    console.log('页面跳转');
    this.closeModal
    Taro.navigateTo({
      url:'/pages/publish/publish'
    })
  };

  render() {

    return (
      <View className='index'>
        <View className='Order'>
          <AtButton style='text-align:center' type='primary' size='mini' circle='true' full='true'
                    onClick={this.toPublish}>
            发布订单
          </AtButton>
        </View>

      </View>
    );
  }
}
