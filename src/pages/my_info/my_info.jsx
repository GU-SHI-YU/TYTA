import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Button, Image,Text } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction} from "taro-ui"


import loginBg from '../../assets/images/login_bg.jpg'

import './my_info.scss'

export default class My_info extends Component {

constructor(props) {
  super(props)
  this.state = {
    needAuth: false,//是否需要提示授权
    openModal:false,//是否打开授权modal
    avatarUrl: '' ,// 用户头像
    myNickName:''
  }
}

componentDidMount() {
  /*Taro.getUserInfo({}).then(user => {
      console.log(user)
      this.setState({

      })
    }).catch(error => {
      console.log(error)
    })
}*/
  Taro.getSetting({}).then(res => {
    if(!res.authSetting['scope.userInfo'] ) {
      //需要提示授权
      this.setState({
        needAuth: true
      })
    }

    if(res.authSetting['scope.userInfo'] === true) {
      Taro.getUserInfo({}).then(user =>{
        console.log(user)
        this.setState ({
          needAuth:false,
          avatarUrl:user.userInfo.avatarUrl,
          myNickName:user.userInfo.nickName,
          openModal:false
        })
      }).catch(error =>{
        console(error)
      })
    }
    console.log(res)
  }).catch(error =>{
    console(error)
  })
}





  config = {
    navigationBarTitleText: '我',
    navigationStyle: 'custom'
  }
  handleOpenModal = () =>{
    this.setState({
      openModal:true
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

  bindGetUserInfo = (e) => {
    if (e.detail.userInfo) {
      this.setState({
        avatarUrl: e.detail.userInfo.avatarUrl,
        myNickName:e.detail.userInfo.nickName,
        openModal: false,
        needAuth: false
      })


    }

  }

  render() {
    const {needAuth,openModal,avatarUrl,myNickName} = this.state
    return (
      <View className='index'>
        <View className='login-bg'>
          <Image className='login-bg-cover' src={loginBg} />
            {


              needAuth
              ? <View className='click-login' onClick={this.handleOpenModal}>点击登录</View>
              : <View className='user-avatar'>
                <Image className='user-image' src={avatarUrl} />
              <Text className='mtNickName'>昵称</Text>

              </View>
            }
        </View>

        <AtModal isOpened={openModal}>
          <AtModalHeader>授权提醒</AtModalHeader>
          <AtModalContent>
            将获取你的昵称、头像、地区
          </AtModalContent>
          <AtModalAction> <Button onClick={this.closeModal}>取消</Button> <Button open-type='getUserInfo' onGetUserInfo={this.bindGetUserInfo}>授权</Button> </AtModalAction>
        </AtModal>


      </View>
    )
  }
}


