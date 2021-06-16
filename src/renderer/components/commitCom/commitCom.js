import publicApi from "../../../apis/public.api/public.api";
import tools from "../../../libs/tools";

export default {
    props: {
        commitData: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            emojiData: [],//表情数据
        }
    },
    methods: {
        async getEmojiDataEvent() {
            const { data: emojiData } = await publicApi.getEmojiData();
            this.emojiData = emojiData;
        },
        echoContent(val, name) { //格式化评论
            if (!val) {
                console.log(name);
                return "被删除"
            }
            val = val.replace(/\[|]/g, '')
            this.emojiData.data.forEach(item => {
                val = val.replace(new RegExp(`${item.emjName}`, 'g'), `<img style="margin: 0px 2px; width: 16px; height: 16px; vertical - align: middle; " src="${item.path} "/>`);
            });
            return `<span class="fn-name" style=" color: #74acdc;cursor: pointer;margin-right:10px;">${name}:</span>${val}`;
        },
        dateFormat(val) {
            return tools.DateFormatNumG(val, "Y/M/D H:i");
        }
    },
    computed: {

    },
    created() {
        this.getEmojiDataEvent();
    }
}