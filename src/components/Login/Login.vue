<template>
  <div class="hello">
    <div class="login-warpper">
      <loginForm @login="login"></loginForm>
    </div>
  </div>
</template>

<script>
import loginForm from "./components/loginForm";
import { saveToLocal, loadFromLocal } from "@/common/js/store";
export default {
  name: "login",
  components: { loginForm },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
          this.$router.push("/");
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
.hello {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .login-warpper {
    width: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
