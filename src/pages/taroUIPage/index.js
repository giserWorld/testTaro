import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Ui_index from '../../components/taroUI/ui_index';
import Ui_Swiper from '../../components/taroUI/ui_Swiper';
import Ui_AtActivityIndicator from '../../components/taroUI/ui_AtActivityIndicator';

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
        <Ui_AtActivityIndicator name={this.state.name}/>
      </View>
    )
  }
}
