import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.scss'
/*********************ui_Icon**********************
 *1.用于展示 ICON。该组件的 ICON 图形基于 Webfont，因此可任意放大、改变颜色
 *2.
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"ui-字体图标" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
        <AtIcon value="menu" size="30" color="#F00"></AtIcon>
      </View>
    )
  }
}//e
