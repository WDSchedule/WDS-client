import { createRouter, createWebHistory } from 'vue-router';

// 导入组件
import LoginVue from '@/views/Login.vue';
import LayoutVue from '@/views/Layout.vue';
import SummaryVue from '@/views/schedule/summary.vue';
import InfoVue from '@/views/user/info.vue';
import scheduleListVue from '@/views/schedule/scheduleList.vue'


// 定义访问路径和组件的关系
const routes = [
    { path: '/login', component: LoginVue },
    {
        path: '/', component: LayoutVue,
        children: [
            { path: '/schedule/summary', component: SummaryVue },
            { path: '/user/info', component: InfoVue },
            { path: '/schedule/list', component: scheduleListVue }
        ]
    }
]

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// 导出路由
export default router;