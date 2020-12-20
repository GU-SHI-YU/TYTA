import React, { Component } from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component {


  componentWillMount() {}

  componentDidMount() {}

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
        <AtButton style='text-align:center' type='primary' size='mini' circle='true' full='true' onClick={this.toPublish}>发布订单</AtButton>
        </View>

      </View>
    );
  }
}
