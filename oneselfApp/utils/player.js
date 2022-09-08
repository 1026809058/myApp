import store from '../store'
const player = function() {
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.src = '';
	//开始播放
	innerAudioContext.onPlay(() => {
		store.commit('player/playStatus',true)
	});
	//暂停
	innerAudioContext.onPause(() => {
		store.commit('player/playStatus',false)
	});
	innerAudioContext.onError((res) => {
		console.log(res,11);
		console.log(res.errMsg);
		console.log(res.errCode);
	});
	innerAudioContext.onEnded((res) => {
		console.log('自然播放结束');
	});
	innerAudioContext.onStop((res) => {
		console.log('音频停止事件');
	});
	return innerAudioContext
}




export default player
