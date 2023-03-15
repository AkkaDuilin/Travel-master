// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {
      
    },
    motto: 'Hello World',
    // orderItems
    orderItems: [{
      typeId: 2,
      name: '待付款',
      url: 'bill',
      imageurl: "../../resources/images/pay.png",
    },
    {
      typeId: 3,
      name: '待使用',
      url: 'bill',
      imageurl: "../../resources/images/unuse.png",
    },
    {
      typeId: 4,
      name: '已使用',
      url: 'bill',
      imageurl: "../../resources/images/use.png",
    },
    {
      typeId: 5,
      name: '待评价',
      url: 'bill',
      imageurl: "../../resources/images/uncomment.png",

    }
    ],
  },
  //事件处理函数
  toOrder: function (event) {
    if(app.globalData.flag==1)//已经授权登陆
    {
      console.log(event);
      var typeid = event.currentTarget.dataset.typeid;
      wx.navigateTo({
        url: '../list/list?typeid=' + typeid
      })
    }
    else//未授权登陆
    {
      wx.showModal({
        title: '请先授权',
        content: '您还未授权，请先进行授权登陆',
        showCancel: true,
        cancelText: '拒绝',
        cancelColor: 'red',
        confirmText: '同意',
        confirmColor: 'green',
        success: function (res) {
          if (res.confirm)//同意授权
          {
            wx.navigateTo({
              url: '../authorize/authorize'
            })
          }
        }
      })
    }
  },
  onLoad: function () {
  },
  onShow: function () {
    var that = this;
    if (app.globalData.flag == 0) {
      wx.showModal({
        title: '请先授权',
        content: '您还未授权，请先进行授权登陆',
        showCancel: true,
        cancelText: '拒绝',
        cancelColor: 'red',
        confirmText: '同意',
        confirmColor: 'green',
        success: function (res) {
          if (res.confirm)//同意授权
          {
            wx.navigateTo({
              url: '../authorize/authorize'
            })
          }
        }
      })
    }
    else {
      app.getUserInfo(function (userInfo) {
        //更新数据
        that.setData({
          userInfo: userInfo
        })
      })
    }
  },
  manageraddress:function(){
    if(app.globalData.flag==1)
    {
      wx.navigateTo({
        url: '../managerddress/managerddress',
        success: function (res) { },
      })
    }
    else
    {
      wx.showModal({
        title: '请先授权登陆',
        content: '您还未授权登陆，请先授权.拒绝授权将无法使用该小程序',
        showCancel: true,
        cancelText: '拒绝',
        cancelColor: 'red',
        confirmText: '同意',
        confirmColor: 'green',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../authorize/authorize',
            })
          }
        },
      })
    }
  },
  show_collection:function(){
    if(app.globalData.flag==0)
    {
      wx.showModal({
        title: '请先授权登陆',
        content: '您还未授权登陆，请先授权.拒绝授权将无法使用该小程序',
        showCancel: true,
        cancelText: '拒绝',
        cancelColor: 'red',
        confirmText: '同意',
        confirmColor: 'green',
        success: function(res) {
          if(res.confirm)
          {
            wx.navigateTo({
              url: '../authorize/authorize',
            })
          }
        },
      })
    }
    else
    {
      wx.navigateTo({
        url: '../collection/collection'
      })
    }
  },
  //跳转用户得所有订单页面
  allOrders:function(){
    var typeid=1;//所有订单
    if(app.globalData.flag==1)
    {
      wx.navigateTo({
        url: '../list/list?typeid=' + typeid,
      })
    }
  else
  {
    wx.showModal({
      title: '还未授权，请先授权',
      content: '拒绝授权将无法使用该小程序',
      showCancel: true,
      cancelText: '拒绝',
      cancelColor: 'red',
      confirmText: '同意',
      confirmColor: 'green',
      success: function(res) {
        wx.navigateTo({
          url: '../authorize/authorize'
        })
      },
    })
  }
  }
})