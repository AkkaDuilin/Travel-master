// pages/peonySearch/peonySearch.js
const app = getApp();
var utils = require('../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    judgeNetWork: true, //判断有无网络状态
    searchList: [],
    searchResult: [],//存储搜索框查询到的数据
    isJudge: true,
    pageIndex: 0,
    pageSize: 6,
    hasMore: true,
    searchVal: '' //搜索框内容
  },
  // 1.3 关键字查询数据
  loadMore: function() {
    var that = this;
    if (!this.data.hasMore){
      wx.showToast({
        title: '暂无更多',
        image: '../../images/donotfind.png',
        duration: 1000
      });
      return;
    } 
    wx.request({
      url: app.globalData.url + '/query_all_information',
      data: {
        pageNum: ++that.data.pageIndex,//每执行一次下拉获取更多操作就会让页数+1
        pageSize: that.data.pageSize
      },
      success: (res) => {
        // console.log(res);
        if (res.data.code == "1000") {
          var count = res.data.data.total;
          var flag = that.data.pageIndex * that.data.pageSize < count;
          //格式化时间
          res.data.data.list.map((el, index) => {
            el.createTime = utils.getTime(el.createTime);
            // console.log(el.content)
            el.text = this.matchReg(el.content);
            // console.log(el.text)

          })
          //还要设置是否获取到所有数据
          var newList = this.data.searchList.concat(res.data.data.list);
          that.setData({
            identificationRecordNum: res.data.data.total,
            searchList: newList,
            hasMore: flag,
          });
          flag = that.data.pageIndex * that.data.pageSize < this.data.identificationRecordNum;
          that.setData(
            {
              hasMore: flag
            }
          )
        } else {
          wx.showLoading({
            title: '正在加载',
          })
          setTimeout(function() {
            wx.hideLoading()
          }, 2000)
        }
      },
      fail: function(err) {
        wx.showToast({
          title: '服务器错误',
          duration: 1000,
          image: '../../images/donotfind.png'
        })
        setTimeout(function() {
          wx.hideToast()
        }, 1000)
      }
    })
  },
  // 搜索框查询
  searchBtn: function() {
    var that = this;
    wx.request({
      url: app.globalData.url + '/search_news_by_key_word',
      data: {
        name: that.data.searchVal,
        userId: app.globalData.userInfo.nickName
      },
      success: function(res) {
        // console.log(res);
        if (res.data.code == "1000" && res.data.data.length) {
          //格式化时间
          res.data.data.map((el, index) => {
            el.createTime = utils.getTime(el.createTime);
            console.log(el.createTime);
          })
          //还要设置是否获取到所有数据
          that.setData({
            searchResult: res.data.data
          })
        } else {
          wx.showToast({
            title: '暂无数据',
            image: '../../images/donotfind.png',
            duration: 1000
          })
        }
      },
      fail: function(err) {
        wx.showToast({
          title: '服务器错误',
          duration: 1000,
          image: '../../images/donotfind.png'
        })
        setTimeout(function() {
          wx.hideToast()
        }, 1000)
      }
    })
  },
  // 点击取消
  cancelSearch() {
    this.setData({
      searchResult: [],
      isJudge: true,
      searchVal: ''
    })
  },
  // 文本框处理 失去焦点
  blurSearch(e) {
    this.setData({
      searchVal: e.detail.value,
      isJudge: false
    })
    this.searchBtn();
  },
  //键盘输入时触发
  inputVal(e) {},
  //利用正则截取字符串
  matchReg: function matchReg(str) {
    let reg = /<\/?.+?\/?>/g; //把所有的
    var a = str.replace(reg, '')
    return a.replace(/&nbsp;/ig, "");
  },
  // 点击图片
  detailsPeony(e) {
    var detailsId = e.currentTarget.dataset.template;
    wx.navigateTo({
      url: '../peonyNews/peonyNews?id=' + detailsId
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  // 判断网络状态
  refreshBtn() {
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        //console.log(res);
        if (res.networkType == "none") {
          that.setData({
            judgeNetWork: false
          })
        } else {
          that.setData({
            judgeNetWork: true
          })
          that.onShow();
        }
      },
    })

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        if (res.networkType == "none") {
          that.setData({
            judgeNetWork: false
          })
        } else {
          that.loadMore();
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.setData({
      searchList: [],
      searchResult: [],
      pageIndex: 0,
      hasMore: true,
    });
    // this.onLoad();
    this.loadMore();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("触发了上拉触底事件的处理函数")
    this.loadMore();
    console.log("onReachBottom ++  底部了 ")
  },
  errorFunction(e) {
    if (e.type == "error") {
      var errorImgIndex = e.target.dataset.errorimg //获取错误图片循环的下标
      var imgList = this.data.searchList                 //将图片列表数据绑定到变量
      imgList[errorImgIndex].coverImageUrl = '../../images/defult.png'
      this.setData({
        peonyList: imgList
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '浑水摸鱼-识秦通'
    }
  }
})