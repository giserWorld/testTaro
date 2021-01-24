import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import TaroViewer from '../../components/taro/taroViewer';

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
    //console.log("componentDidShow");
  }//e

  //组件切换隐藏时触发
  componentDidHide(){
    //console.log("componentDidHide");
  }//e

  render () {
    return (
      <View className='wrap testpage'>
        <TaroViewer name={this.state.name}/>
      </View>
    )
  }
}
