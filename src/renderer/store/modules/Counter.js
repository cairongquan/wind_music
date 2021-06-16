const state = {
  isPlaySong: false, //是否有歌曲信息
  musicInfo: {
  },
}

const mutations = {
  changeMusicInfoHandle(state, val) {
    state.musicInfo = val;
    state.isPlaySong = true;
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
