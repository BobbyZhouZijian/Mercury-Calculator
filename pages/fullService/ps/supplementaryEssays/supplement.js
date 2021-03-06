// pages/fullService/supplementaryEssays/supplement.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: "请选择你想要的补充文书类型",
    array: ['Why School Essay (+ Reasearch)', 'Supplemental Essay', '未选择'],
    priceArray: ['200-400 RMB/小时', '1000-3000 RMB/篇', '您还未选择文书类型'],
    index: 2,
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  toWeb: function () {
    wx.navigateTo({
      url: '../../../web/web',
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