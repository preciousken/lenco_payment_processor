require('dotenv').config()
const http = require('https');

// environment Variables 
const { LENCO_API_KEY, LENCO_PUBLIC_KEY, LENCO_BASEURL } = process.env



const axios = require('axios');

const options = {
  method: 'GET',
  url: LENCO_BASEURL,
  headers: {
    "accept": 'application/json',
    "Authorization": 'Bearer '+LENCO_API_KEY
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });