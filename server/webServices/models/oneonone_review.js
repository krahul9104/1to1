const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    count: { type: Number, required: true },
    emp_id: { type: Number, required: true, ref: 'Employee' },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    interval: { type: String, required: true },
    keyPoints: [{
        name: { type: String, required: true },
        description: { type: String, required: true }
    }],
    status: { type: String, required: true },
    active: { type: Boolean, required: true, enum: [true, false] }
}, { strict: true });

module.exports = mongoose.model('OneonOneReview', empSchema);