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
            if (this.isPlay) {
                this.$refs["audioDom"].pause();
            } else {
                this.$refs["audioDom"].play();
            }
            this.isPlay = !this.isPlay;
        }
    },
    computed: {
        getMusicInfo() {
            return this.$store.state.Counter.musicInfo;
        },
        songEndEvent() {
            // console.log(1);
        }
    },
    watch: {
        getMusicInfo(val) {
            this.isPlay = true;
            this.musicInfo = val;
            this.playPath = `https://music.163.com/song/media/outer/url?id=${this.musicInfo.id}.mp3`;
            setTimeout(() => {
                this.$refs["audioDom"].play();
            }, 30)
        }
    },
    created() {
        this.$refs["audioDom"].ended = this.songEndEvent;
    }
}