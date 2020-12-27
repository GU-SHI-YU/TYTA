import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtInput, AtForm,AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './publish_kd.scss'

export default class Publish_kd extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pick_up_addr: '',
      delivery_addr: '',
      receive_date: '',
      fee: 0,
      remarks: '',
      message: '',
      _id: ''
    }
  }



  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  handleChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
    return value;
  }

  handleCheckBox () { }

  componentDidShow () { }

  componentDidHide () { }


  onSubmit (event) {
    console.log(1, this.state)
  }

  onReset () {
    this.setState({
      pick_up_addr: '',
      delivery_addr: '',
      receive_date: '',
      fee: 0,
      remarks: '',
      message: '',
      _id: ''
    })
  }

  handleSubmit (event) {
    console.log(this.state)
    this.state._id = Taro.cloud.callFunction({
      name: "order_publish",
      data: this.state
    })
  }


  render () {
    return (

      <View className='publish_kd'>
        <AtForm>
          <AtInput
            name='delivery_addr'
            title='送货地址'
            type='text'
            placeholder='例：东11舍101'
            value={this.state.delivery_addr}
            onChange={this.handleChange.bind(this, 'delivery_addr')}
          />

          <AtInput
            name='pick_up_addr'
            title='取货地点'
            type='text'
            placeholder='例：东三食堂后菜鸟驿站'
            value={this.state.pick_up_addr}
            onChange={this.handleChange.bind(this, 'pick_up_addr')}
          />

          <AtInput
            name='receive_date'
            title='取货时间'
            type='text'
            placeholder='期待拿到的时间，例：12月25日晚上六点之前'
            value={this.state.receive_date}
            onChange={this.handleChange.bind(this, 'receive_date')}
          />

          <AtInput
            name='fee'
            title='费用'
            type='number'
            placeholder='不小于0的数'
            value={this.state.fee}
            onChange={this.handleChange.bind(this, 'fee')}
          />

          <AtInput
            name='remarks'
            title='备注'
            type='text'
            placeholder='备注'
            value={this.state.remarks}
            onChange={this.handleChange.bind(this, 'remarks')}
          />

          <AtInput
            name='message'
            title='短信'
            type='text'
            placeholder='包含取货码的短信'
            value={this.state.message}
            onChange={this.handleChange.bind(this, 'message')}
          />

          <AtButton onClick={this.handleSubmit.bind(this)}>提交</AtButton>
        </AtForm>
      </View>
    )
  }
}
