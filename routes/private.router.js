const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
//GET /API/MYPROFILE/:USERID Shows user`s profile
router.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId).populate("bookmarks")
    .then((thisUser) => {
      res.status(200).json(thisUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST /API/MYPROFILE/:USERID updates user's personal information
router.post("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  User.findByIdAndUpdate(userId, {
    username,
    email,
    password,
  })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).json(err));
});

//POST /API/MYPROFILE/:KANJIID/ADD Adds a new kanji to user's bookmarks
router.post("/:kanjiId/add", function (req, res, next) {
  const id = req.session.currentUser._id;
  const { kanjiId } = req.params;
  User.findByIdAndUpdate(id, { $addToSet: { bookmarks: kanjiId} }, {new:true})
    .then(() => kanjiId.save)
    .then(() => res.status(200).send())
    .catch((err) => res.status(400).json(err));
});

//POST /API/MYPROFILE/:KANJIID/DELETE   Removes a bookmark from the user's array
// The kanji is NOT REMOVED from the DB
router.post("/:kanjiId/delete", function (req, res, next) {
  const id = req.session.currentUser._id;
  const { kanjiId } = req.params;
  User.findByIdAndUpdate(id, { $pull: { bookmarks: kanjiId } })
    .then(() => res.status(200).send())
    .catch((err) => res.status(404).json(err));
});





module.exports = router;
