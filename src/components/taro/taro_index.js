import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

/*********************index**********************
 *
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
      </View>
    )
  }
}
export default index
