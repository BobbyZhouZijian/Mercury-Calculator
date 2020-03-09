// pages/fullService/other/other.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: "请选择您的目标国家：",
    array: ['日本', '新加坡', '香港', '加拿大', '法国', '未选择'],
    priceArray: ['1500-3000 RMB/篇', '2000 RMB/篇', '4000 RMB/篇',
                   '○ PS：4000/篇\n\n○ Supplemental Essay: \n1500-2000 RMB/篇', '4000 RMB/篇', '您还未选择排名范围'],
    index: 5,
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  toMenu: function () {
    wx.navigateTo({
      url: '',
    })
  },

  toWeb: function () {
    wx.navigateTo({
      url: '../../web/web',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})