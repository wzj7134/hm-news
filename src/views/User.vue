<template>
  <div class="hm-user">
    <hm-header>个人中心</hm-header>
    <div class="info">
      <div class="left">
        <img src="../image/微信图片_20200316212626.jpg" alt="" />
      </div>
      <div class="center">
        <span class="iconfont iconxingbienan"></span>
        <span class="name">我昂的</span>
        <p>2019-10-10</p>
      </div>
      <div class="right">
        <span class="iconfont iconjiantou1"></span>
      </div>
      <div></div>
    </div>
    <hm-navbar title="我的关注" content="关注的用户"></hm-navbar>
    <hm-navbar title="我的跟帖" content="跟帖/回复"></hm-navbar>
    <hm-navbar title="我的收藏" content="文章/视频"></hm-navbar>
    <hm-navbar title="设置"></hm-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.hm-user {
  .info {
    height: 100px;
    display: flex;
    border-bottom: 3px solid #ccc;
    align-items: center;
    padding: 0 10px;
    .left {
      width: 70px;
      img {
        width: 70px;
        height: 70px;
        display: block;
        border-radius: 50%;
      }
    }
    .center {
      flex: 1;
      font-size: 16px;
      margin-left: 10px;
      p {
        color: #999;
      }
    }
    .right {
      width: 30px;
      text-align: right;
    }
  }
}
</style>
