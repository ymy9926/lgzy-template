import Vue from 'vue'
import Router from 'vue-router'
import { saveToLocal, loadFromLocal } from '@/common/js/store'
import Login from '@/components/Login/login'
import Register from '@/components/Login/Register'
import Index from '@/components/index/index'

import Allcourses from '@/components/allcourses/Allcourses' //全部课程
import AssignmentCenter from '@/components/assignmentcenter/AssignmentCenter' //作业中心
import Classroom from '@/components/classroom/Classroom' //课堂
import CommonProblem from '@/components/commonproblem/CommonProblem' //常见问题
import CoursewareResources from '@/components/coursewareresources/CoursewareResources' //课件资源
import Download from '@/components/download/Download' //软件下载
import ExtendedCourseware from '@/components/extendedcourseware/ExtendedCourseware' //扩展课件
import MyRemuneration from '@/components/myremuneration/MyRemuneration' //我的课酬
import MyStudent from '@/components/mystudent/MyStudent' //我的学生
import PublishTime from '@/components/publishtime/PublishTime' //发布时间
import TeacherTraining from '@/components/teachertraining/TeacherTraining' //教师培训

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'index',
      component: Index,
      children: [
        { path: 'allcourses', name: 'allcourses', component: Allcourses },
        { path: 'assignmentcenter', name: 'assignmentcenter', component: AssignmentCenter },
        { path: 'classroom', name: 'classroom', component: Classroom },
        { path: 'commonproblem', name: 'commonproblem', component: CommonProblem },
        { path: 'coursewareresources', name: 'coursewareresources', component: CoursewareResources },
        { path: 'download', name: 'download', component: Download },
        { path: 'extendedcourseware', name: 'ExtendedCourseware', component: ExtendedCourseware },
        { path: 'myremuneration', name: 'myremuneration', component: MyRemuneration },
        { path: 'mystudent', name: 'mystudent', component: MyStudent },
        { path: 'publishtime', name: 'publishtime', component: PublishTime },
        { path: 'teachertraining', name: 'teachertraining', component: TeacherTraining }
      ], redirect: 'classroom'
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  //console.log(to); // 到哪个页面去？
  //console.log(from); // 从哪个页面来？
  let info = router.app.$options.store.state.user;
  const local = loadFromLocal('login_info', 'user', null);
  console.log(to);
  if (info.isLogin) {
    if (to.query.redirect) {
      next(redirect);
    } else {
      next();
    }

  } else if (local) {
    info.user = local;
    info.isLogin = true;
    next();
  } else if (to.path == '/login') {
    next();
  }
  else if (!info.isLogin) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  } else {
    next();
  }

})

export default router