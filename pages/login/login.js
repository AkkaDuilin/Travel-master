const app = getApp();
Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
    console.log(e);
  },
  //跳转注册页面
  to_register:function(){
      wx.navigateTo({
        url: '../register/register'
      })
  },
  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
    console.log(e);
  },

  // 登录
    login: function () {
      var that = this;
      wx.request({
       url: app.globalData.urlPath +'login?account=' + this.data.phone +'&password='+this.data.password,
        data: {
          account:this.data.phone,
          password:this.data.password
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res);
          if(res.data.id!=0){
          //更新用户登陆状态
          app.globalData.flag=res.data.id;
          //获取用户信息
          app.globalData.nickName=res.data.nickName;
          app.globalData.userPhone = res.data.phoneNumber;
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              wx.switchTab({
                url: '../home/home'
              })
            }
          })
        }
        else
        {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'success',
              duration: 2000
            }),
              wx.switchTab({
                url: '../login/login'
              })
        }
       }
      })
  }
})
