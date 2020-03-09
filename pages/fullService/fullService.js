// pages/fullService/fullService.js
Page({

  /**
   * Page initial data
   */
  data: {
    ukps: "申英文书",
    ps: "申美文书",
    others: "其他国家文书"
  },

  toUS: function () {
    wx.navigateTo({
      url: "./ps/ps"
    })
  },

  toUK: function () {
    wx.navigateTo({
      url: "./ukps/ukps"
    })
  },

  toOthers: function () {
    wx.navigateTo({
      url: './other/other',
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