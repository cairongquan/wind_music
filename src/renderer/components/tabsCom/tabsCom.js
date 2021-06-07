export default {
    props: {
        tabsData: {
            type: Array,
        }
    },
    data() {
        return {
            defaultIndex: 0,//默认激活菜单
            offSetLeftArray: [],//左移数据盒子盒子
        }
    },
    methods: {
        matchItemBox() { //计算滑条滚动距离
            this.$nextTick(() => {
                this.offSetLeftArray = this.$refs.itemBox.map((item, index) => item.offsetLeft + this.$refs.fatherItem[index].offsetLeft - 25);
                console.log(this.offSetLeftArray);
            });
        },
        changeItemIndex(index) {
            console.log(index * 100);
            this.defaultIndex = index;
        }
    },
    created: function () {
        console.log(this.tabsData);
        this.matchItemBox();
    }
}