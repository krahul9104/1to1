const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const deptTypeSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    active: { type: Boolean, enum: [true, false], default: true },
    deptId: { type: String, required: true, ref: 'Department' },
    managerId: { type: String },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
}, { strict: true });

deptTypeSchema.plugin(autoIncrement.plugin, { model: 'DepartmentType', field: 'number' });

module.exports = mongoose.model('DepartmentType', deptTypeSchema);