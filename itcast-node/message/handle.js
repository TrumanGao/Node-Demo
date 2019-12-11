const fs = require('fs');

exports.showIndex = (req, res) => {
    // 读取数据
    fs.readFile('./data.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        res.render('index.html', { items: data.items });

    })
}

exports.showEdit = (req, res) => {
    res.render('publish.html');
}

exports.showForm = (req, res) => {
    // 获取表单数据 req 本身没有请求体
    // console.log(req.body)   是一个对象
    const body = req.body;
    // 向数组中追加新数据
    fs.readFile('./data.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        data.items.unshift(body);
        // 向本地写入数据
        data = JSON.stringify(data);
        fs.writeFile('./data.json', data, (err) => {
            // 回到列表页 服务端重定向
            res.redirect('/');
        });
    });
}
