import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Index from '../../components/taro/taro_index';
import Taro_Image from '../../components/taro/taro_Image';
import Taro_request from '../../components/taro/taro_request';
//Plugin
import Plugin_banner from '../../components/taro/plugin_banner';
//api
import Lifecycle_componentDidShow from '../../components/taro/lifecycle_componentDidShow';
import Taro_getCurrentInstance from '../../components/taro/taro_getCurrentInstance()';
import Taro_showLoading from '../../components/taro/taro_showLoading()';
import Taro_login from '../../components/taro/taro_login()';

//测试页面
export default class Testpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name:"TestpageView" 
    };
}
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

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
        <Taro_login name={this.state.name}/>
      </View>
    )
  }
}
