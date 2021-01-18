import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

/*********************lifecycle_componentDidShow**********************
 *1.componentDidShow():页面显示/切入前台时触发,在小程序环境中对应页面的 onShow
 *2.componentDidShow、componentDidHide函数只能在页面组件中使用,不能再局部组件中使用
 *3.
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"lifecycle_componentDidShow" 
      };
  }
  //组件切换显示时触发
  componentDidShow(){
    console.log("componentDidShow");
  }//e
  //组件切换隐藏时触发
  componentDidHide(){
    console.log("componentDidHide");
  }//e

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
      </View>
    )
  }
}
