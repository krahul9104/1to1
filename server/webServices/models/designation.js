const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const designationSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, enum: [true, false], default: true },
    deptId: { type: String, required: true, ref: 'Department' },
    deptTypeId: { type: String, ref: 'DepartmentType' },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
}, { strict: true });

designationSchema.plugin(autoIncrement.plugin, { model: 'Designation', field: 'number' });
module.exports = mongoose.model('Designation', designationSchema);