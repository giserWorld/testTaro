import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************taro_showToast**********************
 *1.显示消息提示框
 *2.Taro.showLoading 和 Taro.showToast 同时只能显示一个
 *3.Taro.showToast 应与 Taro.hideToast 配对使用
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  //点击函数
  clickFun(){
    Taro.showToast({
      title: "消息提示框",//提示的内容
      icon: "none",//图标,可选值:"success"、"loading"、"none"
      duration: 2000,//提示的延迟时间
      mask:false,//是否显示透明蒙层，防止触摸穿透
    });
  }//e

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
        <Button onClick={this.clickFun.bind(this)}>显示消息提示框</Button><View></View>
      </View>
    )
  }
}
export default index
