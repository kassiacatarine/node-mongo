const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case url !== '':
            res.write('Pesquisar com a url: ' + url);
            break;
        default:
            res.write('Pesquisar sem valor na url: ' + url);
            break;
    }
});

server.listen(3000);