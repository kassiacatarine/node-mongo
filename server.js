const http = require('http'),
    express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.end('Hello World');
});

app.listen(3000);