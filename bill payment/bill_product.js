const express = require("express");
const app = express();
const http = require("https");

let LENCO_API_KEY =
  "bf307db1fcb4749120b81470eff89961367c8760f904d8dffcfa78d633d23e67";
let LENCO_HOSTNAME = "sandbox.lenco.co";

// <<<<<<<<<<<<<<<<<<<  GETTING THE PRODUCTS FOR AIRTIME >>>>>>>>
app.get("/product/airtime", async (req, res) => {
  let response;
  try {
    const http = require("https");

    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/products?categories[]=airtime",
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

// <<<<<<<<<<<< GETTING THE PRODUCTS FOR MOBILE-DATA >>>>>>>>>>>>
app.get("/product/mobile-data", async (req, res) => {
  let response;
  try {
    const http = require("https");

    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/products?categories[]=mobile-data",
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
