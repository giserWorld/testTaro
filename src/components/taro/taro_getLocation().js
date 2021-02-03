import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************taro_getLocation()**********************
 *1.获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用
 *2.工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
 *3.使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换
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
    //获取小程序用户位置
    Taro.getLocation({
      altitude:"true",//传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      isHighAccuracy: true,//开启高精度定位
      type: "gcj02",//wgs84返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标
      success: (result) => {
        console.log("当前位置:",result);
      },
      fail:(result) => {
        showToast("未获取到GPS位置信息");
      },
    });
  }//e

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
        <Button onClick={this.clickFun.bind(this)}>获取小程序位置</Button><View></View>
      </View>
    )
  }
}
export default index
