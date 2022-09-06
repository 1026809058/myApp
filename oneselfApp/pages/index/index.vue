<template>
	<view class="home">
		<view class="nav-bar" id="navBar">
			<uni-icons custom-prefix="iconfont" class="side_btn" type="icon-xunhuanbofang" size="30" color="rgba(252,252,252,0.5)"></uni-icons>
			<view class="search">
				{{ defaultSearch }}
				<uni-icons custom-prefix="iconfont" class="side_btn" type="icon-sousuo" size="20" color="rgba(252,252,252,0.5)"></uni-icons>
			</view>
		</view>
		<view class="content">
			<view class="content-vessel" id="contentVessel" :style="{ marginTop: statusbarHeight }">
				<!-- <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
					<swiper-item><view class="swiper-item uni-bg-green">B</view></swiper-item>
					<swiper-item><view class="swiper-item uni-bg-blue">C</view></swiper-item>
				</swiper> -->
			</view>
		</view>
		<view class="player-con">
			<Player></Player>
		</view>
	</view>
</template>

<script>
import Card from '@/pages/component/Card.vue';
import Player from '@/pages/component/player/index.vue'
export default {
	components: { Card,Player },
	data() {
		return {
			
			//搜索框显示文字
			defaultSearch: '默认搜索',
			//顶部栏高度
			statusbarHeight: '20rpx',
			//系统信息
			getSystemInfo: {}
		};
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
	onLoad() {
		let getSystemInfo = uni.getStorageSync('getSystemInfo');
		this.getSystemInfo = JSON.parse(getSystemInfo);
	},

	methods: {}
};
</script>

<style scoped lang="scss">
@import '~@/static/style/mixin.scss';
.home {
	height: 100%;
}
.nav-bar {
	padding-top: var(--status-bar-height);
	display: flex;
	position: fixed;
	width: 100%;
	height: 100rpx;
	background-color: rgba(41, 43, 45, 0.3);
	.side_btn {
		width: 100rpx;
	}
	.search {
		width: calc(100% - 30rpx);
		height: 60rpx;
		border-radius: 25rpx;
		background-color: rgba(212, 212, 212, 0.3);
		margin: 15rpx 15rpx;
		color: rgb(245, 247, 249);
		font-size: 20rpx;
		text-align: center;
		line-height: 50rpx;
	}
}
.content {
		@include background-img('~@/static/img/vinyl_record.png',50%,80%,no-repeat);
	position: fixed;
	height: calc(100% - 100rpx);
	width: 100%;
	.content-vessel {
		height: 500rpx;
		overflow-y: auto;
	}
}
.player-con{
	width: 100%;
	position: absolute;
	bottom: 0;
	z-index: 999;
}
</style>
