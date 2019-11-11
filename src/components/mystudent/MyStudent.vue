<template>
  <el-tabs v-model="activeName" :stretch="false">
    <el-tab-pane label="学生" name="first">
      <TabStudent />
    </el-tab-pane>
    <el-tab-pane label="班级" name="second">
      <TabClass />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabStudent from "./components/TabStudent";
import TabClass from "./components/TabClass";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { TabStudent, TabClass },
  data() {
    //这里存放数据
    return {
      activeName: "first"
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
<style lang='stylus' scoped></style>