<template>
  <div id="login">
    <div id="container">
      <el-form :model="form" :rules="rules" ref="form">
        <div class="user">
          <el-form-item prop="userName">
            <svg-icon icon-class="user" class="userIcon"></svg-icon>
            <el-input @keyup.enter.native="doLogin" v-model="form.userName"></el-input>
          </el-form-item>
        </div>
        <div class="password">
          <el-form-item prop="pw">
            <svg-icon icon-class="password" class="pwIcon"></svg-icon>
            <el-input @keyup.enter.native="doLogin" v-model="form.pw"></el-input>
          </el-form-item>
        </div>
        <el-button type="primary" @click="doLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import store from "@/store";
// import { childrenRoutes } from "@/router/routes";  
import Router from 'vue-router'

export default {
  data() {
    return {
      form: {},
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pw: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录
    doLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          store.dispatch("login", this.form).then(() => {
            this.$message.success("登录成功");
            this.$router.push("/");
          });
        }
      });
    },

  }
};
</script>
<style lang="less" scoped>
#login {
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  #container {
    position: absolute;
    top: 20%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .user {
      width: 190px;
      position: relative;
      .userIcon {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
      }
      /deep/ .el-input--mini .el-input__inner {
        padding-left: 31px;
      }
    }
    .password {
      width: 190px;
      margin-top: 10px;
      margin-bottom: 10px;
      position: relative;
      .pwIcon {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
      }
      /deep/ .el-input--mini .el-input__inner {
        padding-left: 31px;
      }
    }
  }
}
</style>
