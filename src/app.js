import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {
    if(process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        traceUser:true
      })
    }


  }



  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
