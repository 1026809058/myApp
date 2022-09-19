import request from '@/utils/request.js'


//获取每日推荐歌曲
export const songsDaily = function(data) {
	return request({
		url: '/recommend/songs',
		method:'GET'
	})
}
//获取每日推荐歌单
export const resourceDaily = function(data) {
	return request({
		url: '/recommend/resource',
		method:'GET'
	})
}
//获取所有榜单
export const toplist = function(data) {
	return request({
		url: '/toplist',
		method:'GET'
	})
}
