// miniprogram/pages/notes/notes.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

//添加

  res: function (e) {

    
    
    getApp().globalData.username = e.detail.value.username,
      getApp().globalData.content = e.detail.value.content;
      const db = wx.cloud.database()
    db.collection('user').add({

      data: {
        
        username: e.detail.value.username,
        content:e.detail.value.content
         
      },

      success: res => {

        // 在返回结果中会包含新创建的记录的 _id

        this.setData({

          username: e.detail.value.username ,
          content:e.detail.value.content,
        })

        wx.showToast({
          title: '新增记录成功',
        })

        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)

      },

      fail: err => {

        wx.showToast({

          icon: 'none',

          title: '新增记录失败'

        })

        console.error('[数据库] [新增记录] 失败：', err)

      }

    })

  },

})