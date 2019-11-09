<template>
   <el-dialog :visible.sync="showfinished" width="760px" :before-close="handleClose">
       <div class="dialog-wrap">
           <div class="exceptiontit">
                <p class="tit">课堂反馈</p>
                <p class="date">
                    <span>2019.10.16(周三)</span>
                    <span>11:00-11:55</span>
                    <span>高级版</span>
                    <span>Level2</span>
                    <span>Lesson16</span>
                </p>
                <!-- <p class='submit'>
                    <span :class='submitflag?"submitproposa":"submitbg"'>提交评语</span>
                </p> -->
            </div>
            <div class="student">
                    <ul class="studentLeft">
                            <li
                            v-for="(item,index) in studentarr"
                            :key="item.name"
                            :class="item.flag?'selectli':''"
                            @click="selectFn(index)"
                            >
                                {{item.name}}
                            </li>
                    </ul>
                    <div class="studentRight">
                        <template v-if="nowstudent!==4">
                        <div class="studenttoyou">
                            <p class="studenttitle">学生给您的反馈</p>
                        </div>
                        <div class="youtostudent">
                            <p class="studenttitle">您给学生的评语</p>
                            <ul class="list">
                                <li>
                                    <span class="start-tit">知识掌握程度</span>
                                    <el-rate class="start" v-model="studentarr[nowstudent].mastery"></el-rate>
                                </li>
                                <li>
                                    <span class="start-tit">进步程度</span>
                                    <el-rate class="start" v-model="studentarr[nowstudent].progress"></el-rate>
                                </li>
                                <li>
                                    <span class="start-tit">学习态度</span>
                                    <el-rate class="start" v-model="studentarr[nowstudent].attitude"></el-rate>
                                </li>
                            </ul>
                            <p class="commentry">中文评语<span>（必填）</span></p>
                            <el-input
                            type="textarea"
                            placeholder="学生课堂表现怎么样，有哪些值得表扬或需要加强的地方，快写下来告诉ta吧~"
                            v-model="studentarr[nowstudent].commentarychinese"
                            maxlength="1000"
                            resize='none'
                            show-word-limit
                            >
                            </el-input>
                            <p class="commentry">英文评语（填写英文评语，可以帮助中文水平明显低于英文水平的学生更好地理解您的点评~）</p>
                            <el-input
                            type="textarea"
                            placeholder="How is the student's performance?What should be praised or strengthens?Tell him/her now~"
                            v-model="studentarr[nowstudent].commentaryenglish"
                            maxlength="1000"
                            resize='none'
                            show-word-limit
                            >
                            </el-input>
                        </div>
                        </template>
                        <template v-if="nowstudent==4">
                            <div class="proposal">
                            <p class="proposaltitle">您觉得这节课对于学生</p>
                            <ul class="proposallist">
                                <li v-for="(item,index) in studentarr[nowstudent].list"
                                :key="item.title"
                                :class="item.flag?'selectpropo':''"
                                @click="selectproposal(index)">
                                    {{item.title}}
                                    
                                </li>
                            </ul>
                            <el-input
                            type="textarea"
                            placeholder="给教研的建议"
                            v-model="proposal"
                            maxlength="1000"
                            show-word-limit
                            class="proposaltext"
                            >
                            </el-input>
                            </div>
                        </template>
                    </div>
            </div>
       </div>
   </el-dialog>
