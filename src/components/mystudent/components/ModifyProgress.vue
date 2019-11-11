<template>
  <el-dialog
    title="调整学生学习进度"
    :visible.sync="isOpen"
    width="340"
    label-width="120px"
    class="progress-warpper"
    @closed="close"
    append-to-body
  >
    <span class="tip">调整学生进度前请务必与其顾问/学管老师确</span>
    <el-form :model="myform" ref="myform" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="级别Level:" prop="level">
        <el-input type="age" v-model.number="myform.level" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="级别Lesson:" prop="lesson">
        <el-input type="age" v-model.number="myform.lesson" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close()">暂不调整</el-button>
      <el-button type="primary" @click="submit()">确定调整</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      rules: {
        level: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        lesson: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      isOpen: this.open,
      myform: this.form
    };
  },
  props: {
    form: {
      default: {
        level: "",
        lesson: ""
      },
      type: Object
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    form(o) {
      this.myform = Object.assign(this.myform, o);
    },
    open(o) {
      this.isOpen = o;
    }
  },
  //方法集合
  methods: {
    submit() {
      this.isOpen = false;
      this.$emit("submit", this.myform, this.isOpen);
    },
    close() {
      this.isOpen = false;
      this.$emit("colse-progress", this.isOpen);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='stylus' scoped>
.progress-warpper {
  .tip {
    line-height: 40px;
  }
}
</style>