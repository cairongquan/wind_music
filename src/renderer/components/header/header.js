import { ipcRenderer, remote } from 'electron';

export default {
    data() {
        return {
            headerLogo: require("./header_logo.png"),
            prowerWithLove: require("./prowWithLove.png"),
        }
    },
    methods: {
        closeWindowEvent() { //关闭窗口事件
            ipcRenderer.send('close-window');
        },
        miniWindowEvent() { //缩小窗口事件
            ipcRenderer.send('min-window');
        },
        backArrowBtnEvent() { //返回按钮
            const currentRouter = this.$route.path;
            const historyRouterList = this.$store.state.Counter.routerHistory;
            const index = historyRouterList.findIndex(item => item === currentRouter);
            if (index === 0) {
                return;
            } else {
                this.$router.push({
                    path: historyRouterList[index - 1]
                })
            }
        },
        preArrowBtnEvent() {
            const currentRouter = this.$route.path;
            const historyRouterList = this.$store.state.Counter.routerHistory;
            const index = historyRouterList.findIndex(item => item === currentRouter);
            if (index === historyRouterList.length - 1) {
                return;
            } else {
                this.$router.push({
                    path: historyRouterList[index + 1]
                })
            }
        }
    }
}