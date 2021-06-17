const fs = require("fs");
const path = require('path');
export default {
    data() {
        return {
            tagDataArray: []
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
            console.log(this.tagDataArray);
        },
    },
    created() {
        this.getEmojiData();
    }
}
