import axios from 'axios';

export default {
    getSongSheetInfo(id, s) { //获取歌单详情
        return axios.request({
            url: "/playlist/detail",
            method: "get",
            params: {
                id,
                s
            }
        })
    }
}