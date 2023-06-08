// Retrieving information about a specific vendor
const express = require("express");
const app = express();
const http = require("https");

app.get("/vendorId", async (req, res) => {
  let response;
  try {
    const http = require("https");

    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: `/access/v1/bills/vendors/${vendorId}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${LENCO_API_KEY}`,
      },
    };

    const fetchData = () => {
      return new Promise((resolve, reject) => {
        const req = http.request(options, function (res) {
          const chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            const body = Buffer.concat(chunks);
            resolve(body.toString());
          });
        });
        req.on("error", (error) => {
          reject(error);
        });
        req.end();
      });
    };
    fetchData()
      .then((result) => {
        response = result;
        res.status(200).send(JSON.parse(response));
      })
      .catch((error) => {
        response = error;
        res.status(500).json(JSON.parse(response));
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(5000, () => {
  console.log("port 5000");
});
