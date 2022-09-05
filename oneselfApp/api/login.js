import request from '@/utils/request.js'
// export const login = {
// 	login(data) {
// 		return request({
// 			url: '/login/cellphone',
// 			data: data
// 		})
// 	}
// }
export const login = function(data) {
	return request({
		url: '/login/cellphone',
		method:'GET',
		data: data
	})


}
