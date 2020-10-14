const Photo = require("../models/photo");

module.exports = {
	// index,
	// show,
	create,
	// delete: deleteOne,
	// update,
};

// async function index(req, res) {
// 	const locations = await Location.find({});
// 	res.status(200).json(locations);
// }

// async function show(req, res) {
//   const location = await Location.findById(req.params.id);
//   res.status(200).json(location);
// }

async function create(req, res) {
	const photo = await Photo.create(req.body);
	photo.user = req.body.user._id;
	res.status(201).json(photo);
}

// async function deleteOne(req, res) {
// 	const deletedLocation = await Location.findByIdAndRemove(req.params.id);
// 	res.status(200).json(deletedLocation);
// }

// async function update(req, res) {
// 	const updatedLocation = await Location.findByIdAndUpdate(
// 		req.params.id,
// 		req.body,
// 		{ new: true }
// 	);
// 	res.status(200).json(updatedLocation);
// }
