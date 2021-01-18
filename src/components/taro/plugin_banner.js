import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Banner from '../customPlugins/Banner';
import './index.scss'

/*********************index**********************
 *
*/
class plugin_banner extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"plugin_banner",
        list:[
          {
            name:"山峰",
            src:"https://qxh.l-try.com:9002/file1/wxmini/default/2.jpg",
          },
          {
            name:"河流",
            src:"http://192.168.167.229:8880/file1/user/20200928/1601262663585_default.png",
          }
        ]
      };
  }
  //点击回调
  bannerClickFun=(item)=>{
    console.log("item:",item);
  }//e

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Banner
          bannerList={this.state.list}
          swiperClick={this.bannerClickFun}
        />
      </View>
    )
  }
}
export default plugin_banner
