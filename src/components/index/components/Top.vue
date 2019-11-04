<template>
  <el-container direction="vertical" class="topbar">
    <el-row class="container">
      <el-col :span="8">{{tel}}</el-col>
      <el-col :span="16" class="right">
        <ul class="user">
          <li class="eng-or-ch">
            <el-button type="text" :disabled="!isEng" @click="isEng=!isEng">Eng</el-button>
            <el-button type="text" :disabled="isEng" @click="isEng=!isEng">中文</el-button>
          </li>
          <li>{{areaTime}}</li>
          <li>{{user.username}}</li>
        </ul>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { formartDate } from "../../../common/js/date";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tel: "65-86183670",
      isEng: true,
      areaTime: "Asia/Shanghai " + formartDate(new Date(),'hh:mm:ss'),
      user: {
        username: this.$store.state.user.user.name //"376992159@qq.com"
      }
    };
  }
};
</script>
<style lang='stylus' >
@import '../../../assets/theme-default/index/components/topbar.styl';
</style>