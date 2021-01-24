import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

import UiViewer from '../../components/taroUI/uiViewer';
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
      <View className='wrap taroUIPage'>
        <UiViewer />
      </View>
    )
  }
}
