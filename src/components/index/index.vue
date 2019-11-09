<template>
  <el-container class="index-warpper">
    <el-header>
      <TopBar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LeftMenu />
        <el-button type="primary" size="small">设备检测</el-button>
      </el-aside>
      <el-main>
        <div class="bg">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
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
    return {};
  }
};
</script>
<style scoped lang='stylus'>
@import '../../assets/theme-default/index/index.styl';
@import '../../assets/theme-default/common/stylus/mixin.styl';

.index-warpper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .el-header {
    padding: 0px;
  }

  .el-container {
    overflow-y: auto;

    .el-aside {
      bg-color-brand(0.96);
      text-align: center;

      .el-button {
        margin-top: 30px;
        width: 60%;
        bg-color-brand(0.96);
        border: 1px solid #fff;
      }
    }

    .bg {
      background-color: #fff;
      min-height: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>