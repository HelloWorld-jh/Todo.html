const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
}); // 서버를 띄우기 위한 기본 셋팅(express 라이브러리)

app.get('/pet', function(요청, 응답){
   응답.send('pet welcome page') ;
});
app.get('/beauty', function(요청, 응답){
   응답.send('beauty welcome page') ;
});
app.get('/', function(요청, 응답){
   응답.sendFile(__dirname+'/idnex.html') ;
});