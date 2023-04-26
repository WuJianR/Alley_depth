import { request } from '../utils/request'

// 获取茶种类导航列表
export function listNav() {
	return request({
		url: "/nav/get",
		method: "POST",
	})
}

// 获取新闻列表
export function listNews(data) {
	return request({
		url: "/news/get",
		method: "POST",
		data
	})
}

// 获取新闻列表
export function listAllNews(data) {
	return request({
		url: "/news/get",
		method: "POST",
		data
	})
}

// 获取新闻详情页
export function getNewsDetail(data) {
	return request({
		url: "/news/detail",
		method: "POST",
		data
	})
}

// 获取具体茶的产品列表
export function getProductList(data) {
	return request({
		url: "/product/getlist",
		method: "POST",
		data
	})
}

// 获取具体茶的产品列表
export function getProductDetail(data) {
	return request({
		url: "/product/detail",
		method: "POST",
		data
	})
}