<template>
	<view class="search">
		<TopBar class="search-top_bar">
			<uni-icons slot="left" custom-prefix="iconfont" class="back_btn" type="icon-a-Frame217" size="30"
			@click="backBtn"
				color="rgba(252,252,252,0.5)"></uni-icons>
			<uni-easyinput v-model="searchValue" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="请输入内容"
				@input="input"></uni-easyinput>
				<text slot="right" class="sub_btn">搜索</text>
		</TopBar>
		<view class="search-content">
			<view class="search-content_result">
				
			</view>
			<view class="search-content_prompt">
				
			</view>
		</view>
		<Player></Player>
	</view>
</template>

<script>
	import Player from '@/pages/component/player/index.vue';
	export default {
		components: {
			Player
		},
		data() {
			return {
				//搜索内容
				searchValue:''
			};
		},
		methods:{
			//返回按钮
			backBtn(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.search {
		.search-top_bar{
		}
		.back_btn {
			text-align: center;
		}
		.sub_btn{
			color: #fff;
		}
	}
</style>
