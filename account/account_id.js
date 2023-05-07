// const express = require('express');
// const app = express()

const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, LENCO_ACCOUNT_UUID } = process.env


//>>>>> Retrieve information about a specific bank account
try {
  
const options = {
  method: 'GET',
  hostname: LENCO_HOSTNAME,
  port: null,
  path: `/access/v1/account/${LENCO_ACCOUNT_UUID}`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${LENCO_API_KEY}`
  }
};

const fetchData = () =>{
  return new Promise((resolve,reject)=>{
    const req = http.request(options, function (res) {
     let data = '';
    
      res.on('data', function (chunk) {
        data+=chunk;
      });
    
      res.on('end', function () {
        resolve(JSON.parse(data))
      });
    });
    req.on('error',(error)=>{
      reject(error);
    })
    req.end();
  })
}
fetchData().then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
} catch (error) {
  console.error(error);
}