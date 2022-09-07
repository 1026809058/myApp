const state = {
	//歌曲播放状态
	playStatus: true,
	//播放列表
	playlist: [],
	//播放模式 0:列表循环,1:随机播放,2:单曲循环
	playModel: 0,
	//当前播放音乐信息
	

}
const getters = {}
const mutations = {
	playStatus(state, val) {
		state.playStatus = val
	},
	playModel(state, val) {
		switch (state.playModel) {
			case 0:
				state.playModel = 1
				break;
			case 1:
				state.playModel = 2
				break;
			case 2:
				state.playModel = 0
				break;
			default:
				state.playModel = 0

		}
	},
}
const actions = {}
export default {
	state,
	getters,
	mutations,
	actions
}
