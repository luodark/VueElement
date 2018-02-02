import Vue from 'vue'
import VueRouter from 'vue-router'

/* 页面文件 */
import IndexPage from '../index.vue'
import Login from '../FunctionPage/Login/Login.vue'
import Home from '../CommonPage/Home.vue'
import Form from '../FunctionPage/Form.vue'
import Table from '../FunctionPage/Table.vue'
import NotFound from '../CommonPage/404.vue'
/* 页面文件 */

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',
        children: [
        { path: '/', component: IndexPage,name:"首页"},
        { path: '/SubRouter/Form', component: Form,name:"表单"},
        { path: '/Table', component: Table,name:"表格"},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-star-on',
        leaf: true,//只有一个节点
        children: [
        { path: '/page1', component: Form, name: '导航二' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'el-icon-setting',
        children: [
        { path: '/page2', component: Table, name: '页面4', hidden:true},
        { path: '/page3', component: Table, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-message',
        leaf: true,//只有一个节点
        children: [
        { path: '/page4', component: Table, name: '导航四', hidden:true}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
    ]
});

/* 钩子函数，进入页面前判断是否登录， */
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' ,query: { redirect: to.fullPath }})//把要跳转的地址作为参数传到下一步
    } else {
        next()
    }
})

export default router;