<template>
  <div id="app">
    <my-header style="height:1200px;"></my-header>
    <section class="app-main" style="min-height: 100%">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <my-footer></my-footer>
    <login v-if="loginShow"></login>
    <register v-if="registerShow"></register>
    <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></back-to-top>
  </div>
</template>

<script>
import myHeader from './components/common/myHeader.vue'
import myFooter from './components/common/myFooter.vue'
import login from './components/common/login.vue'
import register from './components/common/register.vue'
import backToTop from './components/BackToTop'
export default {
  name: 'App',
  data () {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
    }
  },
  components: {
    myHeader, myFooter, login, register, backToTop
  },
  computed: {
    loginShow () {
      return this.$store.state.loginShow
    },
    registerShow () {
      return this.$store.state.registerShow
    }
  }
}
</script>

<style lang="scss">
@import './style/index.scss';
#app {
  position: relative;
}
.app-main {
  margin-top:88px;
}

</style>
