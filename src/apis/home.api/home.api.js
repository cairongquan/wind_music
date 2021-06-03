import axios from 'axios';

export default {
    getRecommendMusic() { //每日推荐专辑
        return axios.request({
            url: "/playlist/highquality/tags",
            method: "get"
        })
    },
    getHomeBannerData(){ //获取首页轮播信息
        return axios.request({
            method:"get",
            url:"/banner",
            params:{
                type:0
            }
        })
    }
}