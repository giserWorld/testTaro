import React ,{ Component }from 'react';
import { View, Text, Button } from '@tarojs/components';
import { connect } from 'react-redux';

class redux_book extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"redux_book"
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps:",nextProps);
    }//e

    //点击函数
    clickFun(){
        this.props.changeCode("66666");
    }//e
    render(){
        return(
            <View className="wrap redux_book">
              <Text>{this.state.name}</Text><View></View>
              <Text>redux_value:</Text><View></View>
              <Text>{this.props.code}</Text><View></View>
              <Button onClick={this.clickFun.bind(this)}>改变redux值</Button>
            </View>
        )
    }
    componentDidMount(){
        console.log("redux_book:",this);
    }//e
}//e


/*******************reudx状态映射props*****************/
const mapStateToProps=(state)=>{
    return {
      reduxValue:"reduxProps",
      code:state.bookData.code
    }
}//e

/*******************状态分发props*****************/
const mapDispatchToProps=(dispatch)=>{
    return {
        changeCode:(param)=>{dispatch.bookData.changeCode2(param)},
        changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)},
        initRedux:()=>{dispatch.bookData.initRedux()},
    }
}//e
export default connect(mapStateToProps,mapDispatchToProps)(redux_book);
