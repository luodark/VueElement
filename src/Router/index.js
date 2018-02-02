import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../index.vue'
import Form from '../Form.vue'
import Table from '../Table.vue'
import Login from '../Login.vue'
import Home from '../Home.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
    {
        path: '/login',
        component: Login,
    },
    {
    	path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/', component: IndexPage },
            { path: '/xxx/Form', component: Form},
            { path: '/Table', component: Table},
        ]
    }
    ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router;