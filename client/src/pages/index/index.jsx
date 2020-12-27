import React, { Component } from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";
import {AtButton, AtList, AtListItem} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listItems: null
    }
  }

  componentWillMount() {}

  async componentDidMount() {
    await this.getList()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

 async getList () {
      await Taro.cloud.callFunction({
        name: 'order_display',
        data: {
          type: 4
        }
      })
        .then(result => {
          this.setState({
            list: result.result
          })
        })
    if (this.state.list.length !== 0) {
      this.setState({
        listItems: this.state.list.map((item, index) => {
          return <AtListItem title={'从' + item.pick_up_addr + '到' + item.delivery_addr}
                             arrow='right'
                             onClick={this.handleListItem.bind(this, item._id)}/>
        })
      })
    }
    else
      this.setState({
        listItems: null
      })
  }

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
        <View className='OrderList'>
          <AtList>
              {
                this.state.listItems ? this.state.listItems : <View>没有可以接受的订单</View>
              }
          </AtList>
        </View>
      </View>
    );
  }
}
