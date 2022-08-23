import {
	baseURL,
	contentType,
	requestTimeout,
	successCode,
	tokenName,
} from '@/config'
import store from '@/store'
import qs from 'qs' // 处理data

// 操作正常Code数组
const codeVerificationArray = isArray(successCode) ? [...successCode] : [...[successCode]],
const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + options.url, //接口地址：前缀+方法中传入的地址
			method: options.method || 'GET', //请求方法：传入的方法或者默认是“GET”
			data: options.data || {}, //传递参数：传入的参数或者默认传递空集合
			responseType: options.responseType: 'arraybuffer',
			headers: {
				'Content-Type': contentType,
			},
			//设置请求头token
			const token = store.getters['user/accessToken']
			if (token) options.headers[tokenName] = token,
			//超时设置
			timeout: requestTimeout,
			success: (res) => {
				//返回的数据（不固定，看后端接口，这里是做了一个判断，如果不为true，用uni.showToast方法提示获取数据失败)
				// if (res.data.success != true) {
				// 	return uni.showToast({
				// 		title: '获取数据失败',
				// 		icon: 'none'
				// 	})
				// }
				// 如果不满足上述判断就输出数据
				resolve(res)
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				console.log(err)
				reject(err)
			}
		})
	})
}
export default request
