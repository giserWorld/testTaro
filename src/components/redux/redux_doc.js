import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import './index.scss'
/*********************redux_doc**********************
 *1.taro框架中使用redux的方法与react是一模一样的
    1)定义redux store仓库方法相同
    2)引入redux仓库的方法相同
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"redux_doc" 
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
