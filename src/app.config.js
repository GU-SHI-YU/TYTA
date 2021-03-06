export default {

    pages: [
      'pages/index/index',
      'pages/my_order/my_order',
      'pages/my_info/my_info',
      'pages/publish/publish',
      'pages/publish_kd/publish_kd',
      'pages/publish_wm/publish_wm',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          iconPath: 'assets/images/me.png',
          selectedIconPath: 'assets/images/home_page_n.png',
          pagePath: 'pages/index/index',
          text: '首页',
        },
        {
          iconPath: 'assets/images/me.png',
          selectedIconPath: 'assets/images/my_order.png',
          pagePath: 'pages/my_order/my_order',
          text: 'my_order',
        },
        {
        iconPath: 'assets/images/me.png',
        selectedIconPath: 'assets/images/my_y.png',
        pagePath: 'pages/my_info/my_info',
        text: 'my_info',
        },
     ],
      color: '#323232',
      selectedColor: '#C93E3E'
    }

}
