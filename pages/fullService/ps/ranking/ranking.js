// pages/fullService/ps/ranking/ranking.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: "请选择您的目标大学排名范围",
    array: ['排名前30', '排名30-50', '排名50以后', '未选择'],
    priceArray: ['PS: 8000-1000 RMB', '8000 RMB', '6000-8000 RMB，视情况而定', '您还未选择排名范围'],
    index: 3,
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