// const express = require('express');
// const app = express()

const http = require('https');
require('dotenv').config()
// environment Variables 
const { LENCO_HOSTNAME, LENCO_API_KEY, PORT } = process.env



try {
    
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


// app.all("*", (req, res) => {
//     res.json({
//         message: "Just like that? You totally missed your way 🤣😂😂"
//     })
// })
// port = PORT || 3000
// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// })
