const express = require("express");
const router = express.Router();


router.get("/lessons", function (req, res, next) {
    
        Lesson.find()
        .then( (allLessons) => {
            res.status(200).json(allLessons);
          })
          .catch(err => {
            res.status(500).json(err);
          })
      });

module.exports = router;
