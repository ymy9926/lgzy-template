<template>
  <div class="tab-sutdent-warpper">
    <el-input placeholder="请输入学生名字" v-model="student.keyword">
      <el-button slot="append" class="lg-btn" @click="search()">查询</el-button>
    </el-input>
    <div class="card-template" v-for="(item,key) in studentList.rows" :key="key">
      <div class="left">
        <el-image :src="item.avatarUrl" fit="cover"></el-image>
      </div>
      <div class="center">
        <div class="name">学生名字:{{item.name}}</div>
        <div class="info">{{item.grade}} {{item.level}} {{item.lesson}}</div>
        <div class="info">{{item.sex}} {{item.age}}岁 {{item.country}}</div>
        <div class="info">跟我待上 {{item.cost}}节；跟我已上 {{item.mycost}}节；账户余额 {{item.surplus}}</div>
      </div>
      <div class="right">
        <el-button type="primary" size="small" @click="adjustmentProgress(item)" plain>调整进度</el-button>
      </div>
    </div>
    <el-pagination
      background
      layout="prev,pager,next,sizes,jumper"
      :page-size="student.pageSize"
      :total="studentList.total"
      :current-page="student.pageIndex"
      @size-change="pageSizeChange"
      @current-change="pageIndexChange"
    ></el-pagination>

    <ModifyProgress
      :form="editStudent"
      :open="isProgress"
      @colse-progress="colseProgress"
      @submit="modifyProgress"
    />
  </div>
</template>

<script>
import ModifyProgress from "./ModifyProgress";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ModifyProgress },
  data() {
    //这里存放数据
    return {
      student: {
        keyword: "",
        pageSize: 10,
        pageIndex: 1
      },
      studentList: [],
      editStudent: {
        level: "",
        lesson: ""
      },
      isProgress: false
    };
  },
  //方法集合
  methods: {
    adjustmentProgress(student) {
      this.editStudent = student;
      this.isProgress = true;
    },
    search() {
      this.$http
        .get("api/getMyStudentList", {
          params: this.student
        })
        .then(({ status, data }) => {
          if (status === 200 && data.errno === 0) {
            this.studentList = data.data;
          } else {
            alert(data.msg);
          }
        });
    },
    colseProgress(isShow) {
      this.isProgress = isShow;
    },
    modifyProgress(form, isShow) {
      this.$http
        .post("api/modifyprogress", {
          params: form
        })
        .then(({ status, data }) => {
          if (status === 200 && data.errno === 0) {
            this.isProgress = isShow;
            this.$notify({
              title: "成功",
              message: data.msg,
              type: "success"
            });
          } else {
            alert(data.msg);
          }
        });
    },
    pageSizeChange(size) {
      this.student.pageSize = size;
      this.search();
    },
    pageIndexChange(index) {
      this.student.pageIndex = index;
      this.search();
    },
    pageChange() {
      this.search();
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.search();
  }
};
</script>
<style lang='stylus' scoped>
@import '../../../assets/theme-default/common/stylus/mixin.styl';

.tab-sutdent-warpper {
  box-sizing: border-box;
  padding: 10px;

  .el-input {
    width: 248px;

    .lg-btn {
      bg-color-brand();
      color: #fff;
      border: none;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .card-template {
    box-sizing: border-box;
    background: rgba(248, 248, 248, 1);
    border-radius: 4px;
    padding: 20px;
    display: flex;
    margin-top: 20px;

    .left {
      flex: 0 130px;

      .el-image {
        width: 88px;
        height: 88px;
        border: 1px solid rgba(248, 248, 248, 1);
        border-radius: 44px;
      }
    }

    .center {
      flex: 1;

      .name {
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 22px;
      }

      .info {
        margin-top: 5px;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 20px;
      }
    }

    .right {
      flex: 0 110px;
      display: flex;
      align-items: center;
      justify-content: center;

      .el-button {
        width: 100%;
      }
    }
  }

  .el-pagination {
    margin-top: 20px;
    text-align: right;
  }
}
</style>