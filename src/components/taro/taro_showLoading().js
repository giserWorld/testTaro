import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************showLoading()**********************
 *1.显示 loading 提示框。需主动调用 Taro.hideLoading 才能关闭提示框
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"showLoading()" 
      };
  }
  //点击函数
  clickFun(type){
    if(type==="open"){
      //显示提示框
      Taro.showLoading({
        title:"加载中",
      });
    }
    else{
      //隐藏提示框
      Taro.hideLoading();
    }
  }//e
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button onClick={this.clickFun.bind(this,"open")}>显示loading提示</Button><View></View>
        <Button onClick={this.clickFun.bind(this,"close")}>关闭loading提示</Button><View></View>
      </View>
    )
  }
}
export default index
