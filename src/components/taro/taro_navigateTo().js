import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************navigateTo()**********************
 *1.保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
    使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层
  *2.
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  //点击函数
  clickFun(type){
    if(type=="跳转"){
        Taro.navigateTo({
          url:"pages/index/index",
          success:function (result) {
            console.log("跳转结果",result);
          }
        })
    }
    else{
      Taro.navigateBack();
    }
  }//e
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button onClick={this.clickFun.bind(this,"跳转")}>跳转页面</Button>
        <Button onClick={this.clickFun.bind(this,"返回")}>返回页面</Button>
      </View>
    )
  }
}
export default index
