const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, CLIENT_REFERENCE } = process.env




//>>>>>> Retrieve information about a specific transaction using the client reference

try {
    const options = {
        method: 'GET',
        hostname: LENCO_HOSTNAME,
        port: null,
        path: `/access/v1/transaction-by-reference/${CLIENT_REFERENCE}`,
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
    fetchData().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
} catch (error) {
    console.log(error);
}