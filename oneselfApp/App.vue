<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
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
	uni.hideTabBar()
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
