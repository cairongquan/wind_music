import homeApi from "../../../apis/home.api/home.api.js"
export default {
    data() {
        return {
            reMuisicData: [],//歌曲数据
            limit: 12,//获取歌曲数量
        }
    },
    methods: {
        async getReMusicData() { //获取每日歌曲事件
            const { data: res } = await homeApi.getReMusicData(this.limit);
            res.result.forEach(item => { //生成歌曲真实名称
                item['isShowPlayIcon'] = false;
                if (item.song.alias.length != 0) {
                    item["realName"] = `(${item.song.alias[0]})`;
                } else {
                    item["realName"] = "";
                }
                if (item.song.artists.length == 1) {
                    item['realArtistsName'] = item.song.artists[0].name;
                } else {
                    let tempNameStr = "";
                    item.song.artists.forEach((itemName, index) => {
                        if (index == item.song.artists.length - 1) {
                            tempNameStr += itemName.name;
                        } else {
                            tempNameStr += `${itemName.name}/`
                        }
                    })
                    item["realArtistsName"] = tempNameStr;
                }

            });
            this.reMuisicData = res.result;
        }
    },
    created() {
        this.getReMusicData();
    }
}