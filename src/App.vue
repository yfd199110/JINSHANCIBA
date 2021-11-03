<template>
  <div id="app">
    <!-- 左侧导航栏 -->
    <div id="top_nav">
      <p id="app_title">金山词霸</p>
      <!-- 用户登录头像 -->
      <div class="login_icon">
        <router-link to='userCenter'><span class="iconfont" title="点击查看个人中心">&#xe633;</span></router-link>
        <p id="login_userCenter">登录</p>
      </div>
      <!-- 导航部分 -->
      <nav>
        <router-link to='/dictionary'><span class="iconfont">&#xee21;</span>词典</router-link>
        <router-link to='/translate'><span class="iconfont">&#xe769;</span>翻译</router-link>
        <router-link to='/new_words'><span class="iconfont">&#xe77f;</span>生词本</router-link>
        <router-link to='/remenber_words'><span class="iconfont">&#xe7a0;</span>背单词</router-link>
        <router-link to='/read'><span class="iconfont">&#xe624;</span>阅读</router-link>
        <router-link to='/listen_test'><span class="iconfont">&#xe625;</span>听力</router-link>
        <router-link to='/books_shop'><span class="iconfont">&#xe608;</span>书城</router-link>
        <router-link to='/vip_course'><span class="iconfont">&#xe607;</span>精品课</router-link>
      </nav>
      <!-- 功能菜单区 -->
      <div class="form_container">
        <form action="">
          <label for="quci"><input type="checkbox" id="quci">取词</label>
          <label for="huaci"><input type="checkbox" id="huaci">划译</label>
        </form>
      </div>
    </div>
    <!-- 右上功能区 -->
    <div class="settingsMenu">
      <span class="iconfont" title="反馈">&#xe656;</span>
      <span class="iconfont" title="设置">&#xe68f;</span>
      <span class="iconfont" title="最小化">&#xe650;</span>
      <span class="iconfont" title="关闭">&#xe629;</span>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
  @import '~@/assets/iconfont/iconfont_app/iconfont.css';
  *
    margin 0
    padding 0
    box-sizing border-box
    text-decoration none
  // 整体布局
  #top_nav
    // 登陆中心图标
    #app_title
      font-size 14px
    font-size 16px
    background-color #0984e3
    height: 100vh
    width: 10vw
    min-width 150px
    float left
    color white
    padding 10px
    // 用户头像
    .login_icon
      margin-top 25px
      text-align center
      span.iconfont
        cursor pointer
        font-size 25px
        border 1px solid gray
        border-radius 50%
        padding 10px
        background-color white
        color gray
        box-shadow 0 0 5px gray
        &:hover
          box-shadow 0 0 5px lightgray
      p#login_userCenter
        margin-top 15px
        font-size 14px
        cursor pointer
    // 功能菜单部分
    nav
      margin-top 7px
      display flex
      flex-direction column
      a
        text-decoration none
        color white
        display block
        padding 8px
        &:hover
          background-color rgba(255, 250, 250, 0.4)
        span
          margin-right 10px
      .router-link-active
        background-color rgba(255, 250, 250, 0.4)
        position relative
        &::before
          content: ''
          position: absolute
          left -10px
          top 0px
          width 10px
          height: 100%
          background-color: rgb(255, 235, 205)

    // 表单部分
    .form_container
      position fixed
      bottom 40px
      width: clac(10vw - 20px)
      min-width 130px
      form
        display: flex
        justify-content: space-around
  // 功能菜单区功能
  .settingsMenu
    height 40px
    text-align right
    background-color #0984e3
    span
      font-size 24px
      margin-left 10px
      line-height 40px
      cursor pointer
      padding 5px
      position relative
      &:last-child
        margin-right 10px
    span:hover
        background-color rgba(190, 190, 190, 0.4)
        top 1px
</style>
