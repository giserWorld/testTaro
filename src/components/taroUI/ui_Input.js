import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'
/*********************ui_Input**********************
 *1.用于接受单行文本，支持文本、密码、数字、手机号码、银行卡等类型的输入
 *2.用户可控制是否显示输入框标题，是否出现清除按钮，输入框状态，还可以自定义 Input 组件的右边栏，实现自定义按钮、验证码输入框等
 *3.input元素的双向绑定
*/
export default class index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name:"ui-index",
        inputValue:"ddddd"
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
        <AtInput
          name='value'//输入框的唯一标识，有传入点击 title 会聚焦输入框
          title='input标题'//输入框左侧标题，若传入为空，则不显示标题
          type='text'//输入框类型
          placeholder='标准五个字'
          value={this.state.inputValue}
          clear={true}
          onChange={this.handelChange_form.bind(this,"inputValue")}
        />
        <View></View>
        <Text>{this.state.inputValue}</Text>
      </View>
    )
  }
}//e
