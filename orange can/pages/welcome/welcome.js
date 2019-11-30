Page({
  data:{

  },
  onHide:function(){
      console.log("pages onHide!");
  },
  onUnload:function(){
    console.log("pages onUnload!");
  },
  onTapJump:function(event){
    // 使用navigationTo使welcome页面 执行的是onhide 并不会onunload
    wx.navigateTo({ 
    // wx.redirectTo({  使用redirectTo页面会执行onUnload方法使的页面消除
      url: '../post/post',
      success: function () {
        console.log("jump success !");
      },
      fail:function(){
        console.log("jump fail !");
      },
      complete:function(){
        console.log("jump complete!");
      }
    })
  }
})