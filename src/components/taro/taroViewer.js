import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';

//taro地图
import Taro_map from './taroMap/taro_map';
import Taro_map_pickPosition from './taroMap/taro_map_pickPosition';
import Taro_home from './taroMap/taro_home';
import Taro_address_parse from './taroMap/taro_address_parse';
import Taro_address_inputTip from './taroMap/taro_address_inputTip';
//taroTest
import Test_fixedContainer from './taroTest/test_fixedContainer';
//taroWidget
import Taro_addressInput from './taroWidget/taro_addressInput';
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
import Taro_showToast from './taro_showToast()';
import Taro_getLocation from './taro_getLocation()';
//组件
import Index from './taro_index';
import Taro_Image from './taro_Image';
import Taro_request from './taro_request';
import Test_widget from './test_widget';
import Taro_Input from './taro_Input';

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
        <Taro_addressInput name={this.state.name}/>
      </View>
    )
  }
}
export default taroViewer;
