import axios from "axios";

export default {
    getEmojiData() {
        return axios.request({ //获取表情
            method: "get",
            url: "/emoji"
        })
    }
}