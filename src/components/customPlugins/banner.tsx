import React, { Component } from "react";
import { Image, Swiper, SwiperItem, View } from "@tarojs/components";
import "./css/myTaro.scss";

//组件属性
interface IProps {
  swiperClick:Function,//点击banner回调函数
  bannerList:Array<any>,//banner图列表
}
//组件state
interface IState {
  isBannerTitle:Boolean,
}

/******************banner轮播*******************
*更新时间:2020.01.18 wxt
*1.可选组件属性:
  1)isBannerTitle(Function):是否显示轮播标题
  2)bannerList(Function):轮播图片
  3)swiperClick(Function):轮播点击回调函数
*2.bannerList=[
    {name:"",src:""}
  ]
*/
class banner extends Component<IProps,IState>{
  constructor(props) {
    super(props);
    this.state = {
      isBannerTitle:props.isBannerTitle||true,//是否显示banner标题
    };
  }
  render() {
    return (
      <View>
        <Swiper
          className="my-swiper"
          indicatorColor="#E8E9EF"
          indicatorActiveColor="#42BE6C"
          circular={true}
          indicatorDots={true}
          autoplay={true}
          interval={8000}
          //onChange={this.onChange}
          //current={this.state.current}
        >
          {this.props.bannerList&&this.props.bannerList.map((item,idx)=>{
            return (
              <SwiperItem key={idx} onClick={()=>{this.props.swiperClick(item)}}>
                <View className="swiper-img-title">{item.name||""}</View>
                <Image className="swiper-img" mode="aspectFill" src={item.src} />
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    );
  }
}
export default banner;
