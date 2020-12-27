import React, { Component } from 'react'
import {  View } from '@tarojs/components'
import { AtList, AtListItem,AtSegmentedControl } from 'taro-ui'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入


import './my_order.scss'

export default class My_order extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current:0,
      list: [],
      listItems: null
    }
  }

  componentWillMount () { }

  async componentDidMount () {
    this.setState({
      current: 0
    })
    await this.getList()
  }

  componentWillUnmount () { }

  async componentDidShow () {
    await this.getList()
  }

  componentDidHide () { }


  handleListItem (_id) {
    let urlString = '/pages/order_info/order_info' + '?isReceive='
      + (this.state.current === 0 ? 'false' : 'true') + '&_id='
      + _id
    Taro.navigateTo({
      url: urlString
    })
  }

  async getList () {
    if (this.state.current === 0) {
      await Taro.cloud.callFunction({
        name: 'order_display',
        data: {
          type: 2
        }
      })
        .then(result => {
          this.setState({
            list: result.result
          })
        })
    } else {
      await Taro.cloud.callFunction({
        name: 'order_display',
        data: {
          type: 3
        }
      })
        .then(result => {
          this.setState({
            list: result.result
          })
        })
    }
    if (this.state.list.length !== 0) {
      this.setState({
        listItems: this.state.list.map((item, index) => {
          return <AtListItem title='订单号'
                             arrow='right'
                             onClick={this.handleListItem.bind(this, item._id)}
                             note={item._id}/>
        })
      })
    }
    else
      this.setState({
        listItems: null
      })
  }

  async handleClick (value) {
    this.setState({
      current: value
    })
    await this.getList()
  }

  render () {
    return (

      <View className='myOrder'>
      <AtSegmentedControl
        values={['我发布的', '我接受的']}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
        fontSize='60'
      />
      {
        this.state.current === 0
          ? <AtList>
            {
              this.state.listItems ? this.state.listItems : <View>没有发布的订单</View>
            }
          </AtList>
          : <AtList>
            {
              this.state.listItems ? this.state.listItems : <View>没有接受的订单</View>
            }
          </AtList>
      }
      </View>
    )
  }
}
