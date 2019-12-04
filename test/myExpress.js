// 实现一个简版express
let router = [] // 用于保存路由

const http = require('http')
const url = require('url')

class Aplication {
	// get方法实现路由
	get(path, handler) {
		router.push({
			path,
			method: 'get',
			handler
		})
	}

	// listen方法实现监听
	listen() {
		// 创建一个httpServer服务器
		http.createServer((req, res) => {
			// 逻辑:遍历路由,找到匹配path,执行对应handler函数
			let {pathname} = url.parse(req.url, true)
			
			for(let route of router){
				if(route.path === pathname){
					route.handler();
					return
				}
			}
		}).listen(...arguments) // listen可以传回调,所以不写死
	}
}


module.exports = function () {
	return new Application()
}