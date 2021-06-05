import songSheetApi from "../../../apis/songSheet.api/songSheet.api"

export default {
    data() {
        return {
            collectionPersonNum: 8,//收藏人数
            songSheetData: {},//专辑信息数据对象
        }
    },
    props: {
        "id": {
            type: String
        }
    },
    methods: {
        async getSongSheetData() { //获取歌单详情
            const {data: res} = await songSheetApi.getSongSheetInfo(this.id, this.collectionPersonNum);
            this.songSheetData = res;
            console.log(this.songSheetData);
        }
    },
    created() {
        console.log(this.id);
        this.getSongSheetData();
    }
}