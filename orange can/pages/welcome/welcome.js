Page({
  data:{
    
  },
  onLoad:function(options){
    console.log("welcome onload!");
  },
  onShow:function(){
    console.log("welcome show!");
  },
  onReady:function(){
    console.log("welcome ready!");
  },
  onHide:function(){
      console.log("welcome onHide!");
  },
  onUnload:function(){
    console.log("welcome onUnload!");
  },
  onTapJump:function(event){
    // 使用navigationTo使welcome页面 执行的是onhide 并不会onunload
    wx.navigateTo({ 
    // wx.redirectTo({  使用redirectTo页面会执行onUnload方法使的页面消除
      url: '../post/post',
      success: function () {
        console.log("welcome jump post success !");
      },
      fail:function(){
        console.log("welcome jump post fail !");
      },
      complete:function(){
        console.log("welcome jump post  complete!");
      }
    })
  }
})