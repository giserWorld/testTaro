import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import AppletViewer from '../../components/appletAPI/appletViewer';
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AppletViewer />
      </View>
    )
  }
}
