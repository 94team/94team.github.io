<template>
  <div>
    <!-- <button @click="open">单例组建测试</button> -->
    <ul>
      <li>
        <router-link to='/'>111</router-link>
      </li>
      <li>
        <router-link to='/projectPage'>222</router-link>
      </li>
      <li>
        <router-link to='/articlePage'>333</router-link>
      </li>
      <li>
        <router-link to='/contributionPage'>4444</router-link>
      </li>
      <li>
        <router-link to='/teamPage'>555</router-link>
      </li>
    </ul>
    <!-- <button @click="showLogin">登录</button> -->
    <!-- <button @click="showRegister">注册</button> -->
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    open () {
      this.$toast('Upload Complete')
    },
    showLogin () {
      this.$store.dispatch('isloginShow', true)
    },
    showRegister () {
      this.$store.dispatch('isregisterShow', true)
    }
  }
}
</script>
