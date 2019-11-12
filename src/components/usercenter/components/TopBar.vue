<template>
  <div class="logo-warpper">
    <img :src="logoUrl" alt />
  </div>
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
.logo-warpper {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(50, 64, 77, 0.14);

  img {
    width: 116px;
    height: 40px;
  }
}
</style>