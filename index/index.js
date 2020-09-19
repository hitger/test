var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      '/images/C.jpg',
      '/images/D.jpg',
      '/images/E.jpg',
      '/images/F.jpg',
      '/images/G.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    contentItems:[
      '',
      '',
      '',
      '',
      '',
    ]
  },
  projects :function(event){
    wx.navigateTo({
      url: '/pages/projects/projects',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userName==null){
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }
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
    
  }
})