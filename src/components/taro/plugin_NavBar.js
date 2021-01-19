import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import NavBar from '../customPlugins/NavBar';
import './index.scss'

/*********************index**********************
 *
*/
class plugin_banner extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"plugin_banner",
        pagetitle:"导航栏",
      };
  }

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <NavBar className="navbar" title={this.state.pagetitle} back />
      </View>
    )
  }
}
export default plugin_banner
