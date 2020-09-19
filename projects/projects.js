Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      '/images/J.jpg',
      '/images/K.jpg',
      '/images/L.jpg',
      '/images/M.jpg'
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
  oneReport :function(event){
    wx.navigateTo({
      url: '/pages/report/report',
    })
  },
  theCatch :function(event){
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var titleName="这里是项目名称";
    var number=111111;
    var initiator="这里是筹款人姓名";
    var people=22222;
    var appliesMoney=100000;
    var acountMoney=33333;
    var residueMoney=20000;
    var matter="这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容这里是筹款内容";
    var commentContent="这里是评论内容这里是评论内容"
    this.setData(
      {
        titleName:titleName,
        number:number,
        initiator:initiator,
        people:people,
        appliesMoney:appliesMoney,
        acountMoney:acountMoney,
        residueMoney:residueMoney,
        matter:matter,
        commentContent:commentContent,
      }
    )
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