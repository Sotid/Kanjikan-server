const axios = require("axios");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  var query = req.body;
  console.log(query);
  var options = {
    method: "POST",
    url: "https://translation.googleapis.com/language/translate/v2",
    form: { key: process.env.TRANSLATE, q: query, source: "jp", target: "en" },
  };
  axios.request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(response);
    res.send(response);
  });
});
module.exports = router;
