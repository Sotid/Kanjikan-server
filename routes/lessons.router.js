const express = require("express");
const router = express.Router();
const Lesson = require("../models/lesson.model");

//GET /API/LESSONS/ Shows all lessons
router.get("/", function (req, res, next) {
  Lesson.find()
    .then((allTheLessons) => {
      res.status(200).json(allTheLessons);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//GET /API/LESSONS/:LESSONID Shows kanji in selected lesson
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Lesson.findById(id)
    .then((foundLesson) => {
      res.status(200).json(foundLesson);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});




module.exports = router;
