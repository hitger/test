var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp()
Page({
  data: {
    username: '',
    password: ''
  },
  //事件处理函数
  bindViewTab:function(){
    
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLaunch: function () {
    //测试——返回表的前100条数据
    const query = Bmob.Query("Test");//查询名字叫“Test”的数据库
    query.find().then(res => {
      console.log(res)     //打印出查询到数据
    });
  },

  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  // 登录处理
  login: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      Bmob.User.logIn(this.data.username, this.data.password, {
        success: function (user) {
            wx.getStorage({
                key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
                success: function (res) {
                    var Data = JSON.parse(res.data);
                    common.showTip("登录成功,正在跳转", "success", function () {
                        wx.redirectTo({
                            url: '../index/index'
                        })
                    });

                }
            })
        },
        error: function (user, error) {
            console.log(error)
            common.showTip("用户名/密码错误", "loading");
        }
    });
    } 
  }
})
