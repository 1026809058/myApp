<template>
	<view class="list">
		<uni-list :border="false">
			<uni-list-item>
				<!-- 自定义 header -->
				<template v-slot:header>
					<view class="play_AE">
						<view class="play_AE-nth"></view>
						<view class="play_AE-nth"></view>
						<view class="play_AE-nth"></view>
					</view>
				</template>
				<!-- 自定义 body -->
				<template v-slot:body>
					<view class="song-info"></view>
					歌曲信息
				</template>
				<!-- 自定义 footer-->
				<template v-slot:footer>
					<view class="remove"><uni-icons custom-prefix="iconfont" type="icon-guanbi" size="10" color="#fff" @click="openPause"></uni-icons></view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
export default {
	name: 'listTag',
	props: {
		listInfo: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
::v-deep .uni-list {
	color: #fff;
	background-color: transparent;
	.uni-list-item {
		background-color: transparent;
		.uni-list-item__container {
			padding-left: 0;
		}
	}
}
.list {
	color: #000;
	.song-info {
		width: auto;
	}
	.remove {
		position: absolute;
		right: 0;
	}
}

.play_AE {
	margin-right: 20rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 20rpx;
}

.play_AE-nth {
	width: 3rpx;
	height: 20rpx;
	background-color: #3cefff;
}

.play_AE-nth:nth-of-type(1) {
	animation: grow 1s -0.45s ease-in-out infinite;
}

.play_AE-nth:nth-of-type(2) {
	animation: grow 1s -0.3s ease-in-out infinite;
}

.play_AE-nth:nth-of-type(3) {
	animation: grow 1s -0.15s ease-in-out infinite;
}

@keyframes grow {
	0%,
	100% {
		transform: scaleY(1);
	}

	50% {
		transform: scaleY(2);
	}
}
</style>
