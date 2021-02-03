import React, { Component } from 'react'
import { View, Text,Button,Map,Image,CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import '../index.scss'
let positionIcon="http://localhost:84/mapDatas/images/jdwddw.png";//位置图标
/*********************taro_map**********************
 *
*/
class taro_map extends Component {
  mapCtx=null;//地图map实例
  userLocation=null;//用户位置,[x,y,z]
  constructor(props) {
      super(props);
      this.state = {
        name:"taro_map",
        subkey:"4AXBZ-NELL5-BM5IU-QQRY4-W2BMV-XBFGT",
        center:[102.21,24.02],//中心点
        scale: 12,//缩放级别,取值范围为3-20
        markers:[],//标记点
        mapSetting:{//地图配置项
          skew: 0,//倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角
          rotate: 0,//旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角
          showLocation: true,//显示带有方向的当前定位点
          layerStyle: 1,//底图,个性化地图配置的style，不支持动态修改
          showCompass: true,//显示指南针
          showScale: true,//显示比例尺
          enable3D: false,//展示3D楼块
          enableZoom: true,//是否支持缩放
          enableScroll: true,//是否支持拖动
          enableRotate: true,//是否支持旋转
          enableOverlooking: false,//开启俯视
          enableSatellite: true,//是否开启卫星图
          enableTraffic: false,//是否开启实时路况
        },
      };
  }
  componentDidMount(){
    //map实例
    this.mapCtx =Taro.createMapContext('wxMap');
    this.getUserLocation();//获取用户位置
  }//e

  //获取用户位置
  getUserLocation(){
    //获取小程序用户位置
    Taro.getLocation({
      altitude:"true",//传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      isHighAccuracy: true,//开启高精度定位
      type: "gcj02",//wgs84返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标
      success: (result) => {
        this.userLocation=[result.longitude,result.latitude,result.altitude];
        console.log("用户当前位置:",result);
      },
      fail:(result) => {
        //showToast("未获取到GPS位置信息");
      },
    });
  }//e

  //地图点击事件
  onMapTap(clickEvt){
    console.log("地图点击事件:",clickEvt);
  }//e

  //视野发生变化时触发
  onRegionChange(changeEvt){
    let mpEvent=changeEvt.mpEvent||{};
    let mpEventType=mpEvent.type||"";
    let mapDetail=mpEvent.detail||{};//地图信息
    let mapCenter=mapDetail.centerLocation||null;//地图中心位置,{latitude:"",longitude:""}
    if(mpEventType=="begin"){//拖动地图开始
      //console.log("拖动事件begin:",changeEvt);
    }
    else if(mpEventType=="end"){//拖动地图结束
      console.log("拖动事件end:",changeEvt);
    }
    if(!mapCenter)return false;
    let geo_marker={
      id:66,//guid
      longitude:mapCenter.longitude,
      latitude:mapCenter.latitude,
      iconPath:positionIcon,//图标url
      width: 18,
      height: 26,
      anchor:{x:0.5,y:0.5}
    };
    //this.setState({markers:[geo_marker]});
  }//e

  //点击函数
  clickFun(type){
    let _self=this;
    let state=null;
    if(type=="添加marker"){
      //marker图标
      let geo_marker={
        id:66,//guid
        longitude:102.21,
        latitude:24.02,
        iconPath:positionIcon,//图标url
        width: 18,
        height: 26,
      };
      state={
        markers:[geo_marker]
      };
    }
    else if(type=="获取地图map"){
      console.log("wxMap:",this.refs["wxMap"]); 
    }
    else if(type=="定位指定位置"){
      //将地图中心移置指定位置
      if(!_self.userLocation)return false;
      this.mapCtx.moveToLocation({
        longitude:_self.userLocation[0],
        latitude:_self.userLocation[1]
      });
    }
    else if(type=="地图中心坐标"){
      //获取地图中心点(gcj02 坐标系)
      this.mapCtx.getCenterLocation({
        success:function(result){
          console.log("mapCenter:",result);
        }
      });
    }
    this.setState(state);
  }//e
  render () {
    return (
      <View className='wrap taro_map'>
        <View class="wrap mapContainer" style={{position:"relative"}}>
          <Map
            ref="wxMap"
            id="wxMap"
            className="wxMap"
            style="width:100%;height:100%;"
            //subkey={this.state.subkey}
            setting={this.state.mapSetting}
            scale={this.state.scale}
            longitude={this.state.center[0]||null}
            latitude={this.state.center[1]||null}
            onTap={this.onMapTap.bind(this)}//点击地图时触发
            onRegionChange={this.onRegionChange.bind(this)}//视野发生变化时触发
            markers={this.state.markers}//地图标记点
          />
        </View>
        <View style={{position:"absolute",left:"10px",top:"10%"}}>
            <Button size="mini" onClick={this.clickFun.bind(this,"获取地图map")}>获取地图map</Button><View></View>
            <Button size="mini" onClick={this.clickFun.bind(this,"添加marker")}>添加marker</Button><View></View>
            <Button size="mini" onClick={this.clickFun.bind(this,"定位指定位置")}>定位到指定位置</Button><View></View>
            <Button size="mini" onClick={this.clickFun.bind(this,"地图中心坐标")}>获取地图中心坐标</Button><View></View>
        </View>
      </View>
    )
  }
}
export default taro_map
