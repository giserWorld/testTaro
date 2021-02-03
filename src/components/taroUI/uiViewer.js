import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';

import Ui_index from './ui_index';
import Ui_Swiper from './ui_Swiper';
import Ui_AtActivityIndicator from './ui_AtActivityIndicator';
import Ui_Icon from './ui_Icon';

class uiViewer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"uiViewer" 
      };
  }
  render () {
    return (
      <View className='wrap uiViewer'>
        <Ui_Icon name={this.state.name}/>
      </View>
    )
  }
}//e
export default uiViewer;
