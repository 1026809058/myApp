//只要是未登录状态，想要跳转到名单内的路径时，直接跳到登录页。

import { login } from "../api/login";

// 页面白名单，不受拦截
const whiteList = [
	'/pages/login/index',
	'/pages/index/index',
	'/pages/index/search/index',
]
function hasPermission(url) {
	let islogin=uni.getStorageSync('userInfo');
	islogin = !!islogin; //返回布尔值
	
		console.log(whiteList.indexOf(url),33333333);
	// 在白名单中或有登录判断条件可以直接跳转
	if (whiteList.indexOf(url) !== -1 || islogin) {
		return true
	}
	return false
}
uni.addInterceptor('navigateTo', {
	// 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
	invoke(e) {
		if (!hasPermission(e.url)) {
			uni.navigateTo({
				url: '/pages/login/index'
			})
			return false
		}
		return true
	},
	success(args) {
		console.log(66666);
    // 请求成功后，修改code值为1
    // args.data.code = 1
	},
	 fail(err) {
	    console.log('interceptor-fail',err)
	  }, 
	  complete(res) {
	    console.log('interceptor-complete',res)
	  }
})
uni.addInterceptor('switchTab', {
	// tabbar页面跳转前进行拦截
	invoke(e) {
		if (!hasPermission(e.url)) {
			uni.navigateTo({
				url: '/pages/login/index'
			})
			return false
		}
		return true
	},
	success(args) {
		console.log(66666);
    // 请求成功后，修改code值为1
	},
	 fail(err) {
	    console.log('interceptor-fail',err)
	  }, 
	  complete(res) {
	    console.log('interceptor-complete',res)
	  }
})
