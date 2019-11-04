<template>
  <el-container direction="vertical" class="topmenu">
    <el-row class="container">
      <el-col :span="8" class="left">
        <img src alt />
      </el-col>
      <el-col :span="16" class="right">
        <ul class="menu">
          <li class="active">STUDY</li>
          <li class="points">
            <el-button round>20 points</el-button>
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
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
<style lang='stylus'>
@import '../../../assets/theme-default/index/components/topmenu.styl';
</style>