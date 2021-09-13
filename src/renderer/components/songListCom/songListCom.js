import { mapMutations } from 'vuex'
export default {
    props: {
        songListData: {
            type: Array
        },
        total: {
            type: Number
        },
    },
    data() {
        return {
            // true 歌曲图片列表 false歌曲名称列表
            mode: false,//展示列模式
            modeIconnName: "icon-liebiao"
        }
    },
    methods: {
        macthDateEvent(ms) { //毫秒转分
            let min = parseInt(ms / 60000) < 10 ? '0' + parseInt(ms / 60000) : parseInt(ms / 60000);
            let sec = parseInt((ms % 60000) / 1000) < 10 ? '0' + parseInt((ms % 60000) / 1000) : parseInt((ms % 60000) / 1000);
            return `${min}:${sec}`;
        },
        changeMode() {
            this.mode = !this.mode;
            this.modeIconnName = this.mode ? "icon-liebiao1" : "icon-liebiao";
        },
        tapSongEvent(val) {
            console.log(val);
            this.$store.commit("changeMusicInfoHandle", val);
        },
        showMoreSongList() {
            this.$emit("getMoreSongDataList");
        }
    },
    created() {
        console.log(this.total, 'total');
    }
}