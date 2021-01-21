import React, { Component } from 'react'
import { View, Text,Button,ScrollView } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui'
import Taro from '@tarojs/taro';
import '../customPlugins/css/ScrollView_fy.scss';
import './index.scss'

/*********************index**********************
 *
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index",
        //分页属性
        datalist:[],//数据列表
        total:0,//分页总数
        pageindex:1,//分页记录数
        pagesize:10,//分页大小

        dargStyle:{//下拉框的样式
          top: 0 + 'px'
        },
        downDragStyle:{//下拉图标的样式
          height: 0 + 'px'
        },
        upDragStyle:{//上拉图标样式
          height: 0 + 'px'
        },
        pullText:'上拉加载更多',
        downText:'下拉刷新',
        start_p:{},
        scrollY:true,//开启纵向滚动
        dargState:0//刷新状态 0不做操作 1刷新 -1加载更多
      };
  }

/******************分页********************/

  //还原初始设置
  reduction() {
      const time = 0.5;
      this.setState({
          upDragStyle: {//上拉图标样式
              height: 0 + 'px',
              transition: `all ${time}s`
          },
          dargState: 0,
          dargStyle: {
              top: 0 + 'px',
              transition: `all ${time}s`
          },
          downDragStyle: {
              height: 0 + 'px',
              transition: `all ${time}s`
          },
          scrollY:true
      })
      setTimeout(() => {
          this.setState({
              dargStyle: {
                  top: 0 + 'px',
              },
              upDragStyle: {//上拉图标样式
                  height: 0 + 'px'
              },
              pullText: '上拉加载更多',
              downText: '下拉刷新'
          })
      }, time * 1000);
  }//e
  
  //触摸移动
  touchmove(e) {
      let that = this
      let move_p = e.touches[0],//移动时的位置
      deviationX = 0.30,//左右偏移量(超过这个偏移量不执行下拉操作)
      deviationY = 70,//拉动长度（低于这个值的时候不执行）
      maxY = 100;//拉动的最大高度

      let start_x = this.state.start_p.clientX,
          start_y = this.state.start_p.clientY,
          move_x = move_p.clientX,
          move_y = move_p.clientY;
      //得到偏移数值
      let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
      if (dev < deviationX) {//当偏移数值大于设置的偏移数值时则不执行操作
          let pY = Math.abs(move_y - start_y) / 3.5;//拖动倍率（使拖动的时候有粘滞的感觉--试了很多次 这个倍率刚好）
    if (move_y - start_y > 0) {//下拉操作
      if (pY >= deviationY) {
        this.setState({ dargState: 1, downText: '释放刷新' })
      } else {
        this.setState({ dargState: 0, downText: '下拉刷新' })
      }
      if (pY >= maxY) {
        pY = maxY
      }
      this.setState({
        dargStyle: {
          top: pY + 'px',
        },
        downDragStyle: {
          height: pY + 'px'
        },
        scrollY:false//拖动的时候禁用
      })
    }
    if (start_y - move_y > 0) {//上拉操作
      //console.log('上拉操作')
      if (pY >= deviationY) {
        this.setState({ dargState: -1, pullText: '释放加载更多' })
      } else {
        this.setState({ dargState: 0, pullText: '上拉加载更多' })
      }
      if (pY >= maxY) {
        pY = maxY
      }
      this.setState({
        dargStyle: {
          top: -pY + 'px',
        },
        upDragStyle: {
          height: pY + 'px'
        },
        scrollY: false//拖动的时候禁用
      })
    }

      }
  }//e

  //触摸开始
  touchStart(e){
      this.setState({
          start_p: e.touches[0]
      })
  }//e

  //触摸结束时触发
  touchEnd(e) {
    if (this.state.dargState === 1) {
        this.down()
    } else if (this.state.dargState === -1) {
        this.pull()
    }
    this.reduction()
  }//e

  //上拉分页加载数据
  pull(){
    console.log('上拉分页')
  }//e
  //下拉刷新
  down(){
      console.log('下拉刷新')
  }//e

/******************end********************/

  //滚动到顶部事件
  ScrollToUpper() { 
    //console.log('滚动到顶部事件')
  }//e
  //滚动到底部事件
  ScrollToLower() { 
    //console.log('滚动到底部事件')
  }//e
  render () {
    let dargStyle = this.state.dargStyle;
    let downDragStyle = this.state.downDragStyle;
    let upDragStyle = this.state.upDragStyle;
    return (
        <View className='wrap scrollView_fy' style={{display:"flex",flexDirection:"column"}}>
            <View style='width:100%;height:10vh;background:#993;'>
              <Text>外侧统计条件</Text>
            </View>
            <View className='dragUpdataPage' style={{flex:1}}>
                <View className='downDragBox' style={downDragStyle}>
                    <AtActivityIndicator></AtActivityIndicator>
                    <Text className='downText'>{this.state.downText}</Text>
                </View>
                {/* 滚动区域 */}
                <ScrollView
                  style={dargStyle}
                  className="dragUpdata"
                  scrollWithAnimation
                  scrollY={this.state.scrollY}
                  onTouchStart={this.touchStart.bind(this)}
                  onTouchMove={this.touchmove.bind(this)}
                  onTouchEnd={this.touchEnd.bind(this)}

                  //onScrollToUpper={this.ScrollToUpper.bind(this)}
                  //onScrollToLower={this.ScrollToLower.bind(this)}
                >
                  {/* 滚动内容 */}
                  <View style='width:100%;height:60vh;background:pink;' >
                    aaaaaaaa
                  </View>
                </ScrollView>
                <View className='upDragBox' style={upDragStyle}>
                    <AtActivityIndicator></AtActivityIndicator>
                    <Text className='downText'>{this.state.pullText}</Text>
                </View>
            </View>
        </View>
    )
  }
}
export default index
