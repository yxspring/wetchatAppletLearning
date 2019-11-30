// pages/post/post.js
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
    var postList=[
      {
        object: {
          date: 'jan 28 2019',
        },
        title: '小时候的冰棍与雪糕',
        postImg: "../../images/post/post-4.jpg",
        avatar: '../../images/avatar/avatar-5.png',
        content: " 我小时候，我们那个湘南小镇能见到的冰棒只有四个品种:白糖冰棒，绿豆冰棒，糯米冰棒，雪糕冰棒。价格嘛，“白糖”三分钱一根，“绿豆”、“糯米“五分钱一根，“雪糕“最贵，要一毛钱一根。",
        readingNum: 92,
        collectionNum: {
          array: [108],
        },
        commentNum: 7
      },
      {
        object: {
          date: 'Jan 29 2017',
        },
        title: '从童年呼啸而过的火车',
        postImg: "../../images/post/post-5.jpg",
        avatar: '../../images/avatar/avatar-1.png',
        content: "  小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路、火车大多在晚上经过，但也不定是只有在那夜深人静的时候，火车的声音才能从远方传来...",
        readingNum: 92,
        collectionNum: {
          array: [108],
        },
        commentNum: 7
      },
      {
        object: {
          date: 'jan 28 2019',
        },
        title: '小时候的冰棍与雪糕',
        postImg: "../../images/post/post-1.jpg",
        avatar: '../../images/avatar/avatar-3.png',
        content: "  年少时。有几样东西，是春节里必不可少的：烟花、新衣、凉菜、压岁钱、饺子。年分大小年。有的地方是腊月二十三过小年，有的是腊月二十四......",
        readingNum: 92,
        collectionNum: {
          array: [108],
        },
        commentNum: 7
      }
    ];
    this.setData({
      postList:postList
    })
    console.log("页面被加载！");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成！");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面被显示！");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    consloe.log("页面被隐藏！");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面被卸载！");
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