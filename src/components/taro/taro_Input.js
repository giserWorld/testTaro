import React, { Component } from 'react'
import { View, Text,Button,Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

/*********************taro_Input**********************
 *1.输入框。该组件是原生组件
 *2.input元素的双向绑定
*/
class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"taro_Input",
        inputValue:"66",
      };
  }

  /*******************处理值改变函数(表单元素)******************
  *更新时间:2020.10.12
  *参数:name(String):表单元素绑定的状态属性
  ******evt(Event):"onChange"触发的事件对象,可能为event或表单值
  *注解:
  *1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
  *2.该方法支持的表单元素:"input"、"select"、"textarea"、"radio"、"InputNumber"
  *3.不要使用箭头函数
  */
  handelChange_form(name,evt){
    let _self=this;
    let key=name || "";
    let value=evt&&evt.target?evt.target.value:evt;//表单值
    let state={};
    if(key)state[key]=value;
    if(key)_self.setState(state);
    //console.log(state);
  }//e

  render () {
    return (
      <View className='testpage'>
        <Text className="my-h2">{this.state.name}</Text><View></View>
        <Input type='text' 
          style={{border:"1px solid red;"}}
          value={this.state.inputValue}
          placeholder='将会获取焦点'
          onInput={this.handelChange_form.bind(this,"inputValue")} 
        />
        <View></View>
        <Text>{this.state.inputValue}</Text>
      </View>
    )
  }
}
export default index
