import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import './index.scss'
/*********************index**********************
 *
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"applet-index" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
      </View>
    )
  }
}//e
export default index;
