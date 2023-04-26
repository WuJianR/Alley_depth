import {listNav,getProductList} from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    active: 0,
    loading: true,
    isTotal: false,
    navId: "",
    proList: []
  },

  getNavList(){
    listNav().then(res => {
      this.setData({
        navList: res.data,
        navId: res.data[this.data.active]._id
      })
      // 根据id选中标签栏使用文档中的resize方法重新渲染标签栏[解决首次渲染时数据还未获取到导致tab标签的下划线不显示的问题]
      this.getProList()
      this.selectComponent("#myTabs").resize()
    })
  },

  getProList(size=0){
    getProductList({
      navid: this.data.navId,
      limit: 4, 
      size
    }).then(res => {
      let oldData = this.data.proList
      let newData = oldData.concat(res.data)
      this.setData({
        proList: newData
      })
      if(this.data.proList.length === res.total) {
        this.setData({
          isTotal: true,
          loading: false
        })
      }
    })
  },
  onChange(e) {
    let navIndex = e.detail.index
    this.setData({
      proList: [],
      loading: true,
      isTotal: false,
    })
    // const navIndex = e.detail.index
    this.setData({
      active: navIndex,
      navId: this.data.navList[navIndex]._id
    })
    this.getProList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {idx} = options
    if(idx){
        this.setData({
        active: parseInt(idx)
      })
    }
    this.getNavList()
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
    if(this.data.isTotal) return
    this.setData({
      loading: true
    })
    this.getProList(this.data.proList.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})