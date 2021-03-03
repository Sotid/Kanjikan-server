const express = require("express");
const router = express.Router();

//Renders all the available lessons
router.get("/lessons", function (req, res, next) {
     
        Lesson.find()
        .then( (allTheLessons) => {
          res.status(200).json(allTheLessons);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });




//Renders the cards of each lesson
router.get("/lessons/:id", (req, res) => {
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)  
      .json({ message: 'Not a valid ID'})
    return;
  }

  Lesson
    .findById( id )
    .then( (foundLesson) => {
      res.status(200).json(foundLesson);  
    })
    .catch((err) => {
      res.status(500).json(err);	
    })
  });













module.exports = router;
