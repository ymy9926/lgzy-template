<template>
  <el-form ref="loginForm" :model="form" :rules="rules" class="login-form">
    <el-form-item prop="name">
      <el-input v-model="form.name" type="text" placeholder="手机／邮箱／用户名"></el-input>
    </el-form-item>
    <el-form-item prop="pass" class="passworld">
      <el-input v-model="form.pass" :type="isText?'text':'password'" placeholder="密码"></el-input>
      <i class="showpass" @click="isText=!isText" :class="{'active':isText}"></i>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login()">登录</el-button>
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
      },
      isText: false
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
  }

  .passworld {
    position: relative;

    .showpass {
      position: absolute;
      right: 10px;
      top: 50%;
      width: 20px;
      height: 20px;
      background-image: url('../../../assets/theme-default/images/login/close@2x.png');
      background-size: 20px 20px;
      transform: translateY(-50%);

      &.active {
        background-image: url('../../../assets/theme-default/images/login/open@2x.png');
      }
    }
  }
}
</style>