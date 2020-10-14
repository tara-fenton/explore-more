const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const locationSchema = new Schema(
    {
        name: String,
        description: String,
        lat: String,
        lng: String,
        notes: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Location", locationSchema);