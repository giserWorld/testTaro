import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************index**********************
 *
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"test_widget" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <View className="sumCard">
            
        </View>
      </View>
    )
  }
}
export default index
