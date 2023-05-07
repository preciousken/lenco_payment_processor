const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY,BANK_CODE,ACCOUNT_NUMBER } = process.env


//>>>>>> Verify/resolve account details
try {

    const bankCode = BANK_CODE
    const accountNumber = ACCOUNT_NUMBER
    
const options = {
    method: 'GET',
    hostname: LENCO_HOSTNAME,
    port: null,
    path: `/access/v1/resolve?accountNumber=${accountNumber}&bankCode=${bankCode}`,
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
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error) => {
            reject(error);
        });
        req.end();
    })

};

fetchData()
    .then((data)=>{
        console.log(data);
        return;
    })
    .catch((error)=>{
        console.error(error);
        return;
    });

} catch (error) {
    console.log(error);
}
