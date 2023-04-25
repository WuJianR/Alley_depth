import {getNewsDetail} from "../../api/apis"
import {formatDate, formatNum} from "../../utils/common"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    id: ""
  },

  // 获取详情页数据
  getDetail() {
    getNewsDetail({id:this.data.id}).then(res => {
      res.data.publish_date = formatDate(res.data.publish_date)
      res.data.view_count = formatNum(res.data.view_count)
      // 正则匹配富文本内容 替换p标签(增加class) g全局匹配 i不区分大小写
      // 值得学习
      res.data.content = res.data.content.replace(/<p/gi, "<p class='pstyle'")
      res.data.content = res.data.content.replace(/<img/gi, "<img class='imgstyle'")
      let newData = {}
      Object.assign(newData, res.data)
      this.setData({
        detail: newData
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options可以接收上一个页面传递到这个页面的数据
    // console.log(options);
    this.data.id = options.id
    this.getDetail()
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})