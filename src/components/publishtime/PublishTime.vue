<template>
 <div class="releasetime">
     <div class="top">
         <el-button-group>
             <el-button size="medium"
              v-for="(item,index) in tabtype"
              :key="item.title"
              :type="item.flag?'primary':''"
              @click="tabtime(index)"
             >{{item.title}}</el-button>
         </el-button-group>
         <p><i class="el-icon-warning"></i>请您务必提前24小时发布黄色被预占时间，以免学生不能正常上课</p>
         <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                日程模板<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="using">使用模板</el-dropdown-item>
                <el-dropdown-item command="editdemo">编辑模板</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        <el-button size="medium" type="primary">发布时间</el-button>
     </div>
     <table border="1" cellspacing="0">
        <tr 
        v-for="(time,timeidx) in timeslot"
        :key='time'
        >
             <td
             v-for="(date,dateidx) in tableweek"
             :key="date"
             >
                 {{dateidx==0&&timeidx!=0?time:""}}
                 {{dateidx==0&&timeidx==0?"时间":""}}
                 {{timeidx==0?date:""}}
                 {{timeidx==0?weekdate[dateidx]:''}}
             </td>
        </tr>
     </table>
 </div>
</template>
<script>
   export default {
        components: {
            
        },
        data () {
            return {
               tabtype:[{//tab标题
                   title:"上周",
                   flag:false
               },{
                   title:"回到本周",
                   flag:true
               },{
                   title:"下周",
                   flag:false
               }],
               timeslot:[""],
               tableweek:["","周一","周二","周三","周四","周五","周六","周日"],
               changeWeek:[],
               currentFirstDate:new Date(),
               clen:7,
               weekdate:[""],//上一周下一周
               weeknum:0,//当前一周该传的参数
               weekcount:0
            }
        },
        created(){
                this.timeFn()//计算时间
                this.lastclick()//本周
                console.log(this.weekdate,'本周')
        },
        methods:{
            tabtime(idx){//切换上周下周回到本周
               this.tabtype.forEach((item,index)=>{//改变高亮
                    if(idx===index){
                        item.flag=true;
                    }else{
                        item.flag=false;
                    }
               })
               if(idx==0){
                   alert('上周');
                   this.weeknum=-7;
                   this.lastclick();
                   --this.weekcount;
               }
               else if(idx==1){
                   alert('回到本周')
                   this.weeknum=0-(this.weekcount*7);
                   this.weekcount=0;
                   this.lastclick();
               }
               else if(idx==2){
                   alert('下周')
                   this.weeknum=7;
                   this.lastclick();
                   ++this.weekcount
               }
            },
            getStartTime(hour, minute){//开始时间
                var startTime = new Date();
                startTime.setHours(hour);
                startTime.setMinutes(minute);
                return ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2)
            },
            timeFn(){//计算左侧边栏的时间
                var minute_array = ['0', '30'];
                for(var hour=0;hour<=23;hour++){
                    for(var m=0;m<minute_array.length;m++){
                        var minute=minute_array[m];
                        if(hour==23&&minute=='30'){
                            continue;
                        }
                        var start_time = this.getStartTime(hour, minute);
                        var end_time=this.getEndTime(hour,minute,55);
                        this.timeslot.push(start_time+'-'+end_time)
                        console.log(this.timeslot)
                    }
                }
            },
            getEndTime(hour, minute, duration) {//计算结束时间
                var startTime = new Date();
                startTime.setHours(hour);
                startTime.setMinutes(minute);
                var endTime = new Date(startTime.getTime() + duration*60000);
                return ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2)
            },
            formatDate(date){             
                var month = (date.getMonth()+1)+'月';
                var day = date.getDate()+'日';
                return month+day;
            }, 
            setDateFn(date){     //上下周
                    var weekDayArr=[""];
                    var week = date.getDay()-1;
                    date = this.addDate(date,week*-1);
                    this.currentFirstDate = new Date(date);
                    for(var i = 0;i<this.clen; i++){ 
                        weekDayArr.push(this.formatDate(i==0 ? date : this.addDate(date,1)))
                    }     
                    return weekDayArr;    
            },
            addDate(date,n){  
                date.setDate(date.getDate()+n);   
                return date;
             }, 
            //上周/本周/下周 
            lastclick(){
                this.weekdate=[""];
                this.weekdate=this.setDateFn(this.addDate(this.currentFirstDate,this.weeknum));  
            },
            handleCommand(command){
               if(command=="using"){//使用模板
                  alert('使用模板')
               }
               else{//编辑模板
                   this.$router.push('/editdemo')
               }
            }
        }
  }
</script>
<style lang="stylus" scoped>
   .releasetime{
       width:100%;
       height:100%;
       display:flex;
       flex-direction: column;
   }
   .top{
       margin-bottom:20px;
       width:100%;
       height:50px;
       display:flex;
       justify-content: space-around;
       align-items:center;
       p{
           font-size:14px;
           color:#666;
       }
   }
   table{
       flex:1;
       width:100%;
       height:100%;
   }
   table tr{
       width:100%;
       height:30px;
       display:flex;
       justify-content: space-around;
   }
   table tr td{
       width:15%;
       line-height:30px;
       text-align:center;
   }
   
</style>