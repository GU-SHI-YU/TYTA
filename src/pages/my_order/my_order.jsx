import React, { Component } from 'react'
import {  View } from '@tarojs/components'
import { AtList, AtListItem,AtSegmentedControl } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入


import './my_order.scss'

export default class My_order extends Component {

  constructor (props) {
    super(props)
    this.state = {
      flag: true,//我发布的
      current:0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  handleClick () {
    if(this.state.flag) {
      this.setState({
        current:1,
        flag:false
      })
    }
    else {
      this.setState({
        current:0,
        flag:true
      })
    }

  }

  render () {
    return (

      <View className='myOrder'>
      <AtSegmentedControl
        values={['我发布的', '我接受的']}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
      {
        this.state.current === 0
        ? <AtList>
        <AtListItem title='订单号' extraText='4' />
        <AtListItem title='订单状态' extraText='未接受' />
        <AtListItem title='预期时间' extraText='13：00之前' />
        <AtListItem title='预期地点' extraText='沁苑东十一栋511室' />
          </AtList>
        : null
      }
      {
        this.state.current === 1
        ? <AtList>
        <AtListItem title='订单号' extraText='19' />
        <AtListItem title='订单状态' extraText='已完成' />
        <AtListItem title='预期时间' extraText='12：30之前' />
        <AtListItem title='预期地点' extraText='沁苑东十一栋510室' />
          </AtList>
        : null
      }
      </View>
    )
  }
}
