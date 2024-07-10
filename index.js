var express = require('express');
var path = require('path'); // path 모듈 추가

var app = express();

// 정적 파일 제공 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log('Server is running on port 8080...');
});
