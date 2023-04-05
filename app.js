//app.js
var commonUtils = require('common/commonUtils.js');
var httpRequest = require('common/request.js');
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setEnableDebug({
      enableDebug: true
    })
    wx.getSystemInfo({
      success: function (res) {
        var sdkVersion = res.SDKVersion;
        var versionCompare = commonUtils.compareVersion(sdkVersion, '1.9.90');
        if (versionCompare == -1) {
          that.globalData.isVersionHigh = false
        } else {
          that.globalData.isVersionHigh = true
        }
      },
    });
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    that.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuWidth =  menuButtonInfo.width;
    
    this.loginWx();
  },
  loginWx: function () {
    var that = this;
    // 登录
    wx.login({
      success: res => {
        that.globalData.codeId = res.code;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData: {
    codeId: '',
    // url: 'http://127.0.0.1:5000',
    url: 'https://wx.shpity.com',
    // url: 'https://139.224.15.44/',
    // url: 'https://hunshuimoyu.picp.vip',//服务器地址
    peonyResultInfo: {},//从服务器获取的牡丹花信息
    uploadImg: '',
    peonyLocation: '', //存储用户地理位置信息
    desciption: "", //用户地理信息简短描述
    latitude: '', //用户所在经纬度
    longitude: '',
    userInfo: null,
    isVersionHigh: false,
    likeList: [
      {
        title: "南京太古可口可乐博物馆",
        imgUrl: "/res/article_img/coca.png"
      },
      {
        title: "风禧文化艺术中心",
        imgUrl: "/res/article_img/fengxi.jpg"
      },
      {
        title: "万三酒庄文创工厂",
        imgUrl: "/res/article_img/wansan.jpg"
      },
      {
        title: "镇江中国醋文化博物馆",
        imgUrl: "/res/article_img/zhenjOut.jpeg"
      },
      
    ],
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuWidth: 0, // 胶囊宽度
  },
  func: {
    httpRequest: httpRequest.httpRequest,
    dateFormat: commonUtils.dateFormat,
    floatAdd: commonUtils.floatAdd,
    floatSub: commonUtils.floatSub,
    floatDiv: commonUtils.floatDiv,
    floatMul: commonUtils.floatMul,
    compareVersion: commonUtils.compareVersion,
    // loginWx: this.loginWx,
  }
})