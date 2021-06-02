import axios from 'axios';

export default {
    getRecommendMusic() { //每日推荐专辑
        return axios.request({
            url: "/playlist/highquality/tags",
            method: "get"
        })
    }
}