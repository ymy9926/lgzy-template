<template>
  <el-row class="topbar-warpper">
    <el-col :span="12" class="logo">
      <img :src="logoUrl" alt />
    </el-col>
    <el-col :span="12" class="register">
      <el-link :href="to">{{text}}</el-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    text: {
      default: "没有账号，立即注册",
      type: String
    },
    to: {
      default: "/register",
      type: String
    }
  },
  data() {
    //这里存放数据
    return {
      logoUrl: require("../../../assets/theme-default/images/login/logo@2x.png")
    };
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
.topbar-warpper {
  height: 100%;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 116px;
      height: 40px;
    }
  }

  .register {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      font-weight: 400;
      color: rgba(89, 94, 155, 1);
    }
  }
}
</style>