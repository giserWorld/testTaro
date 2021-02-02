export default {
  pages: [
    'pages/reduxPage/index',
    'pages/taroPage/index',
    'pages/taroUIPage/index',
    'pages/appletPage/index',
  ],
  entryPagePath:"pages/taroPage/index",//指定小程序的默认启动路径(首页),默认为pages列表的第一项
  tabBar: {
    color: "#999999",//tab 上的文字默认颜色，仅支持十六进制颜色
    selectedColor: "#42BE6C",//tab 上的文字选中时的颜色，仅支持十六进制颜色
    backgroundColor: "white",//tab 的背景色，仅支持十六进制颜色
    list: [//tab 的列表,最少2个、最多5个tab
      {
        text: "redux",//tab上按钮文字
        pagePath: "pages/reduxPage/index",//页面路径，必须在 pages 中先定义
        selectedIconPath: "./assets/images/tabbar/home-selected.png",//选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片
        iconPath: "./assets/images/tabbar/home.png",//图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片
      },
      {
        text: "targo",
        pagePath: "pages/taroPage/index",
        selectedIconPath: "./assets/images/tabbar/user-selected.png",
        iconPath: "./assets/images/tabbar/user.png",
      },
      {
        text: "targoUI",
        pagePath: "pages/taroUIPage/index",
        selectedIconPath: "./assets/images/tabbar/user-selected.png",
        iconPath: "./assets/images/tabbar/user.png",
      },
      {
        text: "applet",
        pagePath: "pages/appletPage/index",
        selectedIconPath: "./assets/images/tabbar/user-selected.png",
        iconPath: "./assets/images/tabbar/user.png",
      },
    ],
  },
  permission: {
    'scope.userLocation': {
      desc: '微信小程序将获取您的位置信息'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
