require('dotenv').config()
const http = require('https');

// environment Variables 
const { LENCO_API_KEY, LENCO_PUBLIC_KEY, LENCO_BASEURL } = process.env



// (1) Retrieve information about your bank accounts

const options = {
  method: 'GET',
  hostname: 'https://sandbox.lenco.co',
  port: null,
  path: '/access/v1',
  headers: {
    'Authorization': 'Bearer ' + LENCO_API_KEY
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




// SAMPLE RESPONSE HERE
// response = 
// {
//   "status": true,
//   "message": "Success",
//   "data": [
//     {
//       "id": "056ffebf-812a-433a-83a0-9c67cd8c089c",
//       "name": "OGAVENUE- DISBURSEMENT 2",
//       "currency": "NGN",
//       "bankAccount": {
//         "accountName": "OGAVENUE- DISBURSEMENT 2",
//         "accountNumber": "0000000076",
//         "bank": {
//           "code": "000023",
//           "name": "PROVIDUS BANK"
//         }
//       },
//       "type": "Lenco Current",
//       "status": "active",
//       "availableBalance": "0.00",
//       "currentBalance": "0.00",
//       "createdAt": "2021-03-30T13:30:58.171Z"
//     },
//     {
//       "id": "cdfc21ce-7424-4b71-bbc8-321c82b309fc",
//       "name": "OGAVENUE- DISBURSEMENT 1",
//       "currency": "NGN",
//       "bankAccount": {
//         "accountName": "OGAVENUE- DISBURSEMENT 1",
//         "accountNumber": "0000000077",
//         "bank": {
//           "code": "000023",
//           "name": "PROVIDUS BANK"
//         }
//       },
//       "type": "Lenco Current",
//       "status": "active",
//       "availableBalance": "99995404316.07",
//       "currentBalance": "99995404316.07",
//       "createdAt": "2021-03-30T13:30:58.218Z"
//     }
//   ]
// }