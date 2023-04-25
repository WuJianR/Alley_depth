// 数量格式化
export function formatNum(num) {
	num = num.toString()
	if(num.length < 4) {
		return num
	}else if(num.length < 5) {
		// 千
		let subNum = num.slice(-3,-2)
		let preNum = num.slice(0, -3)
		return preNum + '.' + subNum + 'k'
	}else {
		// 万
		let subNum = num.slice(-4,-3)
		let preNum = num.slice(0, -4)
		return preNum + '.' + subNum + 'w'
	}
}

// 时间戳转日期格式
export function formatDate(date) {
	const dateObj = new Date(date)
	const year = dateObj.getFullYear()
	const month = dateObj.getMonth() + 1
	return year + '-' + month
}