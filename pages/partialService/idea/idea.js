// pages/partialService/idea/idea.js
Page({

  /**
   * Page initial data
   */
  data: {
    motto: "我们给您的辅导意见为：",
    text: "我们推荐您选择先和我们的导师进 \
    行一对一Brainstorm，价格为200RMB/小时，\
    以便我们的导师确认您文书思路的可行度\n\n\
    如果您还有疑问，欢迎咨询Mercury Studio公众号客服"
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