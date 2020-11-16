/**
 * Created by aresn on 19/2/14.
 */
import 'babel-polyfill';
// import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import './styles/index.less';

// import iView from './iview/iview.js';
// 如果用下面的导入，provide / inject 会有问题，但编译后正常
// import iViewPro from '../src/index';

Vue.use(VueRouter);
// Vue.use(iView);
// Vue.use(iViewPro);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/count-down',
            component: (resolve) => require(['./routers/count-down.vue'], resolve)
        },
        {
            path: '/trend',
            component: (resolve) => require(['./routers/trend.vue'], resolve)
        },
        {
            path: '/ellipsis',
            component: (resolve) => require(['./routers/ellipsis.vue'], resolve)
        },
        {
            path: '/number-info',
            component: (resolve) => require(['./routers/number-info.vue'], resolve)
        },
        {
            path: '/numeral',
            component: (resolve) => require(['./routers/numeral.vue'], resolve)
        },
        {
            path: '/avatar-list',
            component: (resolve) => require(['./routers/avatar-list.vue'], resolve)
        },
        {
            path: '/city',
            component: (resolve) => require(['./routers/city.vue'], resolve)
        },
        {
            path: '/description-list',
            component: (resolve) => require(['./routers/description-list.vue'], resolve)
        },
        {
            path: '/exception',
            component: (resolve) => require(['./routers/exception.vue'], resolve)
        },
        {
            path: '/copy',
            component: (resolve) => require(['./routers/copy.vue'], resolve)
        },
        {
            path: '/grid',
            component: (resolve) => require(['./routers/grid.vue'], resolve)
        },
        {
            path: '/login',
            component: (resolve) => require(['./routers/login.vue'], resolve)
        },
        {
            path: '/count-up',
            component: (resolve) => require(['./routers/count-up.vue'], resolve)
        },
        {
            path: '/notification',
            component: (resolve) => require(['./routers/notification.vue'], resolve)
        },
        {
            path: '/result',
            component: (resolve) => require(['./routers/result.vue'], resolve)
        },
        {
            path: '/footer-toolbar',
            component: (resolve) => require(['./routers/footer-toolbar.vue'], resolve)
        },
        {
            path: '/tag-select',
            component: (resolve) => require(['./routers/tag-select.vue'], resolve)
        },
        {
            path: '/tree-select',
            component: (resolve) => require(['./routers/tree-select.vue'], resolve)
        },
        {
            path: '/page-header',
            component: (resolve) => require(['./routers/page-header.vue'], resolve)
        },
        {
            path: '/directives',
            component: (resolve) => require(['./routers/directives.vue'], resolve)
        },
        {
            path: '/filters',
            component: (resolve) => require(['./routers/filters.vue'], resolve)
        },
        {
            path: '/animation',
            component: (resolve) => require(['./routers/animation.vue'], resolve)
        },
        {
            path: '/scroll-into-view',
            component: (resolve) => require(['./routers/scroll-into-view.vue'], resolve)
        },
        {
            path: '/word-count',
            component: (resolve) => require(['./routers/word-count.vue'], resolve)
        },
        {
            path: '/table-paste',
            component: (resolve) => require(['./routers/table-paste.vue'], resolve)
        },
        {
            path: '/global-footer',
            component: (resolve) => require(['./routers/global-footer.vue'], resolve)
        },
        {
            path: '/auth',
            component: (resolve) => require(['./routers/auth.vue'], resolve)
        },
        {
            path: '/calendar',
            component: (resolve) => require(['./routers/calendar.vue'], resolve)
        },
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
