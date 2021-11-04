<template>
  <div class="container">
    <div class="topSection">
      <!-- 用户头像 -->
      <img src="../assets/image/userCenter_img/ex5.jpg" alt="" wdith="150px" height="150px">
      <!-- 用户累计使用信息 -->
      <div class="userHistoryInfo">
        <div><span>累计查词</span><span>45</span></div>
        <div><span>启动次数</span><span>14</span></div>
        <div><span>生词本</span><span>2</span></div>
        <div><span>积分</span><span>509</span></div>
      </div>
    </div>
    <ul class="bottomSection">
      <li>
        <span class="item">昵称</span>
        <span>krysfan</span>
      </li>
      <li>
        <span class="item">性别</span>
        <!-- 男性图标 -->
        <span></span>
        <span>男</span>
      </li>
      <li>
        <span class="item">生日</span>
        <span>1996/09/12</span>
      </li>
      <li>
        <span class="item">职业</span>
        <!-- 学生图标 -->
        <span></span><span></span>
        <!-- 老师图标 -->
        <span></span><span></span>
        <!-- 白领图标 -->
        <span></span><span></span>
        <!-- 其他图标 -->
        <span></span><span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserCenter_userInfo_login'
}
</script>

<style lang="stylus" scoped>
  // 此组件的整体样式
  .container
    background-color: green
</style>
