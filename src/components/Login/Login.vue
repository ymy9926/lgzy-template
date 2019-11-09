<template>
  <el-container class="login-warpper">
    <el-header>
      <TopBar />
    </el-header>
    <el-main>
      <div class="login-form-warpper">
        <div class="title">登录</div>
        <loginForm @login="login"></loginForm>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import TopBar from "./components/TopBar";
import loginForm from "./components/loginForm";
import { saveToLocal, loadFromLocal } from "@/common/js/store";
export default {
  name: "login",
  components: { loginForm, TopBar },
  data() {
    return {
      bgImgUrl: require("../../assets/theme-default/images/login/bg@2x.png")
    };
  },
  methods: {
    test() {
      console.log(process.env.PORT);
    },
    login(user) {
      this.$http.post("api/login", user).then(({ status, data }) => {
        if (status === 200 && data.errno === 0) {
          console.log(this.$store.state.user);
          saveToLocal("login_info", "user", user);
          this.$store.state.user.isLogin = true;
          this.$store.state.user.user = user;
          console.log(this.$router.query);
          if (this.$router.query && this.$router.query.redirect) {
            this.$router.push(this.$router.query.redirect);
          } else {
            this.$router.push("/index");
          }
        } else {
          alert(data.msg);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.login-warpper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/theme-default/images/login/bg@2x.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;

  .el-header {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .login-form-warpper {
    box-sizing: border-box;
    width: 420px;
    height: 307px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    padding: 10px 50px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-60%);

    .title {
      font-weight: 600;
      text-align: center;
      height: 70px;
      line-height: 70px;
      font-size: 18px;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
