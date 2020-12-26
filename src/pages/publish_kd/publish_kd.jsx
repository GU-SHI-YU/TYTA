import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtInput, AtForm,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './publish_kd.scss'

export default class Publish_kd extends Component {

  constructor (props) {
    super(props)
    this.state = {
      fee: '',
      areaNumber:'',
      floorNumber:'',
      pick_up_addr:'',
      pick_up_num:'',
      receive_date:''
    }
  }



  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  handleChange = () => {
    this.setState({
      fee,
      areaNumber,
      floorNumber,
      pick_up_addr,
      pick_up_num,
      receive_date

    })
    return {fee,areaNumber,floorNumber,pick_up_addr,pick_up_num,receive_date}
  }

  handleCheckBox = () => {

  }
  componentDidShow () { }

  componentDidHide () { }


  onSubmit =() =>{
    console.log(this.state.value)
  }
  onReset =() =>{
    this.setState({
      fee: '',
      areaNumber:'',
      floorNumber:'',
      pick_up_addr:'',
      pick_up_num:'',
      receive_date:''
    })
    return {fee,areaNumber,floorNumber,pick_up_addr,pick_up_num,receive_date}
  }

  handleSubmit


  render () {
    const {fee,areaNumber,floorNumber,pick_up_addr,pick_up_num,receive_date} = this.state
    //console.log(fee)
    return (

      <View className='publish_kd'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
        <AtInput
          name='fee'
          title='费用'
          type='number'
          placeholder='不小于0的数'
          value={this.state.fee}
          onChange={this.handleChange.bind(this)}
        />

        <AtInput
          name='areaNumber'
          title='宿舍区'
          type='text'
          placeholder='例：东n舍'
          value={this.state.areaNumber}
          onChange={this.handleChange.bind(this)}
        />

        <AtInput
          name='floorNumber'
          title='楼栋'
          type='text'
          placeholder='例：510室'
          value={this.state.floorNumber}
          onChange={this.handleChange.bind(this)}
        />

        <AtInput
          name='pick_up_addr'
          title='取货地点'
          type='text'
          placeholder='例：东三食堂后菜鸟驿站'
          value={this.state.pick_up_addr}
          onChange={this.handleChange.bind(this)}
        />

        <AtInput
          name='pick_up_num'
          title='取件号码'
          type='text'
          placeholder='例：4396'
          value={this.state.pick_up_num}
          onChange={this.handleChange.bind(this)}
        />

        <AtInput
          name='receive_date'
          title='收到日期'
          type='text'
          placeholder='期待拿到的时间，例：12月25日晚上六点之前'
          value={this.state.receive_date}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit' >提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}
