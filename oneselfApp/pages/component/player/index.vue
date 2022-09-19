<template>
	<view class="player">
		<view class="jukebox"><view class="jukebox-poster" :class="{ 'play-begin': $store.state.player.playStatus, 'play-end': !$store.state.player.playStatus }"></view></view>
		<view class="info">
			<text class="info-song">{{ '十年人間' }}</text>
			-
			<text class="info-singer">{{ '李常超' }}</text>
		</view>
		<view class="operating">
			<view class="operat-play"><uni-icons custom-prefix="iconfont" :type="playIconType" size="25" color="#fff" @click="playAudio"></uni-icons></view>
			<view class="operat-list">
				<uni-icons custom-prefix="iconfont" type="icon-24gf-playlist3" size="25" color="#fff" @click="openPause"></uni-icons>
				<uni-popup ref="popupList" type="bottom">
					<view class="popup-list">
						<view class="list-title">
							<text>当前播放（{{ list.length }})首</text>
						</view>
						<view class="list-operation">
							<view class="operation-loop"><uni-icons custom-prefix="iconfont" :type="loopIconType" size="25" color="#fff" @click="loopBtn"></uni-icons></view>
							<view class="operation-right"><uni-icons custom-prefix="iconfont" type="icon-shanchu" size="25" color="#fff" @click="clearList"></uni-icons></view>
						</view>
						<view class="list-song_list"><list-tag></list-tag></view>
					</view>
				</uni-popup>
			</view>
		</view>
	</view>
</template>

<script>
import listTag from '@/pages/component/player/listTag.vue';
export default {
	name: 'Player',
	components: {
		listTag
	},
	data() {
		return {
			show: false,
			list: [
				{
					song: '十年人間',
					singer: '李常超',
					id: 1
				},
				{
					song: '十年人間',
					singer: '李常超',
					id: 2
				}
			]
		};
	},
	computed: {
		playIconType() {
			let type = 'icon-zanting';
			this.$store.state.player.playStatus ? (type = 'icon-zanting') : (type = 'icon-bofang');
			return type;
		},
		loopIconType() {
			let type = 'icon-xunhuanbofang';
			switch (this.$store.state.player.playModel) {
				case 0:
					type = 'icon-xunhuanbofang';
					break;
				case 1:
					type = 'icon-suijibofang2';
					break;
				case 2:
					type = 'icon-danquxunhuan';
					break;
				default:
			}
			return type;
		}
	},
	watch: {},
	created() {},
	methods: {
		//清空播放列表
		clearList() {},
		//播放模式
		loopBtn() {
			this.$store.commit('player/playModel');
		},
		//播放列表弹窗
		openPause() {
			this.$refs.popupList.open('bottom');
		},
		//播放，暂停
		playAudio() {
			this.$store.state.player.playStatus ? this.$player.pause() : this.$player.play();
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~@/static/style/mixin.scss';
$player-height: 80rpx;
.player {
	height: $player-height;
	width: 100%;
	display: flex;
	background-color: rgb(23, 1, 58);
	color: #fff;

		position: absolute;
		bottom: 0;
		z-index: 999;
	.jukebox {
		width: 80rpx;
		height: 80rpx;
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
		line-height: $player-height;
		padding: 0 15rpx;

		.info-song {
			margin-right: 10rpx;
		}

		.info-singer {
			font-size: 10rpx;
			margin-left: 10rpx;
		}
	}

	.operating {
		width: 200rpx;

		.operat-play {
			width: 50%;
			height: 100%;
			float: left;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.operat-list {
			width: 50%;
			height: 100%;
			float: left;
			display: flex;
			align-items: center;
			justify-content: center;

			.popup-list {
				height: 60vh;
				width: auto;
				background-color: #000;
				position: relative;
				bottom: 20rpx;
				margin: 50rpx;
				border-radius: 25rpx;
				padding: 20rpx 30rpx 0;

				.list-title {
					margin-top: 20rpx;
				}

				.list-operation {
					width: 100%;
					height: 60rpx;
					margin: 10rpx auto;
					.operation-loop {
						float: left;
					}
					.operation-right {
						float: right;
					}
				}

				.list-song_list {
				}
			}
		}
	}
}
</style>
