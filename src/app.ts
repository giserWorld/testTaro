import { Component } from 'react'
import 'taro-ui/dist/style/index.scss';//全局引入taro-ui样式
import './common.scss';
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
