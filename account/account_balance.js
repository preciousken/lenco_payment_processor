const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY,BANK_CODE,ACCOUNT_NUMBER,LENCO_ACCOUNT_UUID } = process.env


//>>>>>> Retrieve account balance of a specific bank account
try {
const options = {
  method: 'GET',
  hostname: LENCO_HOSTNAME,
  port: null,
  path: `/access/v1/account/${LENCO_ACCOUNT_UUID}/balance`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${LENCO_API_KEY}`
  }
};

const fetchData = () => {
    return new Promise((resolve,reject)=>{
        const req = http.request(options, function (res) {
            let data = '';
          
            res.on('data', function (chunk) {
              data += chunk;
            });
          
            res.on('end', function () {
             resolve(JSON.parse(data));
            });
          });
          
          req.on('error',(err)=>{
            reject(err)
          })
          req.end();
    })
}
fetchData().then(data=>{
    console.log(data);
}).catch(err=>{
    console.error(err);
})

} catch (error) {
    console.log(error);
}