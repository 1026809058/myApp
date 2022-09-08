<script>
export default {
	data(){
		return{
			
		}
	},
	onLaunch: function() {
		// this.$player.src='http://m801.music.126.net/20220907221810/dd1b4e8e4a8401109ac8488d515ad57d/jdyyaac/525b/5552/0059/e1cd06bdd0b80d79e3d473e4d2ff1e86.m4a'
		// this.$player.src='http://m701.music.126.net/20220907221900/cd2f66ed49196ba218040ceaff6ec834/jdyyaac/025f/010e/5358/55be419a516d15356363d21bdc96cd59.m4a'
		this.$player.src='https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'
		// console.log(this.$player);
		// this.$player.play()
		console.log('当uni-app 初始化完成时触发（全局只触发一次）');
	},

	onShow: function() {
		if(!uni.getStorageSync('getSystemInfo')){
			uni.getSystemInfo({
				success: (res) => {
					let value=JSON.stringify(res)
					uni.setStorageSync('getSystemInfo', value);
				},
				fail:(err)=>{
					console.log(err);
				},
				complete:(c)=>{
					console.log(c);
				}
				
			});
			
				
		}
			
	//隐藏官方的tabBar
	// uni.hideTabBar()
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "./static/fontIcon/iconfont.css";
@import './static/style/global.scss';
</style>
