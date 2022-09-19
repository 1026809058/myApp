<template>
	<view class="search">
		<TopBar :right="false">
			<uni-icons slot="left"custom-prefix="iconfont" class="back_btn" type="icon-a-Frame217" size="30" color="rgba(252,252,252,0.5)"></uni-icons>
		</TopBar>
		<Player></Player>
	</view>
</template>

<script>
import Player from '@/pages/component/player/index.vue';
export default {
	components: { Player },
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.search {
	.back_btn{
		text-align: center;
	}
}
</style>
