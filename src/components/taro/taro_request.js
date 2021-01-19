import React, { Component } from 'react'
import * as api from '../../api/api';
import { View, Text,Button } from '@tarojs/components'
import './index.scss'

/*********************taro_request**********************
 *1.发起 HTTPS 网络请求
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro-index" 
      };
  }
  //点击回调函数
  clickFun=(type)=>{
    if(type==="get"){
      let url="http://localhost:84/mapDatas/geojson/53.geojson";
      let param={
        userid:"1",
      }
      api.get(url,param,function(result){
        console.log("get请求:",result);
      });
    }
    else if(type==="post"){
      let url="http://localhost:84/mapDatas/geojson/53.geojson";
      let param={
        userid:"1",
      }
      api.post(url,param,function(result){
        console.log("post请求:",result);
      });
    }
  }//e
  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text>
        <Button onClick={()=>{this.clickFun("get")}}>get请求</Button><View/>
        <Button onClick={()=>{this.clickFun("post")}}>post请求</Button><View/>
      </View>
    )
  }
}
export default index
