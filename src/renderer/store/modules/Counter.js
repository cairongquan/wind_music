const state = {
  isPlaySong: false, //是否有歌曲信息
  musicInfo: {
  },
  routerHistory: [],//历史路由
}

const mutations = {
  changeMusicInfoHandle(state, val) {
    state.musicInfo = val;
    state.isPlaySong = true;
  },
  setHistoryArray(state, val) {
    state.routerHistory.push(val);
  },
  clearHistoryArray(state, val) {
    state.routerHistory = [];
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
