import React, { Component } from 'react'
import { View, Text,Button,ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************ScrollView**********************
 *1.可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，
    通过 WXSS 设置 height。组件属性的长度单位默认为 px
  *2.当内容超过容器时,才能滚动,反之不可以滚动
  *3.下拉刷新和上拉分页加载
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro_ScrollView",
        scrollY:true,//开启纵向滚动
      };
  }
  //触摸滚动时触发回调
  onScroll(){
    //console.log("onScroll:","onScroll触摸滚动");
  }//e

  //滚动到顶部触发回调
  onScrollToUpper(){
    //console.log("onScrollToUpper:","onScrollToUpper滚动到顶部");
  }//e

  //滚动到底部触发回调
  onScrollToLower(){
    //console.log("onScrollToLower:","onScrollToLower滚动到底部");
  }//e

  //触摸开始时触发回调
  onTouchStart(){
    console.log("onTouchStart:","onTouchStart触摸开始");
  }//e

  //触摸移动时触发回调
  onTouchMove(){
    //console.log("onTouchMove:","onTouchMove触摸移动");
  }//e
  //触摸结束时触发回调
  onTouchEnd(){
    console.log("onTouchEnd:","onTouchEnd触摸结束");
  }//e
  
  render () {
    //滚动容器
    const scrollStyle = {
      //height: '150px',
      border:"1px solid red",
      flex:1,
      overflow:"auto"
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      background: 'rgb(26, 173, 25)'
    }
    const vStyleB = {
       height: '150px',
      background: 'rgb(39,130,215)'
    }
    const vStyleC = {
      height: '150px',
      background:'rgb(241,241,241)',
      color: '#333'
    }
    const vStyleD = {
      height: '150px',
      background:'rgb(129,243,224)',
      color: '#333'
    }
    const vStyleE = {
      height: '150px',
      background:'rgb(242,243,129)',
      color: '#333'
    }
    const vStyleF = {
      height: '150px',
      background:'rgb(129,243,136)',
      color: '#333'
    }
    return (
      <View className='wrap testpage' style={{display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <Text className="my-h2">{this.state.name}</Text>
        <ScrollView
          className='scrollview_my'
          style={scrollStyle}
          enableFlex={true}//启用flexbox布局,成为flex container
          scrollWithAnimation={true}//在设置滚动条位置时使用动画过渡
          scrollTop={scrollTop}//设置竖向滚动条位置
          lowerThreshold={Threshold}//距底部/右边多远时（单位px），触发 scrolltolower 事件
          upperThreshold={Threshold}//距顶部/左边多远时（单位px），触发 scrolltoupper 事件

          //使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScrollToUpper={this.onScrollToUpper.bind(this)}//滚动到顶部/左边,会触发 scrolltoupper 事件
          onScrollToLower={this.onScrollToLower.bind(this)}//滚动到底部/右边，会触发 scrolltolower 事件
          onScroll={this.onScroll.bind(this)}//滚动时触发

          //分页属性
          scrollY={this.state.scrollY}//允许纵向滚动
          onTouchStart={this.onTouchStart.bind(this)}
          onTouchMove={this.onTouchMove.bind(this)}
          onTouchEnd={this.onTouchEnd.bind(this)}
        >
          <View style={vStyleA}>A</View>
          <View style={vStyleB}>B</View>
          <View style={vStyleC}>C</View>
          <View style={vStyleD}>D</View>
          <View style={vStyleE}>E</View>
          <View style={vStyleF}>F</View>
        </ScrollView>
        <View>
          <Button onClick={this.clickFun.bind(this,"开启")}>开启纵向滚动</Button><View></View>
          <Button onClick={this.clickFun.bind(this,"关闭")}>关闭纵向滚动</Button><View></View>
        </View>
      </View>
    )
  }//e
  //点击函数
  clickFun(type){
    let state={};
    if(type=="开启"){
      state.scrollY=true;
    }
    else{
      state.scrollY=false;
    }
    this.setState(state);
  }//e
}
export default index
