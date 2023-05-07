// const express = require('express');
// const app = express()

const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, PORT } = process.env




const fetchData = async (req, res) => {
    const options = {
        method: 'GET',
        hostname: LENCO_HOSTNAME,
        port: null,
        path: '/access/v1/resolve',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${LENCO_API_KEY}`
        }
    };

    return new Promise((resolve, reject) => {
        const req = http.request(options, function (res) {
            const chunks = [];

            res.on('data', function (chunk) {
                chunks.push(chunk);
            });

            res.on('end', function () {
                const body = Buffer.concat(chunks);
                // console.log(body.toString());
                resolve(body.toString())
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
    })
    .catch((error)=>{
        console.error(error);
    });



// app.all("*", (req, res) => {
//     res.json({
//         message: "Just like that? You totally missed your way 🤣😂😂"
//     })
// })
// port = PORT || 3000
// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// })
