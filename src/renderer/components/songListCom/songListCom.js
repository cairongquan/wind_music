export default {
    props: {
        songListData: {
            type: Array
        }
    },
    data() {
        return {
            // 0 歌曲图片列表 1歌曲名称列表
            mode: 0,//展示列模式
        }
    },
    methods: {
        macthDateEvent(ms) {
            let min = parseInt(ms / 60000) < 10 ? '0' + parseInt(ms / 60000) : parseInt(ms / 60000);
            let sec = parseInt((ms % 60000) / 1000) < 10 ? '0' + parseInt((ms % 60000) / 1000) : parseInt((ms % 60000) / 1000);
            return `${min}:${sec}`;
        }
    },
    created() {
        console.log(this.songListData, '111111');
    }
}