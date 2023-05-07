const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, LENCO_RECIPIENT_PAGE } = process.env




//>>>>>> Get list of banks and financial institutions
try {
    const http = require('https');

    const options = {
        method: 'GET',
        hostname: LENCO_HOSTNAME,
        port: null,
        path: `/access/v1/recipients?page=${LENCO_RECIPIENT_PAGE}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${LENCO_API_KEY}`
        }
    };
    const fetchData = () => {
        return new Promise((resolve, reject) => {

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
    fetchData().then(data=>{
        console.log(data);
        return;
    }).catch(err=>{
        console.log(err);
        return;
    })

} catch (error) {
    console.log(error);
}