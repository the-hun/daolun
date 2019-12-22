
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    tmp: [],
    tmp1: [],
    tmp2: [],
    wd: [],
    pm: []
  },


  onLoad: function () {
    var that = this;
    var theBaiDuAPPkey = "pWIUUAPPx2vuDWXwRlXqZQxkWLl2Nabl" //百度的AK, 此处要替换为你自己的APPKey

    //调用百度天气API
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API
      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        that.setData({
          tmp: res.data.results[0].index[0].des,
          tmp1: res.data.results[0].index[2].des,
          tmp2: res.data.results[0].index[3].des,
          wd: res.data.results[0].weather_data[0].date,
          pm: res.data.results[0].pm25,
        })
      },


      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },
})