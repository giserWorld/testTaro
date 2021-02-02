import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';

//组件
import Index from './taro_index';
import Taro_Image from './taro_Image';
import Taro_request from './taro_request';
import Test_widget from './test_widget';
import Taro_map from './taro_map';
//Plugin
import Plugin_banner from './plugin_Banner';
import Plugin_NavBar from './plugin_NavBar';
//api
import Lifecycle_componentDidShow from './lifecycle_componentDidShow';
import Taro_getCurrentInstance from './taro_getCurrentInstance()';
import Taro_showLoading from './taro_showLoading()';
import Taro_login from './taro_login()';
import Taro_ScrollView from './taro_ScrollView';
import Taro_ScrollView_fy from './taro_ScrollView_fy';

//taroViewer
class taroViewer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taroViewer" 
      };
  }
  render () {
    return (
      <View className='wrap taroViewer'>
        <Taro_map name={this.state.name}/>
      </View>
    )
  }
}
export default taroViewer;
