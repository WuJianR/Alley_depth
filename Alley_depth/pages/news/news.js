// pages/news/news.js
import {listAllNews} from "../../api/apis"
import {formatNum, formatDate} from "../../utils/common"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [],
    loading: true,
    isTotal: false
  },

  // 获取新闻列表
  getNewsList(size=0) {
    listAllNews({
      limit: 8,
      size
		}).then(res => {
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatDate(item.publish_date)
      });
      let oldData = this.data.newsList
      // 数组合并,等同于[...oldData, ...res.data]
      let newData = oldData.concat(res.data)
      this.setData({
        newsList: newData
      })
      if(this.data.newsList.length === res.total){
        this.setData({
          isTotal: true,
          loading: false
        })
      }
    })
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewsList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 巧妙的上拉触底事件，需要注意许多细节，值得学习
    this.setData({
      newsList: [],
      isTotal: false,
      loading: false
    })
    this.getNewsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 巧妙的下拉刷新页面，需要注意许多细节，值得学习
    if(this.data.isTotal) return
    this.setData({
      loading: true
    })
    this.getNewsList(this.data.newsList.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})