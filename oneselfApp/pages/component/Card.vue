<template>
	<view class="card" :style="{height:cardHight}">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'Card',
	props:{
		height:{
			type:Number|String,
			default:50
		}
	},
	data() {
		return {
		};
	},
	computed:{
		cardHight(val){
			console.log(val.height);
			return typeof val.height==="string"?val.height:val.height+'rpx'
		}
	},
	created(){},
	onLoad() {;
	},

	methods: {}
};
</script>

<style lang="scss" scoped>
	.card{
		border-radius: 15rpx;
		padding: 10rpx;
		background-color: rgba(41, 43, 45, 0.3);
	}
</style>
