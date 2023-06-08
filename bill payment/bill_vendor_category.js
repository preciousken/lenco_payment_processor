const express = require("express");
const app = express();
const http = require("https");

// <<<<<<<<<<<<<<<<  AIRTIME  >>>>>>>>>>>>>>>>>>>>>>>>
app.get("/airtime", async (req, res) => {
  try {
    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/vendors/by-category/airtime",
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
    fetchData().then((result) => {
      response = result;
      res.status(200).send(JSON.parse(response));
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

// <<<<<<<<<<<<<<<<<<< MOBILE - DATA >>>>>>>>>>>>>

app.get("/mobile-data", async (req, res) => {
  try {
    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/vendors/by-category/mobile-data",
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
    fetchData().then((result) => {
      response = result;
      res.status(200).send(JSON.parse(response));
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

// <<<<<<<<<<<<<<<<  cable-tv  >>>>>>>>>>>>>>>>>>>>>>>>
app.get("/cable-tv", async (req, res) => {
  try {
    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/vendors/by-category/cable-tv",
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
    fetchData().then((result) => {
      response = result;
      res.status(200).send(JSON.parse(response));
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

// <<<<<<<<<<<<<<<<<<< electricity >>>>>>>>>>>>>

app.get("/electricity", async (req, res) => {
  try {
    const options = {
      method: "GET",
      hostname: LENCO_HOSTNAME,
      port: null,
      path: "/access/v1/bills/vendors/by-category/electricity",
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
    fetchData().then((result) => {
      response = result;
      res.status(200).send(JSON.parse(response));
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("port 5000");
});
