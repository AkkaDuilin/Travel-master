// pages/home/components/navs/navs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icons:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    gotoUp() {
      wx.navigateTo({
        url: '',
      })
    },
    gotoPlace() {
      wx.navigateTo({
        url: '/package2/pages/home/home',
      })
    },

    gotoMap() {
      wx.reLaunch({
        url: '/package1/pages/peonySearch/peonySearch'
      })
    },
    gotoAR() {
      wx.switchTab({
        url: '/pages/main/main',
      })
    },
    onEnterARGame: function () {
      wx.navigateTo({
        url: '/pages/main/main',
      })
    },
  }
})
