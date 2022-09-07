<template>
	<view class="player">
		<view class="jukebox"><view class="jukebox-poster" :class="{ 'play-begin': $store.state.player.playStatus, 'play-end': !$store.state.player.playStatus }"></view></view>
		<view class="info">info</view>
		<view class="operating">
			<view class="operat-play">
					<uni-icons custom-prefix="iconfont"  :type="playIconType" size="30" color="rgba(252,252,252,0.5)" @click="playAudio"></uni-icons>
			</view>
			<view class="operat-list">
					<uni-icons custom-prefix="iconfont"  type="icon-24gf-playlist3" size="30" color="rgba(252,252,252,0.5)"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'Player',
	data() {
		return {
		};
	},
	computed:{
		playIconType(){
			let type='icon-zanting'
			this.$store.state.player.playStatus?type='icon-zanting':type='icon-bofang'
			return type
		}
	},
	watch:{},
	created() {
	},
	methods:{
		playAudio(){
			this.$store.state.player.playStatus?this.$player.pause():this.$player.play()
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~@/static/style/mixin.scss';
$player-height: 100rpx;
.player {
	height: $player-height;
	width: 100%;
	display: flex;
	.jukebox {
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		@include background-img('~@/static/img/vinyl_record.png', 50%, 80%, no-repeat);
		.jukebox-poster {
			width: 55%;
			height: 55%;
			background-color: antiquewhite;
			border-radius: 50%;
			@include background-img('~@/static/img/timg6.jpg');
			
		}
	}
	.play-begin {
		animation: playing 5s linear infinite;
		animation-fill-mode: forwards;
	}
	//调用该class将会暂停动画效果
	.play-end {
		animation: playing 5s linear infinite;
		animation-play-state: paused;
	}
	@-webkit-keyframes playing {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	.info {
		flex: 1;
		background-color: aquamarine;
	}
	.operating {
		width: 200rpx;
		.operat-play{
			width: 50%;
			height: 100%;
			float: left;
			text-align: center;
			
		}
		.operat-list{
			width: 50%;
			height: 100%;
			float: left;
		}
	}
}
</style>
