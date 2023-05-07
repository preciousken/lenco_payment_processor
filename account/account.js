// const express = require('express');
// const app = express()

const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, PORT } = process.env



try {
const options = {
  method: 'GET',
  hostname: LENCO_HOSTNAME,
  port: null,
  path: '/access/v1/accounts',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${LENCO_API_KEY}`
  }
};

const fetchData = ()=>{
  return new Promise((resolve,reject)=>{
    const req = http.request(options, function (res) {
      let data = '';
    
      res.on('data', function (chunk) {
        data += chunk;
      });
    
      res.on('end', function () {
       resolve(JSON.parse(data))
      });
    });
    req.on('error',(error)=>{
      reject(error)
    })
    
    req.end();
  })
}

fetchData().then(res=>{
  console.log(res);
  return;
}).catch(err=>{
  console.log(err);
  return;
})

} catch (error) {
  console.log(error);
}