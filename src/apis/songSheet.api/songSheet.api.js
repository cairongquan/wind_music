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
    },
    getDetailSong(trackIds) { //获取歌单所有歌曲详情
        return axios.request({
            url: "song/detail",
            method: "GET",
            params: {
                ids: trackIds
            }
        })
    },
}