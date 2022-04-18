//https://www.npmjs.com/package/express
https://www.npmjs.com/package/cors

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();