</template>
<script>
    export default {
        props: {
            showfinished: {
                type: Boolean,
                default: false
            },
            studentsData: {
                type: Array,
                default:[
                    {
                        "id":1,
                        "studentName":'StudentA'
                    }
                ]
            }
        },
        components: {
            
        },
        data () {
            return {
               submitflag:false,
               
               value1:4,
               value2:4,
               value3:4,
               proposal:"",//给教研的建议
               nowstudent:0,//当前展示的学生
               proposalsel:"",//选择简单容易
               studentarr:[{
                   name:"studentA",
                   flag:true,
                   mastery:1,//掌握程度
                   progress:2,//进步程度
                   attitude:3,//学习态度
                   commentarychinese:"",//中文评语
                   commentaryenglish:"",//英文评语
               },{
                   name:"studentB",
                   flag:false,
                   mastery:2,//掌握程度
                   progress:3,//进步程度
                   attitude:4,//学习态度
                   commentarychinese:"",//中文评语
                   commentaryenglish:"",//英文评语
               },{
                   name:"studentC",
                   flag:false,
                   mastery:3,//掌握程度
                   progress:4,//进步程度
                   attitude:5,//学习态度
                   commentarychinese:"",//中文评语
                   commentaryenglish:"",//英文评语
               },{
                   name:"studentD",
                   flag:false,
                   mastery:4,//掌握程度
                   progress:5,//进步程度
                   attitude:5,//学习态度
                   commentarychinese:"",//中文评语
                   commentaryenglish:"",//英文评语
               },{
                   name:"给教研的建议",
                   flag:false,
                   commentary:"",//中文评语
                   list:[{title:'较简单',flag:false},
                     {title:'适中',flag:false},
                     {title:'较难',flag:false}],
               }]
            }
        },
        mounted(){
            console.log(this.studentsData);
        },
        methods:{
            selectFn(idx){
                    this.studentarr.forEach((item,i)=>{
                            if(i==idx){
                                this.nowstudent=idx
                                item.flag=true
                            }else{
                                item.flag=false
                            }
                    })
                    this.studentarr.forEach((item,index)=>{
                        console.log(item)
                    })
            },
            selectproposal(idx){//选择学生的容易程度
                 this.studentarr[this.nowstudent].list.forEach((item,index)=>{
                     if(idx===index){
                         item.flag=true
                     }else{
                         item.flag=false
                     }
                 })
            },
            //关闭弹框
            handleClose(){
                this.$emit("hiddenDialogEvent",false);
            }
        }
    }
</script>
<style scoped>
    .dialog-wrap{
        width: 760px;
        height: 540px;
    }
    
    .finixed{
        width:900px;
        height:500px;
        background:rgb(250, 247, 247);
        position:fixed;
        top:50%;
        left:50%;
        margin-left:-380px;
        margin-top:-230px;
        z-index:99999;
        border-radius:20px;
        display:flex;
        flex-direction: column;
    }
    .exceptiontit{
        width:100%;
        height:55px;
        border-bottom:1px solid rgba(0, 0, 0, 0.09);
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .tit{
        font-size:16px;
        color:#000;
        padding-left: 20px;
    }
    .submit{
        margin-right:40px;
    }
    .submitbg{
        padding:5px 30px;
        background:rgba(92,194,208,0.47);
        color:#fff;
        border-radius:3px;
        cursor:pointer;
    }
    .date{
        margin:0 auto;
        padding-left: -20px;
    }
    .date span{
        display:inline-block;
        margin:0 2px;
    }
    .student{
        flex:1;
        display:flex;
        height: 431px;
        overflow:hidden;
    }
    .studentLeft{
        width:140px;
        background:#F8F8F8;
        color:#999999;
        font-size:14px;
    }
    .studentLeft li{
        height:45px;
        line-height:45px;
        padding-left: 20px;
        cursor:pointer;
    }
    .studentLeft .selectli{
        background:#fff;
        color:#333;
    }
    .studentRight{
        flex:1;
        display:flex;
        padding:20px 0;
    }
    .studenttoyou{
        border-right:1px solid #E8E8E8;
        padding:0 20px;
        width: 239px;
    }
    .youtostudent{
        flex:1;
        width: 380px;
        padding:0 20px;
        
    }
    .studenttitle{
        color:#333;
        font-size:14px;
    }
    .list li{
        display:flex;
        align-items:center;
        height:25px;
    }
    .list li .start-tit{
        width: 75px;
        color:#333;
        font-size: 12px;
        margin-right: 10px;
    }
    .commentry{
        color:#333;
        font-size:14px;
        margin:10px 0;
    }
    .proposal{
        margin:0 auto;
    }
    .proposaltitle{
        color:#666;
        margin-bottom:20px;
    }
    .proposallist{
        display:flex;
    }
    .proposallist li{
       padding:0px 20px;
       border:1px solid #555;
       border-radius:20px;
       margin-right:20px;
       color:#666;
       cursor:pointer;
    }
    .proposallist .selectpropo,.submitproposa{
        background: #5CC2D0;
        border:none;
        color:#fff;
    }
</style>