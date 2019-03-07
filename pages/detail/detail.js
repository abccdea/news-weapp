Page({
  data: {
    article: '',
  },

  onLoad: function(options) {
    this.getDetail(options.id);
  },

  getDetail(id) {
    wx.request({
      url: `https://test-miniprogram.com/api/news/detail?id=${id}`,
      method: 'GET',
      success: res => {
        this.setData({
          article: res.data.result
        })
      }
    })
  },

  goback() {
    wx.navigateBack({});
  }
})