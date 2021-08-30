import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index";

Vue.use(Router)

const router = new Router({
    routes: [
        // {
        //     path: "/",
        //     redirect: "/allSongSheet"
        // },
        { //主页
            path: '/',
            name: 'home',
            component: require('@/renderer/views/home/home.vue').default,
            meta: {
                keepAlive: true
            }
        },
        {
            //专辑详情页面
            path: '/songSheet/:id',
            props: true,
            name: "songSheet",
            component: require('../views/songSheet/songSheetView.vue').default,
            meta: {
                keepAlive: false
            }
        },
        {
            //所有歌单
            path: "/allSongSheet",
            name: "allSongSheet",
            component: require("../views/songSheetList/songSheetList.vue").default,
            meta: {
                keepAlive: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    let historyRouters = store.state.Counter.routerHistory;
    store.commit("setHistoryArray", to.path);
    next();
})

export default router;