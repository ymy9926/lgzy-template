<template>
  <el-form ref="loginForm" :model="form" :rules="rules" class="login-form">
    <el-form-item prop="name">
      <el-input v-model="form.name" type="text" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input v-model="form.pass" type="password" :show-password="true" placeholder="密码">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login()" round>登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  //方法集合
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.$emit("login", this.form);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang='stylus'>
.login-form {
  .el-button {
    width: 100%;
    margin-top: 40px;
  }

  .el-input__inner {
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>