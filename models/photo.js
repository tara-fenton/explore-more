const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const photoSchema = new Schema(
	{
		url: String,
		location: {
			type: Schema.Types.ObjectId,
			ref: "Location",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Photo", photoSchema);
