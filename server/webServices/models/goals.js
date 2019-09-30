const mongoose = require('mongoose');

const goalsSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, lowercase: true, enum: ['org', 'manager', 'indivisual'] },
    active: { type: Boolean, required: true, enum: [true, false] },
    quater: { type: String, required: true },
    year: { type: String, required: true },
    points: { type: Number, required: true },
    employeeId: { type: Number, required: function() { return this.type !== 'org'; }, ref: 'Employee' },
    orgId: { type: Number, required: function() { return this.type === 'org'; }, ref: 'Organization' }
}, {
    strict: true
});

module.exports = mongoose.model('Goals', goalsSchema);