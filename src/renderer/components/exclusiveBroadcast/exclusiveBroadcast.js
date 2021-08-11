import homeApi from "../../../apis/home.api/home.api";

export default {
    data() {
        return {
            limit: 6,
            list: [],
            currentIndex: 0, //当前第一个index
            transtionStr: "translateX(0px)", //自变量边偏移距离
            timer: null,//计时器
            finalArrayLength: 0,
        };
    },
    methods: {
        async getExclusiveCast() {        //获取独家歌曲
            const { data: res } = await homeApi.getExclusiveCast(this.limit);
            res.result.forEach(item => {
                item["isShowIcon"] = false;
            })
            this.list = res.result;
            this.finalArrayLength = this.list.length - 2;
        },
        play() {
            this.timer = setInterval(() => {
                if (this.currentIndex === this.list.length - 3) {
                    this.currentIndex = 0;
                    return this.toEvent();
                }
                this.currentIndex++;
                this.toEvent();
            }, 4500);
        },
        toEvent() {
            this.transtionStr = `translateX(-${this.currentIndex * 362}px)`;
        },
        pase() {
            clearInterval(this.timer);
        },
        jumpEvent(item) {
            this.pase();
            this.currentIndex = item - 1;
            this.toEvent();
        },
        leaveEvent() {
            this.play();
        },
        itemMouseOver(index) {
            this.pase();
            this.list[index].isShowIcon = true;
        },
        itemMouseLeave(index) {
            this.play();
            this.list[index].isShowIcon = false;
        }
    }
    ,
    created() {
        this.getExclusiveCast();
        this.play();
    },
}