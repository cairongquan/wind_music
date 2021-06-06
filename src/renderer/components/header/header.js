import { ipcRenderer, remote } from 'electron';
export default {
    data() {
        return {
            headerLogo: require("./header_logo.png")
        }
    },
    methods: {
        closeWindowEvent() { //关闭窗口事件
            ipcRenderer.send('close-window');
        },
        miniWindowEvent() { //缩小窗口事件
            ipcRenderer.send('min-window');
        },
    }
}