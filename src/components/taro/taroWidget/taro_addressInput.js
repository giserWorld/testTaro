import React, { Component } from 'react'
import { View, Text,Button,Map,Image,CoverView,ScrollView, Input} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtIcon,AtInput } from 'taro-ui'
import * as api from '../../../api/api';
import BackendURL from '../../../api/BackendURL';
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
        fontBtn:"chevron-up",//"chevron-up"、"chevron-down"
        searchAddress:"",
        userCurrentAddress:"",//用户当前位置地址
        scrollStyle:{height:"30%"},
        addressList:[],
        currentPosition:null,//当前位置
      };
  }
  componentDidMount(){
    this.mapCtx =Taro.createMapContext('wxMap');//map实例
    this.zoomTouserPosition();
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
  /***********将地图中心移置指定位置***********
  */
  zoomToCenter(lon,lat){
    let _self=this;
    if(!lon&&!lat)return false;
    //将地图中心移置指定位置
    this.mapCtx.moveToLocation({
      longitude:Number(lon),
      latitude:Number(lat)
    });
  }//e


  /*****************地址输入提示********************
   *更新时间:2020.02.04 wxt
   *参数:keyword(String):关键字
   ******callback(function):回调函数
  */
  inputAddressTip(keyword,callback){
    let _self=this;
    let url=BackendURL.inputAddressTip_gd;
    let param={
      keywords:keyword,
      output: "json",
      key:BackendURL.gaodeMapKey,
      location:`${_self.userLocation[0]},${_self.userLocation[1]}`
    };
    api.get(url,param,function(result){
      if(result.status==200){
        let returnData=result.returnData||{};
        let tips=returnData.tips||[];//输入提示信息
        //console.log("地址输入提示:",tips);
        if(callback)callback(tips);
      }
    });
  }//e

  //定位到用户当前位置
  zoomTouserPosition(){
    let _self=this;
    //获取小程序用户位置
    Taro.getLocation({
      altitude:"true",//传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      isHighAccuracy: true,//开启高精度定位
      type: "gcj02",//wgs84返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标
      success: (result) => {
        console.log("用户当前位置:",result);
        _self.userLocation=[result.longitude,result.latitude,result.altitude];
        _self.mapCtx.moveToLocation({
          longitude:_self.userLocation[0],
          latitude:_self.userLocation[1]
        });
        //地址逆解析
        _self.getAddressFromCoord(_self.userLocation[0],_self.userLocation[1],function(result){
          let returnData=result.returnData||{};
          let address=returnData.regeocode?returnData.regeocode.formatted_address:"";
          _self.setState({
            userCurrentAddress:address
          });
        });
      },
      fail:(result) => {
        console.log("未获取到GPS位置信息!");
        //showToast("未获取到GPS位置信息");
      },
    });
  }//e

  //点击收缩按钮
  changeViewSize(){
    let state=null;
    if(this.state.fontBtn==="chevron-up"){
      state={fontBtn:"chevron-down",scrollStyle:{height:"60%"}};
    }
    else{
      state={fontBtn:"chevron-up",scrollStyle:{height:"30%"}};
    }
    this.setState(state);
  }//e
  
  handelChange_form(name,evt){
    let _self=this;
    let key=name || "";
    let value=evt&&evt.target?evt.target.value:evt;//表单值
    let state={};
    if(value==_self.state.searchAddress)return false;
    if(key)state[key]=value;
    if(key)_self.setState(state);
    //console.log(state);
    _self.inputAddressTip(value,(result)=>{
      result.map((item,idx)=>{
        item.address=item.district;
        item.distance=item.distance;
        item.check=item.false;
      });
      _self.setState({addressList:result});
    });
  }//e

  //点击列表选项
  clickItem(item){
    let _self=this;
    console.log("item:",item);
    let newArray=this.state.addressList;
    newArray.map((ele,idx)=>{
      if(ele.id==item.id){
        ele.check=true;
      }
      else{
        ele.check=false;
      }
    });
    //定位中心
    let location=(item.location||item.location.length!=0)?item.location:"";//"104.06568,30.660257"
    _self.zoomToCenter(location.split(",")[0],location.split(",")[1]);
    _self.setState({addressList:newArray,currentPosition:[location.split(",")[0],location.split(",")[1]]});
  }//e
  onFocus_input(){
    this.setState({
      fontBtn:"chevron-down",
      scrollStyle:{height:"60%"}
    });
  }
  onBlur_input(){
    this.setState({
      fontBtn:"chevron-up",
      scrollStyle:{height:"30%"}
    });
  }
  //点击取消按钮
  cancelBtn(){
    this.setState({
      fontBtn:"chevron-up",
      searchAddress:"",
      addressList:[],
      scrollStyle:{height:"30%"},
      currentPosition:null
    });
  }
  //地图按钮   
  mapBtnFun(type){
    let param={};
    if(type=="取消"){
      
    }
    else if(type=="确定"){
      param={
        currentPosition:this.state.currentPosition
      }
    }
    if(this.props.mapBtnFun)this.props.mapBtnFun(type,param);
    console.log("mapBtnFun:",type,param);
  }//e
  mapToHome(){
    let _self=this;
    //将地图中心移置指定位置
    if(!_self.userLocation)return false;
    this.mapCtx.moveToLocation({
      longitude:_self.userLocation[0],
      latitude:_self.userLocation[1]
    });
  }//e

  render () {
    return (
      <View className='wrap taro_map'>
        <View class="wrap mapContainer mapAddress" style={{position:"relative",display:"flex",flexDirection:"column"}}>
          <CoverView className="btnTop">
              <CoverView className="btnToptext" onClick={this.mapBtnFun.bind(this,"取消")}>取消</CoverView>
              <CoverView className="btnToptext" style={{background:"#75D91E"}} onClick={this.mapBtnFun.bind(this,"确定")}>确定</CoverView>
          </CoverView>
          <Map
            ref="wxMap"
            id="wxMap"
            className="wxMap"
            style="flex:1;width:100%"
            //subkey={this.state.subkey}
            setting={this.state.mapSetting}
            scale={this.state.scale}
            longitude={this.state.center[0]||null}
            latitude={this.state.center[1]||null}
            //onTap={this.onMapTap.bind(this)}//点击地图时触发
            //onRegionChange={this.onRegionChange.bind(this)}//视野发生变化时触发
            //markers={this.state.markers}//地图标记点
          >
            <CoverView className="mapHomeWidget" onClick={this.mapToHome.bind(this)}>H</CoverView>
          </Map>
          <View className='coverView-address' style={this.state.scrollStyle}>
            <View className="stretchBtn">
              <AtIcon className="stretchIcon" value={this.state.fontBtn} size="20" color="white" onClick={this.changeViewSize.bind(this)}></AtIcon>
            </View>
            <View className="searchAddress">
              <AtInput type='text' 
                className="addressInput"
                placeholderClass="addressInput-holder"
                value={this.state.searchAddress}
                placeholder='搜索地点'
                onChange={this.handelChange_form.bind(this,"searchAddress")} 
                //onBlur={this.onBlur_input.bind(this)}
                onFocus={this.onFocus_input.bind(this)}
              >
              </AtInput>
              {
                this.state.fontBtn=="chevron-down"?
                <Text style={{color:"blue",marginLeft:".5rem"}} onClick={this.cancelBtn.bind(this)}>取消</Text>
                :null
              }
            </View>
            <View className="currentAddress">
              {/* <AtIcon value='home' size='16' color='#69C41B'></AtIcon> */}
              <Text>当前位置:{this.state.userCurrentAddress}</Text>
            </View>
            <ScrollView scrollY className="addressList">
              {
                this.state.addressList.map((item,idx)=>{
                  return (
                    <View className="addressList-item" key={idx} onClick={this.clickItem.bind(this,item)}>
                      <View className="addressList-item-text">
                        <View className="addressList-item-text1">{item.name||""}</View>
                        <View className="addressList-item-text2">
                          {item.distance?item.distance+"　|　":""}
                          {item.address}
                        </View>
                      </View>
                      <View className="addressList-item-select">
                        {
                          item.check?
                          <AtIcon value='check' size='16' color='green'></AtIcon>
                          :null
                        }
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
export default taro_map
