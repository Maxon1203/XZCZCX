
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const { exec } = require('child_process');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/dist', express.static(__dirname + '/dist'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
server.listen(5000, function() {
    console.log('Запускаю сервер на порте 5000');
});


const {Client} = require('pg');
const db = new Client({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port: 5432,
    database:"pp"
});

db.connect();

io.on('connection', function(socket) {
    socket.on('logIn',function(masLogIn){
        let str_tmp= 'INSERT INTO public."user"(login, password, offical) VALUES (' + String.fromCharCode(39)  + masLogIn[0] + String.fromCharCode(39) + ',' + String.fromCharCode(39) + masLogIn[1] + String.fromCharCode(39) + ',' + String.fromCharCode(39) + masLogIn[2] + String.fromCharCode(39) +');'
        db.query(str_tmp , (err, data) => {
            if (err) 
                throw new Error(err);
            
            db.end(); 
            socket.emit('GoNext'); 
        });   
    });     
});
