const https = require('https');

const options = {
  method: 'GET',
  hostname: 'api.lenco.ng',
  port: null,
  path: '/access/v1/accounts',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer xo+CAiijrIy9XvZCYyhjrv0fpSAL6CfU8CgA+up1NXqK'
  }
};

const fetchData = async () => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        resolve(body.toString());
      });
    });

    req.on('error', function (err) {
      reject(err);
    });

    req.end();
  });
};

(async function() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();