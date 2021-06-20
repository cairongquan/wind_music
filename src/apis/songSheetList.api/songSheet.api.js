import axios from 'axios';
export default {
    getSongSheetList({ cat, limit }) {
        return axios.request({
            url: "/top/playlist",
            method: "get",
            params: {
                cat,
                limit,
            }
        })
    },
    getSongSheetBannerData(cat) {
        return axios.request({
            url: "/top/playlist/highquality",
            method: "get",
            params: {
                cat,
                limit: 1
            }
        })
    }
}