import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui'
import './index.scss'

/*********************AtActivityIndicator**********************
 *1.该组件提供一个加载等待元素，也就是 Loading 组件
 *2.需要"taro-ui": "^3.0.0-alpha.3"版本,不能使用"taro-ui": "2.3.4"版本
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"ui-index" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <View style={{border:"1px solid red"}}>
          <AtActivityIndicator size={32}></AtActivityIndicator>
          <AtActivityIndicator mode='center' content='加载中...'></AtActivityIndicator>
        </View>
      </View>
    )
  }
}//e
