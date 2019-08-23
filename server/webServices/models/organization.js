const mongoose = require('mongoose');

const orgSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    orgEmail: { type: String },
    active: { type: Boolean, required: true, enum: [true, false] },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    managerId: { type: Number, required: true },
}, {
    strict: true
});

module.exports = mongoose.model('Organization', orgSchema);