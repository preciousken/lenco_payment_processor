require('dotenv').config();

const http = require('https');

const options = {
  method: 'GET',
  hostname: 'api.lenco.ng',
  port: null,
  path: '/access/v1/accounts',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.LENCO_API_KEY}`
  }
};


const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
