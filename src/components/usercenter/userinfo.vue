<template>
  <div class="userinfo-warpper">
    <TopBar />
    <div class="form">
      <div class="title">填写个人信息，展示您的教学能力吧</div>
      <el-collapse v-model="activeNames">
        <el-form ref="form" :model="form" :rules="rules" label-width="155px">
          <el-collapse-item name="1">
            <div slot="title" class="title">
              <span class="left">基础信息</span>
              <span class="right">收起</span>
            </div>
            <div class="panel-body">
              <el-form-item prop="cname" label="中文姓名:">
                <el-input v-model="form.cname" type="text" placeholder="请填写您的中文姓名"></el-input>
              </el-form-item>
              <el-form-item prop="sex" label="性别:">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="dateOfBirth" label="出生日期:">
                <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="请选择您的出生日期"></el-date-picker>
              </el-form-item>
              <el-form-item prop="phone" label="手机号码:">
                <el-input v-model="form.phone" type="text" placeholder="请填写您的手机号码"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱:">
                <el-input v-model="form.email" type="text" placeholder="请填写您的常用邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="adress" label="居住地:">
                <el-input v-model="form.adress" type="text" placeholder="请选择您的居住地"></el-input>
              </el-form-item>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <div slot="title" class="title">
              <span class="left">教育背景</span>
              <span class="right">收起</span>
            </div>
            <div class="panel-body">
              <el-form-item prop="undergraduateSchool" label="本科毕业学校:">
                <el-input v-model="form.undergraduateSchool" type="text" placeholder="请填写您的本科毕业学校"></el-input>
              </el-form-item>
              <el-form-item prop="undergraduateMajor" label="本科专业:">
                <el-input v-model="form.undergraduateMajor" type="text" placeholder="请填写您的本科专业"></el-input>
              </el-form-item>
              <el-form-item label="硕士毕业学校:">
                <el-input v-model="form.masterSchool" type="text" placeholder="请填写您的硕士毕业学校，没有请填无"></el-input>
              </el-form-item>
              <el-form-item label="硕士专业:">
                <el-input v-model="form.masterMajor" type="text" placeholder="请填写您的硕士专业，没有请填无"></el-input>
              </el-form-item>
              <el-form-item prop="incumbency" label="是否在读:">
                <el-radio-group v-model="form.incumbency">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <div slot="title" class="title">
              <span class="left">教学经历</span>
              <span class="right">收起</span>
            </div>
            <div class="panel-body">
              <el-form-item prop="startTime" label="开始工作时间:">
                <el-date-picker v-model="form.startTime" type="date" placeholder="请选择您开始工作的时间"></el-date-picker>
              </el-form-item>
              <el-form-item prop="companyName" label="目前就职单位:">
                <el-input v-model="form.companyName" type="text" placeholder="请填写您目前的就职单位"></el-input>
              </el-form-item>
              <el-form-item prop="teachingQualificationCertificate" label="教师资格证持证情况:">
                <el-input
                  v-model="form.teachingQualificationCertificate"
                  type="text"
                  placeholder="请填写您持有的教师资格证名称，没有请填无"
                ></el-input>
              </el-form-item>
              <el-form-item prop="teachingStyle" label="教学风格:">
                <el-input v-model="form.teachingStyle" type="text" placeholder="请填写您的教学风格"></el-input>
              </el-form-item>
              <el-form-item prop="checklist" label="是否在读:">
                <el-checkbox-group v-model="form.checklist">
                  <el-checkbox label="幼儿园"></el-checkbox>
                  <el-checkbox label="小一"></el-checkbox>
                  <el-checkbox label="小二"></el-checkbox>
                  <el-checkbox label="小三"></el-checkbox>
                  <el-checkbox label="小四"></el-checkbox>
                  <el-checkbox label="小五"></el-checkbox>
                  <el-checkbox label="小六"></el-checkbox>
                  <el-checkbox label="初一"></el-checkbox>
                  <el-checkbox label="初二"></el-checkbox>
                  <el-checkbox label="初三"></el-checkbox>
                  <el-checkbox label="高一"></el-checkbox>
                  <el-checkbox label="高二"></el-checkbox>
                  <el-checkbox label="高三"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item prop="mandarinLevel" label="普通话证书等级:">
                <el-input v-model="form.mandarinLevel" type="text" placeholder="请填写您的普通话证书等级，没有请填无"></el-input>
              </el-form-item>
              <el-form-item prop="englishLevel" label="英语证书等级:">
                <el-input v-model="form.englishLevel" type="text" placeholder="请填写您的英语证书等级，没有请填无"></el-input>
              </el-form-item>
              <el-form-item label="其他外语:">
                <el-input
                  v-model="form.ohterLanguages"
                  type="text"
                  placeholder="请填写您掌握的可以作为日常沟通语言的其他"
                ></el-input>
              </el-form-item>
              <el-form-item label="方言:">
                <el-input v-model="form.dialect" type="text" placeholder="请填写您会讲的方言"></el-input>
              </el-form-item>
              <el-form-item label="方言:">
                <el-input
                  v-model="form.dialectRemark"
                  type="textarea"
                  :rows="4"
                  placeholder="除了以上资料您还有什么想告诉我们的~"
                ></el-input>
              </el-form-item>
            </div>
          </el-collapse-item>
          <el-form-item class="form-btn">
            <el-button>保存</el-button>
            <el-button type="primary" @click="onSubmit">保存并提交</el-button>
          </el-form-item>
        </el-form>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { TopBar },
  data() {
    //这里存放数据
    return {
      form: {
        cname: "",
        sex: "",
        dateOfBirth: "2019-11-1",
        phone: "",
        email: "",
        adress: "",

        undergraduateSchool: "", //本科学校
        undergraduateMajor: "",
        masterSchool: "",
        masterMajor: "",
        incumbency: "", //在读
        startTime: "",
        companyName: "",
        mandarinLevel: "",
        englishLevel: "",
        teachingQualificationCertificate: "", //教学资格证书
        teachingStyle: "", //教学风格
        ohterLanguages: "",
        dialect: "", //方言
        dialectRemark: "",
        checklist: []
      },
      rules: {
        cname: [
          { required: true, message: "请填写您的中文姓名", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        dateOfBirth: [
          { required: true, message: "请选择您的出生日期", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请填写您的手机号码", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请填写您的常用邮箱", trigger: "blur" }
        ],
        adress: [
          { required: true, message: "请选择您的居住地", trigger: "blur" }
        ],

        undergraduateSchool: [
          { required: true, message: "请填写您的本科毕业学校", trigger: "blur" }
        ],
        undergraduateMajor: [
          { required: true, message: "请填写您的本科专业", trigger: "blur" }
        ],

        incumbency: [
          { required: true, message: "请选择是否在读", trigger: "blur" }
        ],
        startTime: [
          { required: true, message: "请选择您开始工作的时间", trigger: "blur" }
        ],
        companyName: [
          { required: true, message: "请填写您目前的就职单位", trigger: "blur" }
        ],
        teachingQualificationCertificate: [
          {
            required: true,
            message: "请填写您持有的教师资格证名称，没有请填无",
            trigger: "blur"
          }
        ],
        teachingStyle: [
          { required: true, message: "请填写您的教学风格", trigger: "blur" }
        ],
        incumbency: [
          { required: true, message: "请选择是否在读", trigger: "blur" }
        ],
        mandarinLevel: [
          {
            required: true,
            message: "请填写您的普通话证书等级，没有请填无",
            trigger: "blur"
          }
        ],
        englishLevel: [
          {
            required: true,
            message: "请填写您的英语证书等级，没有请填无",
            trigger: "blur"
          }
        ]
      },
      activeNames: ["1", "2", "3"]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.$http
            .post("api/modifyuserinfo", this.form)
            .then(({ status, data }) => {
              console.log(this.form);
              if (status === 200 && data.errno === 0) {
                this.$notify({
                  title: "成功",
                  message: data.msg,
                  type: "success"
                });
              } else {
                this.$notify({
                  title: "保存失败！",
                  message: data.msg,
                  type: "error"
                });
              }
            });
        } else {
          return false;
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='stylus'>
.userinfo-warpper {
  background-color: #fff;

  .form {
    width: 620px;
    margin: 0 auto;

    >.title {
      height: 140px;
      font-size: 28px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 140px;
      text-align: center;
    }

    .el-date-editor.el-input {
      width: 100%;
    }

    .form-btn {
      text-align: center;
      padding-top: 20px;
      padding-bottom: 50px;
    }
  }

  .el-collapse {
    border: none;

    .el-collapse-item {
      width: 100%;

      .el-collapse-item__header {
        border-bottom: 1px solid rgba(216, 216, 216, 1);

        .el-collapse-item__arrow {
          transform: rotate(90deg);
        }

        .is-active {
          transform: rotate(-90deg);
        }
      }

      .el-collapse-item__content {
        padding-bottom: 0;
      }

      .el-collapse-item__wrap {
        border-bottom: none;
      }

      .panel-body {
        padding: 20px 70px;
      }

      .title {
        width: 100%;

        .left {
          float: left;
          font-size: 18px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          padding-left: 10px;
        }

        .right {
          float: right;
          font-size: 12px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          padding-right: 5px;
        }
      }
    }
  }
}
</style>