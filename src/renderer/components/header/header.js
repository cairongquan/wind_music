import { ipcRenderer, remote } from 'electron';

export default {
    data() {
        return {
            headerLogo: require("./header_logo.png"),
            prowerWithLove: require("./prowWithLove.png"),
            isFocus: false,
            isShowSeachList: false,
            seachValue: "",
            seachList: []
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
        },
        blurSeachEvent() {
            this.isFocus = false;
            // this.isShowSeachList = false
        },
        focusSeachEvent() {
            this.isFocus = true;
            this.isShowSeachList = true;
        },
        async seachInputInputEvent(e) {
            if (!this.seachValue.trim()) {
                this.seachList = [];
                return;
            }
            const { data: resolve } = await this.$http.get("/cloudsearch", {
                params: {
                    keywords: this.seachValue,
                    limit: 6,
                    type: 1
                }
            });
            this.seachList = resolve.result.songs;
        },
        showItemInfoEvent(val) {
            this.$store.commit("changeMusicInfoHandle", val);
        },
    },
    created() {
        document.body.addEventListener("click", (e) => {
            const className = e.target.className;
            if (className !== 'songItemLi' && !this.isFocus) {
                this.isShowSeachList = false;
            }
        }, true)
    }
}