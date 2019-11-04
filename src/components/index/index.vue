<template>
  <div class="index-warpper">
    <TopBar />
    <TopMenu />
    <div class="main">
      <el-alert :title="error" type="error" effect="dark" class="error"></el-alert>
    </div>
  </div>
</template>

<script>
import TopBar from "./components/Top";
import TopMenu from "./components/TopMenu";
import LeftMenu from "./components/LeftMenu";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    TopMenu,
    TopBar,
    LeftMenu
  },
  data() {
    //这里存放数据
    return {
      error:
        "Your account balance is less than 5 points. In order to learn Chinese in succession, please Top-up in time ~"
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
<style scoped lang='stylus'>
@import '../../assets/theme-default/index/index.styl';

.index-warpper {
  .main {
    width: 1000px;
    margin: 0 auto;

    .error {
      margin: 10px 0;
      background-color: rgba(245, 108, 108, 0.5);
      color: #000;
      font-weight: 300;
      padding: 17px;
    }
  }
}
</style>