import homeApi from '../../../apis/home.api/home.api.js'

export default {
    data() {
        return {

        }
    },
    methods: {
        async getRecommendMusicSheet() { //获取今日推荐专辑
            const { data: res } = await homeApi.getRecommendMusic();
            console.log(res);
        }
    },
    created() {
        this.getRecommendMusicSheet();
    }
}