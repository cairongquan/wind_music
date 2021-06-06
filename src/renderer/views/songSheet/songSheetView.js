import songSheetApi from "../../../apis/songSheet.api/songSheet.api"
import tools from "@/libs/tools.js"
export default {
    data() {
        return {
            collectionPersonNum: 10,//收藏人数
            songSheetData: {},//专辑信息数据对象
            descriptionStrHeight: 20,//歌单简介高度
            descriptionStrRealHeight: null,//歌单简介实际宽度
            pullIcon: "icon-xiala1",//下拉icon字符串
            isShowPullIcon: false,//是否展示下拉icon
            songDataList: [],//歌曲数据
        }
    },
    props: {
        "id": {
            type: String
        }
    },
    methods: {
        async getSongSheetData() { //获取歌单详情
            const { data: res } = await songSheetApi.getSongSheetInfo(this.id, this.collectionPersonNum);
            this.songSheetData = res;
            this.$nextTick(() => { //计算歌曲详情高度
                this.descriptionStrRealHeight = this.$refs.descriptionBox.scrollHeight;
                this.descriptionStrRealHeight == this.descriptionStrHeight ? this.isShowPullIcon = false : this.isShowPullIcon = true;
            });
            console.log(res, '歌单信息');
            this.getSongData(res.playlist.trackIds);
        },
        async getSongData(ids) { //获取歌曲信息列表
            const { data: musicDetailData } = await songSheetApi.getDetailSong(ids);
            this.songDataList = musicDetailData.songs;
            console.log(this.songDataList, '歌曲列表数据');
        },
        DateFormatNumG(time, fmt) { //时间戳转换
            const t = new Date(time)
            // 日期格式
            fmt = fmt || 'Y-M-D H:I:S'

            const hash = {
                'y': t.getFullYear(),
                'm': t.getMonth() + 1,
                'd': t.getDate(),
                'h': t.getHours(),
                'i': t.getMinutes(),
                's': t.getSeconds()
            }
            // 是否补 0
            const isAddZero = (o) => {
                return /M|D|H|I|S/.test(o)
            }
            return fmt.replace(/\w/g, o => {
                let rt = hash[o.toLocaleLowerCase()]
                return rt > 10 || !isAddZero(o) ? rt : `0${rt}`
            })
        },
        unitChangeEvent(num) {
            return tools.changeUnit(num);
        },
        back() {
            this.$router.go(-1);
        },
        pullContentEvent() { //下拉歌曲简介盒子icon 点击事件
            if (this.pullIcon == "icon-shang") {
                this.descriptionStrHeight = 20;
                return this.pullIcon = 'icon-xiala1';
            }
            this.descriptionStrHeight = this.descriptionStrRealHeight;
            this.pullIcon = "icon-shang"
        }
    },
    created() {
        this.getSongSheetData();
    },
}