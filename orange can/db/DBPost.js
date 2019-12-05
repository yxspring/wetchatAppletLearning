// var DBPost=function(){
//   this.storageKeyName='postList';//所有文章本地缓存存储键值
// }
// //构造函数的  原型链prototype
// DBPost.prototype={
//   // 得到全部文章信息
//   getAllPostData:function(){
//     var res=wx.getStorageSync(this.storageKeyName);
//     if(!res){
//       tes=require("../data/data.js").postList;
//       this.execSetStorageSync(res);
//     }
//     return res;
//   },
//   // 本地缓存 保存/更新
//   execSetStorageSync:function(data){
//     wx.setStorageSync(this.storageKeyName, data);
//   }
// };
// module.exports = {
// DBPost: DBPost
// }
// 使用es6 写类
class DBPost{
  constructor(postId){
    this.storageKeyName='postList';
    this.postId=postId;
  }
  // 获取指定id号的文章数据
  getPostItemById(){
    // 获取所有的文章数据
    var postData=this.getAllPostData();
    var len=postData.length;
    //如果文章的id等于传入的文章postId
    for(var i=0;i<len;i++){
      if(postData[i].postId==parseInt(this.postId)){
        return {
          index:i,
          data:postData[i]
        }
      }
    }
  }

  //得到文章信息
  getAllPostData(){
    var res=wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require("../data/data.js").postList;
      this.initPostList(res);
    }
    return res;
  }
  // 收藏文章
  collect(){
    return this.updatePostData('collect');
  }
  //更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category){
    var itemData=this.getPostItemById(),
    postData=itemData.data,
    allPostData=this.getAllPostData();//获取所有的文章信息
    switch(category){
        case 'collect':
            //处理收藏
            if (!postData.collectionStatus) { // 如果当前文章未被收藏
                postData.collectionNum++;
                postData.collectionStatus=true;
              }else{
                //如果当前文章被收藏
                postData.collectionNum--;
                postData.collectionStatus=false;
              }
              break;
          default:
            break;
    }
    //更新数据库
    allPostData[itemData.index]=postData;
    this.exexSetStorageSync(allPostData);
    return postData;
  }
  //保存或者更新缓存数据
  exexSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName, data);
  }
};
export {DBPost}
