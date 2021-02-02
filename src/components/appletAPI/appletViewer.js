import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';


class appletViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"appletViewer"
        }
    }
    render(){
        return(
            <View className="wrap appletViewer">
              <Text>appletViewer</Text>
            </View>
        )
    }
}
export default appletViewer;