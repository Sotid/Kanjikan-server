const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//Shows user`s profile
router.get("/:userId", function (req, res, next) {
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
router.put("/:userId", (req, res, next) => {
  const {userId}  = req.params;
  const { username, email, password } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Not a valid ID" });

    return;
  }

  User.findByIdAndUpdate(userId, { username, email, password })
    console.log(userId)
  
  .then(() => res.status(200).send())
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
