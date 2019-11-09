<template>
  <a class="notice-warpper" href>
    <el-badge :value="count" :max="99" :hidden="!isShow" class="item">
      <el-avatar size="small" shape="square" :src="noticeUrl"></el-avatar>
    </el-badge>
  </a>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    count: {
      default: 0,
      type: Number
    }
  },
  data() {
    //这里存放数据
    return {
      badge: false,
      noticeUrl: require("../../../assets/theme-default/images/index/notice@2x.png")
    };
  },
  //监听属性 类似于data概念
  computed: {
    isShow(a, c) {
      console.log(this.count > 0 ? true : false);
      return this.count > 0 ? true : false;
    }
  },
  //监控data中的数据变化
  watch: {
    // isshow() {
    //   return count > 0 ? true : false;
    // }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='stylus'>
.notice-warpper {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  font-size: 0;
  position: relative;

  .el-avatar {
    background: none;
  }

  .el-badge__content {
    box-sizing: border-box;
    min-width: 14px;
    text-align: center;
    height: 14px;
    line-height: 14px;
    padding: 0 4px;
    top: 6px;
    right: 15px;
  }
}
</style>