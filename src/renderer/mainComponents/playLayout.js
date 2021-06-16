export default {
    data() {
        return {
            songData: null, //音乐信息
            songUrl: "",//音乐播放路径
        }
    },
    computed: {
        getSongData() {
            return this.$store.state.Counter.musicInfo;
        }
    },
    watch: {
        getSongData(val) {
            console.log(val);
        }
    },
    created() {
        this.songData = this.$store.state.Counter.musicInfo;
    },
}