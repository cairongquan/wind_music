// 播放界面模块
/*
    播放模块页面组件
    date:2021-09-01
*/
export default {
    data() {
        return {
            isPlay: false,//播放状态 true:播放中 false:暂停
            musicInfo: null,
            playPath: ""
        }
    },
    methods: {
        playEvent() {
            this.$refs["audioDom"].play();
        }
    },
    computed: {
        getMusicInfo() {
            return this.$store.state.Counter.musicInfo;
        }
    },
    watch: {
        getMusicInfo(val) {
            this.musicInfo = val;
            console.log(this.musicInfo);
            this.playPath = `https://music.163.com/song/media/outer/url?id=${this.musicInfo.id}.mp3`;
        }
    },
    created() {

    }
}