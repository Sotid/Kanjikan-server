const express = require("express");
const router = express.Router();
const Kanji = require("../models/kanji.model");

router.post("/", (req, res, next) => {
  Kanji.find()
    .then((found) => {
      res.status(200).json(found);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
