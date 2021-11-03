<template>
  <div>
    <!-- 没有登陆时的界面 -->
    <div v-if="!isLogin" class="notLogIn">
        <!-- 词霸头像及其说明性文字 -->
        <figure>
            <img src="../assets/image/userCenter_img/ex5.jpg" alt="词霸软件的头像" width="150" height="150" id="themeIcon">
            <figcaption id="pointInfo">登录账号同步生词本和图书资源</figcaption>
        </figure>
        <!-- 账号注册和账号登陆 -->
        <div class="registerAndLogin">
            <button class="register">账号注册</button>
            <button class="login">快捷登录</button>
        </div>
    </div>
    <UserCenter_userInfo_login v-if="isLogin"></UserCenter_userInfo_login>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入用户登陆状态下的页面组件
import UserCenter_userInfo_login from './UserCenter_userInfo_login.vue'

export default {
  name: 'UserCenter_userInfo',
  // 注册组件
  components: {
    UserCenter_userInfo_login
  },
  data() {
    return {
    }
  },
  // 计算属性 获取vuex里的state 使用了辅助函数
  computed: {
    ...mapState({
      isLogin: 'isLogin'
    })
  }
}
</script>

<style lang="stylus" scoped>
  // 用户未登录时显示界面的样式
  div.notLogIn
    display flex
    flex-direction column
    height calc(100vh - 85px)
    align-items: center
    justify-content space-around
    // 头像和提示文字的样式
    figure
      text-align center
      #themeIcon
        border-radius 50%
      #pointInfo
        margin-top 10px
        font-size 20px
    // 登录与注册按钮的样式
    .registerAndLogin
      button
        padding 8px 20px
        &:first-child
          margin-right 15px
        &:last-child
          background-color DodgerBlue
          color white
        &:last-child:hover
          background-color DeepSkyBlue
</style>
