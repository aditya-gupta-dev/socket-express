import http from 'http';
import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Running on port ${PORT}`));

