<template>
  <div>
    <el-button-group>
      <el-button size="medium" type="primary">待上课</el-button>
      <el-button size="medium">已上课</el-button>
      <el-button size="medium">异常</el-button>
    </el-button-group>
    <div class="tab-wrap">
      <div class="calendar-wrap">
        <el-row>
          <el-col class="times-all">全部</el-col>
          <el-col class="tiems-tit">
            <el-row type="flex" justify="space-around">
              <el-col v-for="(item,index) in calendatArr" :key="index" :span="1">
                <span class="weekday">{{calendarTitleArr[item.weekDay]}}</span>
                <div :class="index == 0 ? 'days-tag active' : 'days-tag'">{{item.days}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="allcourses-wrap">
        <div class="allcourses-list">
          <el-row justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <p class="date">
                  <span>2019.10.16(周三)8:00-8:55</span>
                </p>
                <p class="level">
                  <span class="test">
                    <img src="../../assets/theme-default/images/classroom/audition.png" />
                  </span>
                  <span>
                    <img
                      class="smallclass"
                      src="../../assets/theme-default/images/classroom/smallclass@2x.png"
                      alt
                    />
                  </span>
                  <span>高级</span>
                  <span class="level-pad">Level1</span>
                  <span>Lesson23</span>
                </p>
                <p class="student">
                  <span>学生:</span>
                  <span class="everybody">studentA</span>
                </p>
              </div>
            </el-col>
            <el-col :span="12" align="middle">
              <el-row type="flex" justify="end">
                <el-button>备课</el-button>
                <el-button>扩展课件</el-button>
                <el-button>教参</el-button>
                <el-button>原始作业</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="allcourses-list">
          <el-row justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <p class="date">
                  <span>2019.10.16(周三)8:00-8:55</span>
                </p>
                <p class="level">
                  <span class="test">试</span>
                  <span>
                    <img
                      class="smallclass"
                      src="../../assets/theme-default/images/classroom/smallclass@2x.png"
                      alt
                    />
                  </span>
                  <span>高级</span>
                  <span>Level1</span>
                  <span>Lesson23</span>
                </p>
                <p class="student">
                  <span>学生:</span>
                  <span class="everybody">studentA</span>
                </p>
              </div>
            </el-col>
            <el-col :span="12" align="middle">
              <el-row type="flex" justify="end">
                <el-button>备课</el-button>
                <el-button>扩展课件</el-button>
                <el-button>教参</el-button>
                <el-button>原始作业</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calendatArr: [],
      calendarTitleArr: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    };
  },
  mounted() {
    this.laterDay(13);
    console.log(this.calendatArr);
  },
  methods: {
    // 今天之后两个星期的
    laterDay(num) {
      let date = new Date();
      var isCurrentDay = date.getDate();
      let isCurrentMonth = date.getMonth();
      let isCurrentYear = date.getFullYear();
      let calendatArr = [];
      for (var i = 0; i < num + 1; i++) {
        var newDate = new Date(isCurrentYear, isCurrentMonth, isCurrentDay + i);
        let days = newDate.getDate();
        if (days == 1) {
          days = newDate.getMonth() + 1 + "/" + days;
        }
        calendatArr.push({
          days: days,
          weekDay: newDate.getDay()
        });
      }
      this.calendatArr = calendatArr;
    }
  }
};
</script>

<style lang="stylus" scoped>
.allcourses-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F8F8F8;
  margin: 20px 0;
  padding: 15px 0 15px 20px;
  border-radius: 4px;
  color: #333;
  position: relative;
}

.stude {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 40px;
  background: #ccc;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
}

.date {
  font-size: 16px;
}

.test {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.date {
  font-size: 16px;
}

.level {
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #666;
  height: 20px;
  margin: 5px 0;
}

.level-pad {
  padding: 0 5px;
}

.smallclass {
  margin-top: 3px;
  width: 58px;
  height: 16px;
  margin-right: 10px;
}

.everybody {
  margin: 0 5px;
  padding-right: 10px;
  font-size: 14px;
}

.student {
  font-size: 14px;
  color: #666;
}

.everybody span {
  color: #DE8E1D;
}

.calendar-wrap {
  margin-top: 20px;
}

.times-all {
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  width: 40px;
  float: left;
}

.tiems-tit {
  text-align: center;
  float: left;
  width: 94%;

  .weekday {
    font-size: 14px;
    color: #999;
  }

  .days-tag {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 5px auto;
    font-size: 14px;
    color: #666;
    border: 1px solid #fff;
    border-radius: 100%;
  }

  .days-tag.active {
    border: 1px solid #4e4f6a;
  }
}
</style>