// pages/post/post.js
// var dataObject=require("../../data/data.js");
var DBPost=require("../../db/DBPost.js").DBPost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbPost=new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    })
    console.log("post onload ！");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("post onread！");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("post show！");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    consloe.log("post onhide！");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("post unload！");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})