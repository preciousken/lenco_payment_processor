const express = require("express");
const app = express();
const http = require("https");

// getting the lisit of all the vendors for bill payment
app.get("/product/vendor", async (req, res) => {
  let response;
  try {
    const http = require("https");

    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/products?categories[]=",
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
        return;
      })
      .catch((error) => {
        response = error;
        res.status(500).json(JSON.parse(error));
        return;
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(5000, () => {
  console.log("port 5000");
});
