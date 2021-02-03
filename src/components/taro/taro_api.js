import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************taro_api**********************
 *Taro.getLocation({//获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用
    altitude: "true",
    isHighAccuracy: true,
    type: "gcj02",
    success:function,
    fail:function,
 })
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
      </View>
    )
  }
}
export default index
