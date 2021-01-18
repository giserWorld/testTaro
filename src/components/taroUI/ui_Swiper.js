import React, { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
/*********************ui_Swiper**********************
 *1.滑块视图容器，常用于走马灯、轮播图
 *2.
*/
export default class ui_Swiper extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"ui_Swiper" 
      };
  }
  render () {
    return (
      <View className='ui_Swiper'>
        <Text className="my-h2">{this.state.name}</Text>
        <View style="border:1px solid red;">
          <Swiper
            className="ui-Swiper"
            style={{padding:"0.5rem"}}
            indicatorDots={true}//是否显示面板指示点
            indicatorColor='#999'//指示点颜色
            vertical={false}//滑动方向是否为纵向
            indicatorActiveColor='#333'//当前选中的指示点颜色
            circular={true}//是否采用衔接滑动
            autoplay={true}//是否自动切换
            interval={8000}//自动切换时间间隔
          >
          <SwiperItem>
            <Image className="swiper-img" src='https://qxh.l-try.com:9002/file1/wxmini/default/2.jpg'/>
          </SwiperItem>
          <SwiperItem>
            <Image className="swiper-img" src='http://192.168.167.229:8880/file1/user/20200928/1601262663585_default.png' />
          </SwiperItem>
        </Swiper>
        </View>
      </View>
    )
  }
}//e
