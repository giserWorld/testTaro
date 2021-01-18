import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Index from '../../components/taroUI/index';
import Ui_Swiper from '../../components/taroUI/ui_Swiper';

//测试页面
export default class taroUIPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name:"taroUIPage" 
    };
}
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='taroUIPage'>
        <Ui_Swiper name={this.state.name}/>
      </View>
    )
  }
}
