<template>
  <el-menu :default-active="active" router text-color="#fff" active-text-color="#fff">
    <el-menu-item v-for="(item,$key) in menus" :index="item.href" :key="$key">
      <i :class="['mg-icon',item.icon]"></i>
      <span v-html="item.title"></span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: "",
      menus: [
        {
          title: "课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;堂",
          icon: "mg-icon-kt",
          href: "classroom",
          index: "1-1"
        },
        {
          title: "全部课程",
          icon: "mg-icon-qbkc",
          href: "allcourses",
          index: "1-2"
        },
        {
          title: "发布时间",
          icon: "mg-icon-fbsj",
          href: "publishtime",
          index: "1-3"
        },
        {
          title: "我的学生",
          icon: "mg-icon-wdxs",
          href: "mystudent",
          index: "1-4"
        },
        {
          title: "课件资源",
          icon: "mg-icon-kjzy",
          href: "coursewareresources",
          index: "1-5"
        },
        {
          title: "扩展课件",
          icon: "mg-icon-kzkj",
          href: "extendedcourseware",
          index: "1-6"
        },
        {
          title: "作业中心",
          icon: "mg-icon-zyzx",
          href: "assignmentcenter",
          index: "1-7"
        },
        {
          title: "教师培训",
          icon: "mg-icon-jspx",
          href: "teachertraining",
          index: "1-8"
        },
        {
          title: "我的课酬",
          icon: "mg-icon-wdkc",
          href: "myremuneration",
          index: "1-10"
        },
        {
          title: "常见问题",
          icon: "mg-icon-cjwt",
          href: "commonproblem",
          index: "1-11"
        },
        {
          title: "软件下载",
          icon: "mg-icon-rjxz",
          href: "download",
          index: "1-12"
        }
      ]
    };
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.active = this.$router.currentRoute.name;
  }
};
</script>
<style lang='stylus' scoped>
@import '../../../assets/theme-default/common/stylus/mixin.styl';

.el-menu {
  text-align: left;
  background: none;
  border: none;

  .el-submenu__title, .el-menu-item {
    height: 40px;
    line-height: 40px;

    &.is-active {
      bg-color-brand(0.96) !important;

      .mg-icon-kt {
        background-image: url('../../../assets/theme-default/images/index/ketang-yes.png');
      }

      .mg-icon-cjwt {
        background-image: url('../../../assets/theme-default/images/index/changjianwenti-yes.png');
      }

      .mg-icon-fbsj {
        background-image: url('../../../assets/theme-default/images/index/fabushijian-yes.png');
      }

      .mg-icon-jspx {
        background-image: url('../../../assets/theme-default/images/index/jiaoshipeixun-yes.png');
      }

      .mg-icon-kjzy {
        background-image: url('../../../assets/theme-default/images/index/kejianziyuan-yes.png');
      }

      .mg-icon-kzkj {
        background-image: url('../../../assets/theme-default/images/index/kuozhankejian-yes.png');
      }

      .mg-icon-qbkc {
        background-image: url('../../../assets/theme-default/images/index/quanbukecheng-yes.png');
      }

      .mg-icon-rjxz {
        background-image: url('../../../assets/theme-default/images/index/ruanjianxiazai-yes.png');
      }

      .mg-icon-wdkc {
        background-image: url('../../../assets/theme-default/images/index/wodekechou-yes.png');
      }

      .mg-icon-wdxs {
        background-image: url('../../../assets/theme-default/images/index/wodexuesheng-yes.png');
      }

      .mg-icon-zyzx {
        background-image: url('../../../assets/theme-default/images/index/zuoyezhongxin-yes.png');
      }
    }

    &:hover {
      bg-color-brand(0.96) !important;
    }

    .mg-icon {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      display: inline-block;
      background-position: center;
      background-repeat: no-repeat;
    }

    .mg-icon-kt {
      background-image: url('../../../assets/theme-default/images/index/ketang-no.png');
    }

    .mg-icon-cjwt {
      background-image: url('../../../assets/theme-default/images/index/changjianwenti-no.png');
    }

    .mg-icon-fbsj {
      background-image: url('../../../assets/theme-default/images/index/fabushijian-no.png');
    }

    .mg-icon-jspx {
      background-image: url('../../../assets/theme-default/images/index/jiaoshipeixun-no.png');
    }

    .mg-icon-kt {
      background-image: url('../../../assets/theme-default/images/index/ketang-no.png');
    }

    .mg-icon-kjzy {
      background-image: url('../../../assets/theme-default/images/index/kejianziyuan-no.png');
    }

    .mg-icon-kzkj {
      background-image: url('../../../assets/theme-default/images/index/kuozhankejian-no.png');
    }

    .mg-icon-qbkc {
      background-image: url('../../../assets/theme-default/images/index/quanbukecheng-no.png');
    }

    .mg-icon-rjxz {
      background-image: url('../../../assets/theme-default/images/index/ruanjianxiazai-no.png');
    }

    .mg-icon-wdkc {
      background-image: url('../../../assets/theme-default/images/index/wodekechou-no.png');
    }

    .mg-icon-wdxs {
      background-image: url('../../../assets/theme-default/images/index/wodexuesheng-no.png');
    }

    .mg-icon-zyzx {
      background-image: url('../../../assets/theme-default/images/index/zuoyezhongxin-no.png');
    }
  }
}
</style>