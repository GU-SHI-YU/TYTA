import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './publish_kd.scss'

export default class Publish_kd extends Component {

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

      <View className='publish_kd'>
      <AtSegmentedControl
        values={['我发布的', '我接受的']}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
      {
        this.state.current === 0
        ? <View className='tab-content'>我发布的</View>
        : null
      }
      {
        this.state.current === 1
        ? <View className='tab-content'>我接受的</View>
        : null
      }
      </View>
    )
  }
}
