import publicApi from "../../../apis/public.api/public.api";

export default {
    props: {
        commitData: {
            type: Array
        }
    },
    methods: {
        async getEmojiDataEvent() {
            const { data: emojiData } = await publicApi.getEmojiData();
            console.log(emojiData);
        }
    },
    created() {
        console.log(this.commitData, '1111111');
    }
}