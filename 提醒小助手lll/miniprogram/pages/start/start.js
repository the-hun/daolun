const db = wx.cloud.database({});
const cont = db.collection('river_data');

Page({
  data: {
    ne: [],  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
  },
  navigate: function () {
    wx.navigateTo({
      url: '../wifi_station/tianqi/tianqi',
    })
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../notes/notes',
    })
  },
  alarm: function () {
    wx.navigateTo({
      url: '../alarm/alarm',
    })
  },
  niubi:function(){
    getCurrentPages()[getCurrentPages().length - 1].onLoad()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //1、引用数据库   
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'shuiye-ma1bm'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('user').get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          ne: res.data
        })
      }
    })
  },
})
