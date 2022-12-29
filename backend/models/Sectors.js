const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sectorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // title: { type: [String] },
    title: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sector", sectorSchema);
