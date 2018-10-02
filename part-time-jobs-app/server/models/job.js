const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true},
	location: {type: String, required: true},
	hourlyRate: {type: Number, required: true},
	preferredDate: {type: Date, required: false},
	preferredTime: {type: String, required: true}
});

module.exports = mongoose.model('Job', schema);
