const net = require("net");
const name = 'TDT';
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log('Connection established');
    conn.write(`Name: ${name}`);
    conn.write(`Say: SSSnake Noises`);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};