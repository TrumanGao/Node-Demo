const originRequest = require('request') // 请求库，用于发送https请求

const cheerio = require('cheerio') // 类似服务端的jquery

const iconv = require('iconv-lite') // 解码库

function request(url, callback){
    const options = {
        url,
        encoding: null // 设置对返回值不解码，直接用Buffer数据(该配置项视目标网站数据编码格式而定)
    }
    originRequest(url, callback)
}

for(let i = 100570; i < 100580; i++) {
    const url = 'https://www.dy2018.com/i/${i}.html'

    request(url, function(err, res, body){
        console.log('获取的buffer',body)
        // const html = iconv.decode(body, 'gb2312') // body即返回的buffer；电影天堂编码格式是gb2312，所以必须用对应方式解码

        // const $ = cheerio.load(html)

        // console.log($('.title_all h1').text())
    })
}