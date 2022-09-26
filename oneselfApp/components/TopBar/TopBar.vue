<template>
	<view class="top-bar ground-glass" id="navBar">
		<view class="top-bar_left" v-if="left"><slot name="left"></slot></view>
		<view class="top-bar_conten"><slot></slot></view>
		<view class="top-bar_right" v-if="right"><slot name="right"></slot></view>
	</view>
</template>
<script>
export default {
	props: {
		left: {
			type: Boolean,
			default: true
		},
		right: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {};
	},
	created() {},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#navBar')
			.boundingClientRect(data => {
				this.statusbarHeight = data.height + 'px';
				console.log('得到布局位置信息' + JSON.stringify(data));
				console.log('节点离页面顶部的距离为' + data.top);
			})
			.exec();
	},
	methods: {}
};
</script>
<style scoped lang="scss">
@import '~@/static/style/mixin.scss';
.top-bar {
	padding-top: var(--status-bar-height);
	display: flex;
	position: fixed;
	width: 100%;
	height: 100rpx;
	background-color: rgba(41, 43, 45, 0.3);
	z-index: 999;
	.top-bar_left {
		height: 100%;
		line-height: 100rpx;
		width: 100rpx;
		text-align: center;
	}
	.top-bar_conten {
		flex: 1;
	}
	.top-bar_right {
		height: 100%;
		line-height: 100rpx;
		width: 100rpx;
		text-align: center;
	}
}
.ground-glass{
	 @include  ground-glass(2)
}
</style>
