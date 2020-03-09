// pages/partialService/draft/chinese/chinese.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: "请选择您是否需要对文章先进行评估：",
    array: ['先进行评估', '无需评估，直接修改', '未选择'],
    priceArray: ['我们推荐您先和我们的导师进行Brainstorm环节，价格为200RMB/小时，如有需要请联系公众号客服：Mercury Studio\n点击下方了解更多', 
    '我们推荐您选择\n○语法句法措辞修改：300RMB/篇\n○框架/结构/逻辑精修：450RMB/篇', '您还未选择服务内容'],
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