<template>
  <div class="profile">
    <!-- 导航 -->
    <NavBar class="navbar">
      <template v-slot:center>
        <div>登录/注册</div>
      </template>
    </NavBar>
    <!-- 登录/注册 -->
    <div class="login">
      <div class="phone-input">
        <label class="phone-choice" for="">
          <span>+86</span>
        </label>
        <input placeholder="请输入手机号" type="tel" />
      </div>
      <div class="coder-input">
        <input placeholder="请输入收到的验证码" type="tel" />
        <button>获取验证码</button>
      </div>

      <div class="login-btn" @click="$router.push('/404')">登录</div>
      <div class="login-fast" @click="$router.push('/404')">一键登录</div>
      <div class="other-login">
        <div class="login-phone">手机号快速登录</div>
        <div class="login-password">账号密码登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.navbar {
  color: white;
  background-color: #ff5777;
  z-index: 10;
}
.login {
  padding: 25px;
}

.phone-input {
  position: relative;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  
  line-height: 40px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, .9);
}
.phone-choice {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.phone-input input {
  width: 100%;
  height: 40px;
  padding-left: 60px;
  outline: none;
  border: none;
}
.coder-input {
  box-sizing: content-box;
  display: block;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  font-size: 16px;
  color: #666666;
}
.coder-input input {
  width: 60%;
  height: 40px;
  outline: none;
  border: none;
}
.coder-input button {
  outline: none;
  width: 40%;
  height: 40px;
  background-color: #fff;
  border: none;
  border-left: 1px solid #999999;
  color: #666666;
}
.login-btn,
.login-fast {
  width: 100%;
  height: 55px;
  font-size: 18px;
  text-align: center;
  line-height: 55px;
  border-radius: 30px;
  margin-top: 10px;
}
.login-btn {
  background-color: #fab3b3;
  color: #fff;
}
.login-fast {
  background-color: #fff;
  border: 1px solid red;
  color: red;
  background: #fff;
}
.other-login {
  display: flex;
  margin-top: 20px;
  font-size: 14px;
  color: #999999;
}
.login-phone {
  flex: 1;
  text-align: left;
}
.login-password {
  flex: 1;
  text-align: right;
}
</style>