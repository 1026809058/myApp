<template>
	<view class="home">
		<view class="nav-bar">
			<uni-icons class="side_btn" type="settings-filled" size="30" color="rgba(252,252,252,0.5)"></uni-icons>
			<view class="search"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navBarHight: ''
		};
	},
	onLoad() {
		uni.getSystemInfoSync({
			success: res => {
				console.log(res);
			}
		});
	},

	methods: {}
};
</script>

<style scoped lang="scss">
.home {
	height: 100%;
}
.nav-bar {
	padding-top: var(--status-bar-height);
	display: flex;
	.side_btn {
		width: 100rpx;
	}
	.search {
		width: calc(100% - 30rpx);
		height: 50rpx;
		border-radius: 25rpx;
		background-color: rgba(252, 252, 252, 0.3);
		margin: 15rpx 15rpx;
	}
}
</style>
