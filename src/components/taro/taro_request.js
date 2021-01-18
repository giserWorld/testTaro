import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import './index.scss'

/*********************taro_request**********************
 *1.发起 HTTPS 网络请求
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button size="mini">get请求</Button>
      </View>
    )
  }
}
export default index
