<template>
  <div class="login">
   <div> 帐号：<input type="text" v-model="form.mobile"></div>
    <div>密码：<input type="text" v-model="form.password"></div>
    <div><button @click="goLogin">登录</button></div>
    <div><button @click="goReg">注册</button></div>
  </div>
</template>

<script>
import urls from '../../utils/urls'
export default {
  data () {
    return {
      form: {username: 'zaofeng', password: '231456', mobile: '15474855241'}
    }
  },
  methods: {
    goLogin () {
      this.$axios.post(urls.login, this.form).then(resp => {
        console.log(resp)
      })
    },
    goReg () {
      console.log(this.form)
      this.$axios.post(urls.register, this.form).then(resp => {
        console.log(resp)
      })
    }
  }
}
</script>

<style>
.login {
  position:fixed;
  left: 50%;
  transform: translateX(-50%);
  top:200px;
  padding:50px;
}
</style>
