// pages/post/post-comment/post-comment.js
import { DBPost } from "../../../db/DBPost.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    useKeyboardFlag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId=options.id;
    var postData=new DBPost(postId);
    var comments=postData.getCommentData();
    this.setData({
      comments:comments
    })
    console.log(comments);
  },
  //切换输入模式
  switchInputType:function(event){
    this.setData({
      useKeyboardFlag:!this.data.userKeyboardFlag
    })
  },
  //获取在文本框中输入的字符
  bindCommentInput:function(event){
   var val= event.detail.value;//可以动态的获取用户输入的字符
   this.data.keyboardInputValue=val;
  },
  //预览图片
  previewImg:function(event){
    //获取评论序号
    var commentIdx=event.currentTarget.dataset.commentIdx,
    //获取图片编号
    imgIdx=event.currentTarget.dataset.imgIdx,
    imgs=this.data.comments[commentIdx].content.img;
    wx.previewImage({
      current:imgs[imgIdx],
      urls: imgs//需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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