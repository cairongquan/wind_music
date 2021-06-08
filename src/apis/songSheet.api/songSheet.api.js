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
    getDynamicInfo(id) { //获取歌单详情数据
        return axios.request({
            url: "/playlist/detail/dynamic",
            method: "get",
            params: {
                id
            }
        })
    },
    getSongSheetComment(id, limit) { //获取歌单评论列表数据
        return axios.request({
            url: "/comment/playlist",
            method: "get",
            params: {
                id,
                limit
            }
        })
    }
}