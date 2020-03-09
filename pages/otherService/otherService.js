// pages/otherService/otherService.js
Page({

  /**
   * Page initial data
   */
  data: {
    info: '我们推荐您选择文书复阅服务\n      \
          价格为160 RMB/篇\n          \
          我们将为您提供最专业的         \
          文书评价诊断服务\n\n     \
          微信搜索：Mercury Studio关注公众号\n联系客服获取更多信息呀~'
  },

  toWeb: function () {
    wx.navigateTo({
      url: '../web/web',
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