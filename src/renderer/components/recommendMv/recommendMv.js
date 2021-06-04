import homeApi from "../../../apis/home.api/home.api"
export default {
    data() {
        return {
            reMvDataList: [],
        }
    },
    methods: {
        async getReMvData() { //获取推荐mv数据
            const { data: res } = await homeApi.getReMv();
            console.log(res);
            res.result.forEach(item => {
                item['isShowMask'] = false;
            })
            this.reMvDataList = res.result;
        },
        changeBgcImage(src) {
            return `url(${src})`;
        }
    },
    created() {
        this.getReMvData();
    }
}