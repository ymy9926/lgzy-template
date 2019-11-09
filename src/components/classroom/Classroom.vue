<template>
   <div class="classroom">
       <Teagningexception @exceptionnone="exceptionflag" v-if="showexception"></Teagningexception>
       <!-- 授课结束 -->
        <Endofteaching
         :showfinished = showfinished
         :students-data = studentsData
         @hiddenDialogEvent = hiddenDialog /> 
       <div class="title">
           <p>今日课程 8节</p>
           <p class="classnum">(小班课带<span>*</span>的是小班课班长)</p>
       </div>
       <ul class="list">
           <li v-for="(item,index) in classlist"
               :key="index">
               <p class="date"><span>{{item.data}}</span><span class="time">{{item.time}}</span></p>
               <p class="level">
                   <span v-if="item.tryclass" class="test"><img src="../../assets/theme-default/images/classroom/audition.png" /></span> 
                   <span v-if="item.class"><img class="smallclass" src="../../assets/theme-default/images/classroom/smallclass.png" alt=""></span>
                   <span>{{item.edition=="advanced"?'高级版':item.edition=="International"?'高级版':"双语版"}}</span>
                   <span class="level-pad">Level{{item.level}}</span>
                   <span>Lesson{{item.lesson}}</span>
               </p>
               <p class="student">
                   <span>学生:</span>
                   <span class="everybody" v-for="(student,index) in item.students"
                   :key="index"><span v-if="student.flag">*</span>{{student.name}}  </span>
               </p>
                <p class="stude" v-if="item.state!==''">
                   {{item.state==0?"老师未点授课结束":
                   item.state==1?"授课完成":
                   item.state==2?"被学生取消":
                   item.state==3?"学生未出席":
                   item.state==4?"老师未出席":
                   item.state==5?"学生设备或网络问题":
                   item.state==6?"老师设备或网络问题":
                   item.state==7?"其他原因异常":"倒计时15分钟"}}
                   </p>
                <p v-if="item.overtime" :class="item.overtime>15?'gotoclass':'classurl'">进入课堂</p>
                <p v-if="item.state=='0'" class="abnormal">
                    <span class="notfinished" @click="exceptionFn()">授课异常</span>
                    <span class="finished" @click="finishedFn(item)">授课结束</span>
                </p>
            </li>
       </ul>
   </div>
</template>
<script>
import Teagningexception from "./components/teachingexception"
import Endofteaching from "./components/endofteaching"
   export default {
        components: {
            Teagningexception,
            Endofteaching
        },
        data () {
            return {
               showexception:false,//是否展示授课异常的弹框
               showfinished:false,//是否展示授课结束的弹框
               classnum:"",//课程数量
               studentsData:[],
               classlist:[{//列表数据
                   time:"8:00-8:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"advanced",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"0"

               },{//列表数据
                   time:"9:00-9:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"International",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"1"
               },{//列表数据
                   time:"10:00-10:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"SG",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"2"
               },{//列表数据
                   time:"8:00-8:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"advanced",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"3"
               },{//列表数据
                   time:"9:00-9:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"International",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"4"
               },{//列表数据
                   time:"10:00-10:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"SG",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"5"
               },{//列表数据
                   time:"8:00-8:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"advanced",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"6"
               },{//列表数据
                   time:"9:00-9:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"International",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"7"
               },{//列表数据
                   time:"10:00-10:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"SG",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:true,

               },{//列表数据
                   time:"10:00-10:55123",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"SG",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"",
                   overtime:15
               },{//列表数据
                   time:"10:00-10:55",//
                   data:"2019.10.16(周三)",
                   tryclass:true,
                   class:true,//小班  true   一对一 false
                   edition:"SG",//高级
                   level:2,//级别
                   lesson:16,//课程
                   students:[
                       {
                           name:"studentA",
                           flag:false,
                       },{
                           name:"studentB",
                           flag:true,
                       },{
                           name:"studentC",
                           flag:false,
                       },{
                           name:"studentD",
                           flag:false,
                       }
                   ],
                   state:"",
                   overtime:45
               }]
            }
        },
        methods:{
            exceptionFn(){//点击授课异常
                this.showexception=true;
            },
            finishedFn(item){//点击授课完成
                this.showfinished=true;
                this.studentsData = item.students;
            },
            exceptionflag(flag){
                console.log(flag,'flag')
                this.showexception=flag
            },
            hiddenDialog(data){
                this.showfinished=false;
            }
        }
  }
</script>
<style scoped>
   .classroom{
       width:100%;
       height:100%;
       display:flex;
       flex-direction: column;
   }
   .title{
       display:flex;
       align-items: center;
       color:#333;
       font-size:24px;
   }
   .classnum{
       font-size:12px;
   }
   .classnum span{
       color:#DE8E1D;
       font-size: 14px;
   }
   .list li{
       display:flex;
       flex-direction: column;
       justify-content:center;
       background:#F8F8F8;
       margin:20px 0;
       padding: 15px 0 15px 20px;
       border-radius:4px;
       color:#333;
       position:relative;
   }
   .stude{
       position:absolute;
       top:18px;
       right:0;
       width:128px;
       height:20px;
       background:#DE8E1D;
       border-top-left-radius: 10px;
       border-bottom-left-radius: 10px;
       text-align:center;
       line-height:20px;
       font-size: 12px;
       color:#fff;
   }
   .date{
       font-size:16px;
   }
   .test{
     width: 16px;
     height:16px;
     margin-right: 10px;
   }
   .time{
       margin-left:20px;
   }
   .level{
       font-size:14px;
       display:flex;
       align-items:center;
       color:#666;
       height:20px;
       margin:5px 0;
   }
   .level-pad{
       padding:0 5px;
   }
   .smallclass{
       margin-top: 3px;
       width:58px;
       height:16px;
       margin-right: 10px;
   }
   .everybody{
       margin:0 5px;
       padding-right:10px;
       font-size:14px;
   }
   .student{
       font-size:14px;
       color:#666;
   }
   .everybody span{
       color:#DE8E1D;
   }
   .gotoclass{
       background:#6B6EA5;
       position:absolute;
       right:10px;
       bottom:20px;
       padding:3px 15px;
       color:#fff;
       border-radius:4px;
       font-size:12px;
   }
   .classurl{
       background:#6B6EA5;
       position:absolute;
       right:10px;
       bottom:20px;
       padding:3px 15px;
       color:#fff;
       border-radius:4px;
       font-size:12px;
   }
   .abnormal{
       position:absolute;
       bottom:20px;
       right:10px;
   }
   .abnormal span{
       padding:3px 15px;
       font-size:12px;
       background:#fff;
       border-radius:3px;
       cursor:pointer;
       margin-left:20px;
    }
   .abnormal span.notfinished{
       color:#F5222D;
       border:1px solid #F5222D;
   }
   .abnormal span.finished{
       color:#fff;
       background:#6B6EA5;
       border:1px solid #6B6EA5;
   }
</style>