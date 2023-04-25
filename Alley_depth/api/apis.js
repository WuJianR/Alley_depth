import { request } from '../utils/request'

export function listNav() {
	return request({
		url: "/nav/get",
		method: "POST",
	})
}

export function listNews(data) {
	return request({
		url: "/news/get",
		method: "POST",
		data
	})
}

export function listAllNews(data) {
	return request({
		url: "/news/get",
		method: "POST",
		data
	})
}

export function getNewsDetail(data) {
	return request({
		url: "/news/detail",
		method: "POST",
		data
	})
}