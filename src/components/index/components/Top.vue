<template>
  <div class="top-warpper">
    <div class="logo">
      <a href="###">
        <img :src="logoUrl" alt />
      </a>
    </div>
    <div class="right">
      <ul class="user">
        <li>{{areaTime}}</li>
        <li>
          <Notice :count="1" />
        </li>
        <li>
          <Avatar :avatarUrl="avatarUrl" :username="user.username" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formartDate } from "../../../common/js/date";
import Avatar from "./Avatar";
import Notice from "./Notice";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Avatar, Notice },
  data() {
    //这里存放数据
    return {
      logoUrl: require("../../../assets/theme-default/images/index/logo@2x.png"),
      avatarUrl: require("../../../assets/theme-default/images/index/logo@2x.png"),
      areaTime: "Asia/Shanghai " + formartDate(new Date(), "hh:mm:ss"),
      user: {
        username: this.$store.state.user.user.name //"376992159@qq.com"
      }
    };
  }
};
</script>
<style lang='stylus' >
@import '../../../assets/theme-default/common/stylus/mixin.styl';

.top-warpper {
  display: flex;
  height: 100%;

  .logo {
    width: 200px;
    height: 100%;
    flex: 0 200px;
    bg-color-brand();
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 116px;
      height: 40px;
    }
  }

  .right {
    flex: 1;
    background-color: #fff;

    .user {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      list-style: none;
      font-size: 14px;
      margin-right: 10px;

      li {
        padding: 0 10px;
        line-height: 60px;

        .user-warpper, .notice-warpper {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>