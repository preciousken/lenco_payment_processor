// const express = require('express');
// const app = express()

const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, PORT } = process.env



const options = {
  method: 'GET',
  hostname: 'api.lenco.ng',
  port: null,
  path: '/access/v1/accounts',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer xo+CAiijrIy9XvZCYyhjrv0fpSAL6CfU8CgA+up1NXqK'
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