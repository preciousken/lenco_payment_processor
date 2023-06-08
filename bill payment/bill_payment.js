const http = require("https");
require("dotenv").config();

try {
  const options = {
    method: "POST",
    hostname: LENCO_HOSTNAME,
    port: null,
    path: "/access/v1/bills",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${LENCO_API_KEY}`,
    },
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      const req = http.request(options, function (res) {
        const data = "";

        res.on("data", function (chunk) {
          data += chunk;
        });

        res.on("end", function () {
          resolve(JSON.parse(data));
        });
      });
      req.on("error", (error) => {
        reject(error);
      });

      req.end();
    });
  };
  fetchData()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log(error);
}
