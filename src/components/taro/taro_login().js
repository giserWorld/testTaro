import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************login()**********************
 *1.调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，
    包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成
 *2.
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  //点击回调
  clickFun(){
    Taro.login({
      success:(result)=>{//接口调用成功的回调函数
        console.log(result);
      },
    });
  }//e
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button onClick={this.clickFun}>登录</Button><View></View>
      </View>
    )
  }
}
export default index
