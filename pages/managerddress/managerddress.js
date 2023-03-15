//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tapCurrent:0,
  address:[]
  },
  
  onLoad: function () {
   
  },
  onShow:function(){
    var that=this;
    wx.request({
      url: app.globalData.urlPath +'showAddress',
      data:{
        openid:app.globalData.openid
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        that.setData({
          address:res.data
        })
      },
    })
  },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  discount:function(e){
    var current=e.currentTarget.dataset.current;
    this.setData({
      tapCurrent:current
    })
  },
  newAddress:function(){
    wx.navigateTo({
      url:'/pages/perspnal/perspnal'
    })
  },
  delete_address:function(options){
    var id = options.currentTarget.dataset.addressid;
    console.log(id);
  }
})
