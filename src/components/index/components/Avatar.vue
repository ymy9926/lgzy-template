<template>
  <span class="user-warpper">
    <el-dropdown :hide-on-click="false">
      <span class="userinfo">
        <el-avatar size="small" :src="avatarUrl"></el-avatar>
        <span class="name">{{username}}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-link href="/userinfo">个人信息</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/userinfo">修改密码</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/userinfo">退出登录</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </span>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    username: {
      default: "未知用户",
      type: String
    },
    avatarUrl: {
      default: require("../../../assets/theme-default/images/index/logo@2x.png"),
      type: String
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='stylus' scoped>
.user-warpper {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 0;
  cursor: pointer;

  .userinfo {
    display: inline-block;
    height: 30px;

    .el-avatar img {
      vertical-align: middle;
    }

    .name {
      vertical-align: top;
      font-size: 14px;
      margin-left: 10px;
    }
  }
}
</style>