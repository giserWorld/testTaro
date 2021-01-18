import React, { Component } from 'react'
import './index.scss'
/*********************index**********************
 *
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"ui-index" 
      };
  }
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
      </View>
    )
  }
}//e
