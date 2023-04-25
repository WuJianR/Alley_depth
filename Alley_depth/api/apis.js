import { request } from '../utils/request'

export function listNav() {
	return request({
		url: "/nav/get",
		method: "POST",
	})
}

export function listNews() {
	return request({
		url: "/news/get",
		method: "POST",
		data: {
			limit: 5,
      hot: true
		}
	})
}