require('dotenv').config()
const http = require('https');

// environment Variables 
const { LENCO_API_KEY, LENCO_PUBLIC_KEY, LENCO_BASEURL } = process.env



// (2) Retrieve information about a specific bank account
const http = require('https');

const fetchData = async () => {
const options = {
  hostname: 'api.lenco.ng',
  port: null,
  path: '/access/v1/account/id',
  method: 'GET',
  headers: {
    Authorization: 'Bearer xo+CAiijrIy9XvZCYyhjrv0fpSAL6CfU8CgA+up1NXqK'
  }
};

return new Promise((resolve,reject)=>{
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
})
};