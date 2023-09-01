const http = require('http');
const express = require('express');
const ws = require('ws');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const webSocket = new ws.Server({ server });

webSocket.on('connection', (socket, request) => {
    console.log('new connection');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

server.listen(PORT, () => console.log(`Running on -> http://localhost:${PORT} ...`));

