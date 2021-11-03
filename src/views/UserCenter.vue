<template>
  <div class="userCenter">
    <!-- 标签栏切换标题 -->
    <p class="tabTitle" @click="changeTag">
      <span id="userInfo" :class ="{showThisTag: indexNum == 0}" data-num="0">个人信息</span>
      <span v-if="isLogin" :class ="{showThisTag: indexNum == 1}" data-num="1">账号管理</span>
      <span id="myCollect" :class ="{showThisTag: indexNum == 2}" data-num="2">我的收藏</span>
      <span v-if="isLogin" :class ="{showThisTag: indexNum == 3}" data-num="3">我的暑假</span>
      <span v-if="isLogin" :class ="{showThisTag: indexNum == 4}" data-num="4">我的课程</span>
    </p>
    <!-- 标签对应信息显示区 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data() {
    return {
      // 点击切换tab标签
      indexNum: 0
    }
  },
  // 使用store里的isLogin
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    changeTag(e) {
      this.indexNum = e.target.dataset.num
    }
  }
}
</script>

<style lang="stylus" scoped>
  .userCenter
    height calc(100vh - 40px)
    padding 7px
    display: flex
    flex-direction column
  // 标签效果
  .tabTitle
    width 100%
    border-bottom 1px solid gray
    padding 2px
    span
      margin-left 10px
      font-size 20px
      border 1px solid gray
      padding 2px
      cursor pointer
      border-radius 5px 5px 0 0
    .showThisTag
      border-bottom 1px solid white
      border-top 3px solid rgb(100, 149, 237)
</style>
