<template>
  <div class="login">
    <div class="box">
      <h2>登陆</h2>
      <li ref="lidom">libiaoqian</li>
      <button @click="subLogin">提交</button>
      <button @click="getdom">refs</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    subLogin () {
      console.log('点击了')
      this.$router.push('/main')
    },
    getdom () {
      console.log(this.$refs.lidom)
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 500px;
    height: 400px;
    border: 1px solid red;
  }
}
</style>
