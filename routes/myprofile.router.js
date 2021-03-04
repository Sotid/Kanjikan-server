const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//Shows user`s profile
router.get("/:userId",  (req, res, next) => {
  const userId = req.params.userId;

  User.findById(userId)

    .then((thisUser) => {
      res.status(200).json(thisUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Edit user`s profile
router.put("/:userId",  (req, res, next) => {
  const userId = req.params.userId
  const { username, email, password, lessonsCompleted, bookmarks  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Not a valid ID" });
    return;
  }

  User.findByIdAndUpdate(userId, { username, email, password, lessonsCompleted, bookmarks })
  
  .then(() => res.status(200).send())

    .catch((err) => res.status(500).json(err));
});

module.exports = router;
