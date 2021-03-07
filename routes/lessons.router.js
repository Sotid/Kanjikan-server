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
//GET /API/LESSONS/:LESSONID Shows kanji in the selected lesson
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

//GET /API/LESSONS/:LESSONID/QUIZ Shows kanji in the selected lesson
router.get("/:id/quiz", (req, res) => {
  const { id } = req.params;
  Lesson.findById(id)
    .then((foundLesson) => {
      res.status(200).json(foundLesson);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST /API/LESSONS/:LESSONID/QUIZ Sends responses to the quiz
router.post("/:lessonId/quiz", function (req, res, next) {
  const id = req.session.currentUser._id;
  const { lessonId } = req.params;
  //If correct approach: if statement with the results and logic to pass / fail quiz
  User.findByIdAndUpdate(id, { $addToSet: { lessonsCompleted: lessonId } })
    .then(() => res.status(200).send())
    .catch((err) => res.status(404).json(err));
});



module.exports = router;
