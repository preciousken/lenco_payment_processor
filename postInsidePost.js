const express = require('express');
const app = express();


// >>>> THIS IS JUST SAMPLE OF HOW TO SEND A APP.POST REQUEST INSIDE A APP.POST REQUEST
// >>>> SAMPLE USE IS IN WEBHOOK

app.post('/firstEndpoint', (req, res) => {
    // Make the first POST request
    const firstPostData = { foo: 'bar' };
    const options = {
        hostname: 'example.com',
        path: '/secondEndpoint',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(firstPostData))
        }
    };
    const firstRequest = http.request(options, (firstResponse) => {
        let firstResponseData = '';
        firstResponse.on('data', chunk => {
            firstResponseData += chunk;
        });
        firstResponse.on('end', () => {
            // Handle the first response data
            console.log('Response from first request:', firstResponseData);

            // Make the second POST request
            app.post('/secondEndpoint', (req, res) => {
                // Handle the second POST request
                console.log('Received second POST request');
                res.send('Response from second POST request');
            });

            // Send the second POST request
            app.handle(req, res);
        });
    });
    firstRequest.write(JSON.stringify(firstPostData));
    firstRequest.end();
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
