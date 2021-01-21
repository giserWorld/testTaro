import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Index from '../../components/taro/taro_index';
import Taro_Image from '../../components/taro/taro_Image';
import Taro_request from '../../components/taro/taro_request';
import Test_widget from '../../components/taro/test_widget';
//Plugin
import Plugin_banner from '../../components/taro/plugin_Banner';
import Plugin_NavBar from '../../components/taro/plugin_NavBar';
//api
import Lifecycle_componentDidShow from '../../components/taro/lifecycle_componentDidShow';
import Taro_getCurrentInstance from '../../components/taro/taro_getCurrentInstance()';
import Taro_showLoading from '../../components/taro/taro_showLoading()';
import Taro_login from '../../components/taro/taro_login()';
import Taro_ScrollView from '../../components/taro/taro_ScrollView';
import Taro_ScrollView_fy from '../../components/taro/taro_ScrollView_fy';

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
      <View className='wrap testpage'>
        <Taro_ScrollView_fy name={this.state.name}/>
      </View>
    )
  }
}
