export default {
    props: ["pageUrl"],
    data() {
        return {
            isMoveTitle: false
        }
    },
    methods: {
        jumpToPage() {
            console.log(1);
            this.$router.push(this.pageUrl);
        },
        details() {
        }
    },
    created() {

    }
}
