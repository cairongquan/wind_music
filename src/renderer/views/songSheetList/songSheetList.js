const fs = require("fs");
const path = require('path');

import tools from "../../../libs/tools"
import songSheetListApi from "../../../apis/songSheetList.api/songSheet.api";
import { createDeflate } from "zlib";

export default {
    data() {
        return {
            activeTag: "全部", //当前tag
            tagDataArray: [],//tag数据
            form: {
                cat: "全部",
                offset: 0,
                limit: 50,
            },
            songSheetListData: [], //歌单数据
            itemWidth: 210,//列宽度
            renderData: [],//页面渲染数据
            bannerData: [],
            activeBannerIndex: 0, //活动banner图index
            tranlateStr: "translateY(0px)",
            totalSongListLength: 0,//歌单长度
        }
    },
    methods: {
        //banner图事件
        async getBannerData() { //生成banner 数据
            const bannderTagArray = ["华语", "流行", "摇滚", "民谣", "电子", "轻音乐", "影视原声", "ACG"];
            for (let i = 0; i < bannderTagArray.length; i++) {
                const { data: res } = await songSheetListApi.getSongSheetBannerData(bannderTagArray[i]);
                this.bannerData.push(res.playlists[0]);
            };
        },
        jumpToBanner(index) { //点击跳转bannerItem

            this.tranlateStr = `translateX(${-(12.5 * index)}%)`
            this.activeBannerIndex = index;
        },
        //歌单主题生成
        getEmojiData() { //创建tag数据 顶部筛选数据
            const textArray = ["欧美", "华语", "流行", "说唱", "摇滚", "民谣", "电子", "轻音乐", "影视原声", "ACG", "怀旧", "治愈", "旅行"];
            const emojiArray = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json"), 'utf-8'));
            textArray.forEach((item, index) => {
                this.tagDataArray.push({
                    tagName: item,
                    emoji: emojiArray[index].url
                });
            });
        },
        async getSongSheetList() { //获取歌单列表
            this.form.offset = 0;
            const { data: res } = await songSheetListApi.getSongSheetList(this.form);
            this.songSheetListData = res.playlists;
            this.songSheetListData.forEach(item => {
                item["domHeight"] = tools.getRandomIntInclusive(130, 180);
            });
            this.totalSongListLength = res.total;
            this.createWaterfallData();
        },
        createWaterfallData() { //生成瀑布流数据
            const mainBoxWidth = document.querySelector("#main-out-songSheetList").offsetWidth;
            const column = Math.ceil(mainBoxWidth / 180);
            this.renderData = [];
            for (let i = 0; i < column - 1; i++) {
                this.renderData.push([]);
            }
            this.songSheetListData.forEach(item => {
                this.renderData[this.countMinHeightIndex()].push(item);
            });
        },
        countMinHeightIndex() { //计算当前高度最小列index
            let heightArray = [];
            this.renderData.forEach(item => {
                let height = 0;
                item.forEach(childItem => {
                    height += childItem.domHeight;
                });
                heightArray.push(height);
            });
            let tempArray = heightArray;
            let minIndex = heightArray[0];
            let finalIndex = 0;
            heightArray.forEach((item, index) => {
                if (item < minIndex) {
                    minIndex = item;
                    finalIndex = index;
                }
            });
            return finalIndex;
        },
        chooseTagEvent(tagName) { //切换tag事件
            this.activeTag = tagName;
            this.form.cat = this.activeTag;
            this.getSongSheetList();
        },
        showSongSheetInfo(id) { //跳转歌单详情
            this.$router.push(`/songSheet/${id}`)
        },
        createDate(date) {
            return tools.DateFormatNumG(date, "Y-M-D");
        },
        async showMoreSongSheetBtnEvent() { //展示更多按钮点击事件
            this.form.offset += 50;
            const { data: res } = await songSheetListApi.getSongSheetList(this.form);
            const moreSongList = res.playlists.map(item => {
                item["domHeight"] = tools.getRandomIntInclusive(130, 180);
                return item;
            });
            this.totalSongListLength = res.total;
            moreSongList.forEach(item => {
                this.renderData[this.countMinHeightIndex()].push(item);
            })
        }
    },
    created() {
        window.onresize = () => {
            this.createWaterfallData();
        }
        this.getSongSheetList();
        this.getEmojiData();
        this.getBannerData();
    }
}
