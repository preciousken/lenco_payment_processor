const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, ACCOUNT_NUMBER,BANK_CODE } = process.env




//>>>>>> Create a new recipient
try {

    const options = {
        method: 'POST',
        hostname: LENCO_HOSTNAME,
        port: null,
        path: '/access/v1/recipients',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
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
            req.on('error',(err)=>{
                reject(err)
            })
            req.write(JSON.stringify({ accountNumber: ACCOUNT_NUMBER, bankCode: BANK_CODE }));
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