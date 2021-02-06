import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************getStorageSync**********************
 *1.Taro.getStorage 的同步版本
 *2.Taro.setStorageSync(key,data)
 *3.存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象
 *4.等同于web端的"localStorage"
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
    if(type=="设置缓存数据"){
      let jsonStr=JSON.stringify({name:'12',age:25});
      Taro.setStorageSync("userinfo",jsonStr);//存储数据
    }
    else if(type=="获取缓存数据"){
      let jsonStr2=Taro.getStorageSync("userinfo");//获取存储数据
      let obj=JSON.parse(jsonStr2);
      console.log("userinfo:",jsonStr2);
    }
  }//e
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
        <Button onClick={this.clickFun.bind(this,"设置缓存数据")}>setStorage缓存</Button><View></View>
        <Button onClick={this.clickFun.bind(this,"获取缓存数据")}>getStorage缓存</Button><View></View>
      </View>
    )
  }
}
export default index
