<template>
  <div id="app">
    <div id="top_nav">
      <p>金山词霸</p>
      <!-- 用户登录头像 -->
      <div class="login_icon">
        <span>image</span>
        <p>登录</p>
      </div>
      <!-- 导航部分 -->
      <nav>
        <router-link to='/dictionary'><span></span>词典</router-link>
        <router-link to='/translate'><span></span>翻译</router-link>
        <router-link to='/new_words'><span></span>生词本</router-link>
        <router-link to='/remenber_words'><span></span>背单词</router-link>
        <router-link to='/read'><span></span>阅读</router-link>
        <router-link to='/listen_test'><span></span>听力</router-link>
        <router-link to='/books_shop'><span></span>书城</router-link>
        <router-link to='/vip_course'><span></span>精品课</router-link>
      </nav>
      <!-- 功能菜单区 -->
      <div class="form_container">
        <form action="">
          <label for=""><input type="checkbox">取词</label>
          <label for=""><input type="checkbox">划译</label>
        </form>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box

// 整体布局
#top_nav
  background-color #0984e3
  height: 100vh
  width: 10vw
  min-width 150px
  float left
  color white
  margin-right 20px
  padding 10px
  // 用户头像
  .login_icon
    text-align center
  // 功能菜单部分
  nav
    display flex
    flex-direction column
  a
    text-decoration none
    color white
    display block
    margin 10px 0 10px 20%
  .router-link-active
    color white

  // 表单部分
  .form_container
    form
      background-color: red
      label
        display: block
        width 50%
        float: left
        text-align: center
        input
          margin-right 5px
          width 20px
          height 20px
          vertical-align: middle
          margin-bottom 2px
</style>
