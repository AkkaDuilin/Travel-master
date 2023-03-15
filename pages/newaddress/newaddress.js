//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tapCurrent:0,
  region: ['湖北省', '武汉市', '洪山区'],
  moren:-1//moren=1表示该地址为默认地址
  },
  
  onLoad: function () {
   
  },
  backAddress:function(){
    wx.navigateTo({
      url:'/pages/manageddress/manageddress'
    })
  },
  discount:function(e){
    var current=e.currentTarget.dataset.current;
    this.setData({
      tapCurrent:current
    })
  },
  bindDateChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  switch2Change: function (e){
      this.setData({
        moren:-1*this.data.moren
      })
  },
  addAddress:function(options)
  {
      console.log(options.detail.value);
      console.log(this.data.moren);
      wx.request({
        url: app.globalData.urlPath +'addAddress',
        data: {
          address: options.detail.value.address,
          phonenumber: options.detail.value.phonenumber,
          username: options.detail.value.username,
          area: options.detail.value.area,
          openid:app.globalData.openid,
          moren: this.data.moren,
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res);
          wx.navigateTo({
            url: '../managerddress/managerddress'
          })
        },
      })
  }
})
