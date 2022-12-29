const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/sectorController");

const router = express.Router();

//GET all users
router.get("/", getAllUsers);

//GET a single user

router.get("/:id", getUser);

//create a new user

router.post("/", createUser);

//delete a user

router.delete("/:id", deleteUser);

//update a sector
router.patch("/:id", updateUser);

module.exports = router;
