<template>
   <div class="exception">
       <div class="exceptiontit">
           <p class="tit">异常结束授课</p>
           <p class="date">
               <span>2019.10.16(周三)</span>
               <span>11:00-11:55</span>
               <span>高级版</span>
               <span>Level2</span>
               <span>Lesson16</span>
           </p>
           <p class='submit'>
              <span :class="result?'submitover':'submitbg'" @click='submit()'>提交</span>
           </p>
       </div>
       <div class="reason">
            <ul class="resonlist">
                 <li
                 v-for="(item,index) in resonarr"
                 :key="item.title"
                 @click="resonFn(index)"
                 :class="item.flag?'selectreson':''"
                 >{{item.title}}</li>
            </ul>
            <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="1000"
            show-word-limit
            class="textareatext"
            >
            </el-input>
        </div>   
   </div>
</template>
<script>
   export default {
        components: {
            
        },
        data () {
            return {
                textarea:"",
                resonarr:[{
                    title:"学生未出席",
                    flag:false
                },{
                    title:"学生设备或网络故障",
                    flag:false
                },{
                    title:"老师设备或网络故障",
                    flag:false
                },{
                    title:"其他原因"
                }],
                result:""
            }
        },
        methods:{
            resonFn(idx){
                this.resonarr.forEach((item,i)=>{
                    if(i==idx){
                        this.result=item.title;
                        item.flag=true;
                    }
                    else{
                        item.flag=false;
                    }
                })
            },
            submit(){
                if(this.result){
                    alert('提交数据')
                    this.$emit('exceptionnone',false)
                }
            }
        }
  }
</script>
<style scoped>
    .exception{
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
        background:#eee;
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .tit{
        padding:16px 40px;
        background:#666;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        color:#fff;
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
    .date span{
        display:inline-block;
        margin:0 2px;
    }
    .reason{
        flex:1;
        display:flex;
        flex-direction: column;
        overflow-y:auto;
        align-items: center;
    }
    .resonlist{
        display:flex;
        margin:20px 0;
        height:35px;

    }
    .resonlist li{
        padding:5px 25px;
        background:#fff;
        border:1px solid rgb(153,153,153);
        color:rgb(102,102,102);
        margin:0 5px;
        border-radius:20px;
        cursor:pointer;
    }
    .textareatext{
        width:75%;
    }
    .submitover{
        background:#5CC2D0;
        padding:5px 30px;
        color:#fff;
        border-radius:3px;
        cursor:pointer;
}
    .resonlist .selectreson{
        background:#5CC2D0;
        color:#fff;
        border:none;
    }
</style>