import homeApi from '../../../apis/home.api/home.api';

export default {
    data(){
        return {
            contentItemList:[],//轮播图数据
            currIndex:0,
            isShowArrow:false,
            timer:null
        }
    },
    methods: {
        async getBannerData() {
            const {data: res} = await homeApi.getHomeBannerData();
            this.contentItemList = res.banners;
            this.play();
        },
        changeItemBgc(src) { //更改元素背景图片
            return `background-image:url(${src})`;
        },
        play(){
            this.timer = setInterval(()=>{
                this.nextEvent();
            },3200)
        },
        pause(){
            clearInterval(this.timer);
        },
        setClassName(index) { //生成class name
            let previousIndex = this.currIndex === 0 ? (this.contentItemList.length-1) : this.currIndex - 1;
            let nextIndex = this.currIndex === (this.contentItemList.length-1) ? 0 : this.currIndex + 1;
            switch (index) {
                case this.currIndex:
                    return "activeClass";
                case previousIndex:
                    return "previousClass";
                case nextIndex:
                    return "nextClass";
                default:
                    return "otherClass";
            }
        },
        nextEvent(){
            if(this.currIndex === this.contentItemList.length-1){
                return this.currIndex = 0;
            }
            this.currIndex = this.currIndex + 1;
        },
        preEvent() {
            if (this.currIndex === 0) {
                return this.currIndex = this.contentItemList.length - 1;
            }
            this.currIndex = this.currIndex - 1;
        },
        mouseOverEvent(){
            this.isShowArrow=true;
            this.pause();
        },
        mouseLeveEvent(){
            this.isShowArrow = false;
            this.play();
        },
        showInfoEvent(index) { //点击轮播图元素事件
            if (index === this.currIndex) { //查看或者其他事件
                //do some things
            }
            let previousIndex = this.currIndex === 0 ? (this.contentItemList.length - 1) : this.currIndex - 1;
            let nextIndex = this.currIndex === (this.contentItemList.length - 1) ? 0 : this.currIndex + 1;
            if (index === previousIndex) {
                return this.preEvent();
            } else if (index === nextIndex) {
                return this.nextEvent();
            }
        },
        mouseOverDuto(index){
            this.currIndex = index;
            this.pause();
        },
        mouseLeaveDuto(){
            this.play();
        }
    },
    computed:{
    },
    created(){
        this.getBannerData();
    }
}