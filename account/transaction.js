const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, TRANSFER_AMOUNT, LENCO_API_KEY, ACCOUNT_NUMBER, RECIPIENT_ID, SENDER_NAME, BANK_CODE, TRANSFER_NARRATION, LENCO_ACCOUNT_UUID } = process.env

const { v4: uuidv4 } = require('uuid');
const uuidValue =uuidv4();


//>>>>>> Create a new transaction, currently only supporting bank transfer
try {

    const options = {
        method: 'POST',
        hostname: LENCO_HOSTNAME,
        port: null,
        path: '/access/v1/transactions',
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

            req.on('error', (err) => {
                reject(err)
            })
            req.write(JSON.stringify({
                accountId: LENCO_ACCOUNT_UUID,
                recipientId: RECIPIENT_ID,
                accountNumber: ACCOUNT_NUMBER,
                bankCode: BANK_CODE,
                amount: TRANSFER_AMOUNT,
                narration: TRANSFER_NARRATION,
                reference: uuidValue, // NOTE: USE UUID TO GENERATE A UNIQUE REFERENCE FOR EACH TRANSACTIONS
                senderName: SENDER_NAME
            }));
            req.end();
        })
    }
    fetchData().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

} catch (error) {
    console.log(error);////NOTE THE ClientReference is unique
}