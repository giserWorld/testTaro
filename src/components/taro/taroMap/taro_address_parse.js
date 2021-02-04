import React, { Component } from 'react'
import { View, Text,Button,Map,Image,CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as api from '../../../api/api';
import BackendURL from '../../../api/BackendURL';
import '../index.scss'
let positionIcon="http://localhost:84/mapDatas/images/jdwddw.png";//位置图标
/*********************地址逆解析**********************
 *1.
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
        scale: 16,//缩放级别,取值范围为3-20
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
          enableSatellite: false,//是否开启卫星图
          enableTraffic: false,//是否开启实时路况
        },
      };
  }
  componentDidMount(){
    this.mapCtx =Taro.createMapContext('wxMap');//map实例
    this.getUserLocation();//获取用户位置
  }//e

  //获取用户位置
  getUserLocation(){
    let _self=this;
    //获取小程序用户位置
    Taro.getLocation({
      altitude:"true",//传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      isHighAccuracy: true,//开启高精度定位
      type: "gcj02",//wgs84返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标
      success: (result) => {
        this.userLocation=[result.longitude,result.latitude,result.altitude];
        console.log("用户当前位置:",result);
        _self.mapCtx.moveToLocation({
          longitude:_self.userLocation[0],
          latitude:_self.userLocation[1]
        });
      },
      fail:(result) => {
        //showToast("未获取到GPS位置信息");
      },
    });
  }//e

  /*****************通过GCJ-02经纬度坐标解析对应地址(高德)********************
   *参数:gdX(Number):经度,GCJ-02
   ******gdY(Number):纬度,GCJ-02
   ******callback(function):回调函数
  */
  getAddressFromCoord(gdX,gdY,callback){
    let url=BackendURL.getAddress_gd;
    let param={
      location: `${gdX},${gdY}`,
      output: "json",
      key:BackendURL.gaodeMapKey,
      radius: "100",
      extensions: "base",
    };
    api.get(url,param,function(result){
      if(result.status==200){
        let returnData=result.returnData||{};
        let address=returnData.regeocode?returnData.regeocode.formatted_address:"";
        console.log(`${gdX},${gdY}-`+"地址逆解析:",address);
        if(callback)callback(result);
      }
    });
  }//e

  //点击函数
  clickFun(type){
    let _self=this;
    if(type=="地址逆解析"){
      this.getAddressFromCoord(_self.userLocation[0],_self.userLocation[1]);
    }
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
            //onTap={this.onMapTap.bind(this)}//点击地图时触发
            //onRegionChange={this.onRegionChange.bind(this)}//视野发生变化时触发
            //markers={this.state.markers}//地图标记点
          />
        </View>
        <View style={{position:"absolute",left:"10px",top:"10%"}}>
          <Button size="mini" onClick={this.clickFun.bind(this,"地址逆解析")}>地址逆解析</Button><View></View>
        </View>
      </View>
    )
  }
}
export default taro_map
