const fs = require("fs");
const path = require('path');
export default {
    data() {
        return {
            activeTag: {}, //当前tag
            tagDataArray: [],//tag数据
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
                })
            });
        },
    },
    created() {
        this.getEmojiData();
    }
}
