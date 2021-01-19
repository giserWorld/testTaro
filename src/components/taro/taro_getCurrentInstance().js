import React, { Component } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { View, Text,Button } from '@tarojs/components';
import './index.scss'

/*********************getCurrentInstance()**********************
 *1.在页面组件中，可以通过 getCurrentInstance().router获取当前页面的路由参数
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
    let currentPage=getCurrentInstance();//获取当前页面对象
    let router=currentPage.router;//页面路由
    let path=router.path||"";//页面地址,"/pages/taroPage/index"
    let params=router.params||{};//url参数,{}
    console.log("router:",router);
  }//e
  
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button onClick={this.clickFun.bind(this)}>获取路由参数</Button><View></View>
      </View>
    )
  }
}
export default index
