// pages/partialService/partialService.js
Page({

  /**
   * Page initial data
   */
  data: {
    idea: "有自己的想法",
    outline: "已经有outline",
    draft: "已经有自己的初稿",
    fullScript: "已经有完整稿"
  },

  toIdea: function() {
    wx.navigateTo({
      url: './idea/idea',
    })
  },

  toOutline: function () {
    wx.navigateTo({
      url: './outline/outline',
    })
  },

  toFullScript: function () {
    wx.navigateTo({
      url: '../otherService/otherService',
    })
  },

  toDraft: function () {
    wx.navigateTo({
      url: './draft/draft',
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