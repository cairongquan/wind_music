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
                limit: 100
            },
            songSheetListData: [], //歌单数据
            itemWidth: 210,//列宽度
            renderData: [],//页面渲染数据
        }
    },
    methods: {
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
            const { data: res } = await songSheetListApi.getSongSheetList(this.form);
            this.songSheetListData = res.playlists;
            this.songSheetListData.forEach(item => {
                item["domHeight"] = tools.getRandomIntInclusive(150, 265);
            })
            this.createWaterfallData();
        },


        createWaterfallData() { //生成瀑布流数据
            const mainBoxWidth = document.querySelector("#main-out-songSheetList").offsetWidth;
            const column = Math.floor(mainBoxWidth / 220);
            this.renderData = [];
            for (let i = 0; i < column - 1; i++) {
                this.renderData.push([]);
            }
            this.songSheetListData.forEach(item => {
                this.renderData[this.countMinHeightIndex()].push(item);
            });
            console.log(this.renderData);
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


        createDate(date) {
            return tools.DateFormatNumG(date, "Y-M-D");
        }
    },
    created() {
        this.getSongSheetList();
        this.getEmojiData();
    }
}
