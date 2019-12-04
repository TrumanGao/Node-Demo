const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

// get方法实现路由
app.get('/', (req, res)=>{
	fs.readFile(path.resolve('./index.html'), (err, data)=>{
		if(err){
			console.log(err)
			res.statusCode = 500
			res.end('500 - Internal Server Error!')
			return
		}
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')
		res.end(data)
	})
})

// listen方法实现监听
app.listen(2000)