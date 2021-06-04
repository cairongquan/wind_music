import homeApi from "../../../apis/home.api/home.api";
export default{
    data() {
        return {
          limit: 3,
          list: [],
        };
      },
      methods: {
        //获取独家歌曲
        async getExclusiveCast() {
          const { data: res } = await homeApi.getExclusiveCast(this.limit);
          this.list = res.result;
          console.log(res, "11111");
        },
      },
      created() {
        this.getExclusiveCast();
      },
}