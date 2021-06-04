import axios from 'axios';

export default {
    getRecommendMusic() { //每日推荐专辑
        return axios.request({
            url: "/playlist/highquality/tags",
            method: "get"
        })
    },
    getHomeBannerData() { //获取首页轮播信息
        return axios.request({
            method: "get",
            url: "/banner",
            params: {
                type: 0
            }
        })
    },
    getReMusicData(limit) { //获取每日推荐新歌
        return axios.request({
            method: "get",
            url: "/personalized/newsong",
            params: {
                limit
            }
        })
    },
    getRecommend(limit) {//获取推荐歌单
        return axios.request({
            method: 'get',
            url: '/personalized',
            params: {
                limit,
            }
        })
    },
    getExclusiveCast(limit) {//获取独家放送
        return axios.request({
            method: 'get',
            url: '/personalized/privatecontent/list',
            params: {
                limit,
            }
        })
    },
    getReMv() { //获取推荐Mv
        return axios.request({
            method: "get",
            url: "/personalized/mv",
        })
    }
}