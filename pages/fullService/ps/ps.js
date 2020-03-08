// pages/fullService/ps/ps.js
Page({

  /**
   * Page initial data
   */

  data: {
    title: "请选择您的目标大学排名范围",
    array: ['排名前30', '排名30-50', '排名50以后', '未选择'],
    priceArray: ['PS: 8000-1000', '8000', '6000-8000，视情况而定', '您还未选择排名范围'],
    index: 3,
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  suggestion: function() {
    if (this.index == 0) {
      return "2000";
    } else if (this.index == 1) {
      return "1000";
    } else if (this.index == 2) {
      return "0";
    }
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