import songSheetApi from "../../../apis/songSheet.api/songSheet.api"
import tools from "@/libs/tools.js"

export default {
    data() {
        return {
            collectionPersonNum: 12,//收藏人数
            songSheetData: {},//专辑信息数据对象
            descriptionStrHeight: 22,//歌单简介高度
            descriptionStrRealHeight: null,//歌单简介实际宽度
            pullIcon: "icon-xiala1",//下拉icon字符串
            isShowPullIcon: false,//是否展示下拉icon
            songDataList: [],//歌曲数据
            commitArrayData: [],//评论歌单数据
            activeSongListIndex: 0,//当前激活歌单索引
            songIdsArray: [],//歌曲ids二维数组
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
            this.createIdsArray(res.playlist.trackIds);
            this.getSonSheetDynamic();
        },
        createIdsArray(array) { //生成ids二维数组
            let tempIdsArray = array.map(item => item.id), tempArray = [];
            for (let i = 0; i < tempIdsArray.length; i++) {
                if (tempArray.length === 20) {
                    this.songIdsArray.push([tempArray.join(",")]);
                    tempArray = [];
                    tempArray.push(tempIdsArray[i]);
                } else {
                    tempArray.push(tempIdsArray[i]);
                }
            };
            if (tempArray.length != 0) {
                this.songIdsArray.push([tempArray.join(",")]);
            };
            this.getSongData();
        },

        async getSongData() { //获取歌曲信息列表
            const { data: musicDetailData } = await songSheetApi.getDetailSong(...this.songIdsArray[this.activeSongListIndex]);
            this.songDataList.push(...musicDetailData.songs);
            this.activeSongListIndex += 1;
        },
        async getSonSheetDynamic() { //获取歌单评论
            const { data: commitArrayData } = await songSheetApi.getSongSheetComment(this.id, this.songSheetData.playlist.commentCount > 50 ? 50 : this.songSheetData.playlist.commentCount);
            this.commitArrayData = commitArrayData;
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
        },
        getMoreSongDataList() {
            this.getSongData();
        },
        // windowResizeEvent() {
        //     if (this.descriptionStrHeight)
        //         this.descriptionStrRealHeight = this.$refs.descriptionBox.scrollHeight;
        // }
    },
    created() {
        window.onresize = this.windowResizeEvent;
        this.getSongSheetData();
    },
}
