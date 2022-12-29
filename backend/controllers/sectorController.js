const Sector = require("../models/Sectors");
const mongoose = require("mongoose");

//get all users

const getAllUsers = async (req, res) => {
  const users = await Sector.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

//get a single sector

const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await Sector.findById(id);

  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }

  res.status(200).json(user);
};

//create new user
const createUser = async (req, res) => {
  const { name, title } = req.body;

  // add doc to db
  try {
    const sector = await Sector.create({ name, title });
    res.status(200).json(sector);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a user

const deleteUser = async (req, res) => {
  //get the id
  const { id } = req.params;

  //check the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await Sector.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }

  res.status(200).json(user);
};

//update a sector

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await Sector.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
};
