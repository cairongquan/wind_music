import homeApi from "../../../apis/home.api/home.api";

export default {
    data() {
        return {
            limit: 12,
            list: [],

        }
    },
    methods: {
        showImgs(item) {
            item.isShowIcon = true;
            this.$refs.musicBox.style = "filter: blur(2px);";
        },
        hiddenImgs(item) {
            item.isShowIcon = false;
            this.$refs.musicBox.style = "filter: blur(0);";
        },
        details() {
        },
        //获取推荐歌单
        async getRecommend() {
            const {data: res} = await homeApi.getRecommend(this.limit);
            res.result.forEach(item => {
                item['isShowIcon'] = false;
            })
            this.list = res.result;
            // console.log(res);
        },
        jumpToSheetInfoEvent(item) {
            this.$router.push(`/songSheet/${item.id}`);
        }
    },
    created() {
        this.getRecommend();
    }
}