<template>
  <header :class="{'login':isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1>let's start</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-else>
      <h1>Let's share</h1>
      <i class="el-icon-edit edit"></i>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt />
    </template>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/base.scss";
.no-login {
  padding: 0 12% 30px 12%;
  background: $bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}

.login{
  display: flex;
  background: $bgColor;
  align-items: center;
  h1{
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }

  .edit{
    color: #fff;
    font-size: 30px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}
</style>
