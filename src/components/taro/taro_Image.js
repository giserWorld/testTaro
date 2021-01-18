import React, { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'

/*********************taro_Image**********************
 *1.图片组件
*/
export default class taro_Image extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro_Image" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <View className="boxDiv">
          <Image 
            src="http://localhost:84/mapDatas/images/4.jpg"
            mode="aspectFill"//图片裁剪、缩放的模式
          />
        </View>
      </View>
    )
  }
}//e
