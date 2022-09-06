<template>
	<view class="player">
		<view class="jukebox"><view class="jukebox-poster" :class="{ 'play-begin': $store.state.player.playStatus, 'play-end': !$store.state.player.playStatus }"></view></view>
		<view class="info">info</view>
		<view class="operating">operating</view>
	</view>
</template>

<script>
export default {
	name: 'Player',
	data() {
		return {};
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
		background-color: bisque;
	}
}
</style>
