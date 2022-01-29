const mongoose = require("mongoose");

const VideoGameSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		min: 1,
	},
	description: {
		type: String,
		require: true,
		min: 1,
	},
	category: {
		type: String,
		require: true,
		min: 1,
	},
	img: {
		type: String,
		require: true,
		min: 1,
	},
	calification: {
		type: Number,
		required: true,
		min: 0,
		max: 5,
	}

}, { timestamps: true });

module.exports = mongoose.model("VideoGame", VideoGameSchema);