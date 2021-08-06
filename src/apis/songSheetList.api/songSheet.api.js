import axios from 'axios';
export default {
    getSongSheetList({ cat, offset, limit }) {
        return axios.request({
            url: "/top/playlist",
            method: "get",
            params: {
                cat,
                offset,
                limit
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