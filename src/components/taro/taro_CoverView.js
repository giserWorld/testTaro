import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************CoverView**********************
 *1.覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher 只支持嵌套 cover-view、cover-image，
  可在 cover-view 中使用 button
 *2.cover-view中可嵌套组件:
   1)<Button>
 *3.cover-view中不可嵌套组件:
   1)<Input>
  *4.如果想在地图上面添加操作区域,可在<Map></Map>中添加<CoverView>标签即可,不能使用<View>标签
     因为<View>标签添加到地图内部后,不能操作
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
