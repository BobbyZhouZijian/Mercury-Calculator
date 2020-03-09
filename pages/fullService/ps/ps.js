// pages/fullService/ps/ps.js
Page({

  /**
   * Page initial data
   */

  data: {
    ranking: "根据学校排名",
    supplementary: "根据补充文书类型",
  },

  toRanking: function () {
    wx.navigateTo({
      url: "./ranking/ranking"
    })
  },

  toSupplementary: function () {
    wx.navigateTo({
      url: "./supplementaryEssays/supplement"
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