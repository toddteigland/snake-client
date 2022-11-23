const net = require("net");
const name = 'TDT';

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,  
  });

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect',() => {
  console.log('Connection established');  
  })

  conn.on("connect", () => {
    conn.write(`Name: ${name}`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
}