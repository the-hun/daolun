App({
  onLaunch() {
    wx.cloud.init({
      traceUser: true,
    })

  },
  onShow: function () {
  },
  onHide: function () {
  },
  globalData:{
    username:'',
    content:"",

  }
})