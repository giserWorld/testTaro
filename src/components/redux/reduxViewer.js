import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import Redux_book from './redux_book';

class reduxViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reduxViewer"
        }
    }
    render(){
        return(
            <View className="wrap reduxViewer">
              <Redux_book name={this.state.name}/>
            </View>
        )
    }
}
export default reduxViewer;