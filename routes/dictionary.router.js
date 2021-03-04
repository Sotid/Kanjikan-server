const express = require("express");
const router = express.Router();
const Kanji = require("../models/kanji.model");

//Shows the dictionary
router.get("/all",  (req, res, next) => {
  Kanji.find()
    .then((allKanjis) => {
      res.status(200).json(allKanjis);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


//Shows search results

router.get("/",  (req, res, next) => {
    const searchKanji = req.query.search;

    if (req.query.search) {
      Kanji.find({ kanji: { $all: searchKanji } })
      .then(
        (found) => {
            res.status(200).json(found);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
    });
    












module.exports = router;
