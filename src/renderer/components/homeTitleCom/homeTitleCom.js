export default {
    props: ["pageUrl"],
    data() {
        return {
            isMoveTitle: false
        }
    },
    methods: {
        jumpToPage() {
            this.$router.push(this.pageUrl);
        },
        details() {
        }
    },
    created() {

    }
}
