import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************taro_map_api**********************
 *1.mapCtx.getCenterLocation({//获取当前地图中心的经纬度.返回的是gcj02坐标系
    
  })
 *2.mapCtx.moveToLocation({//将地图中心移置当前定位点
   longitude:"",
   latitude:""
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
