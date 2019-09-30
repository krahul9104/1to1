const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const empSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    active: { type: Boolean, enum: [true, false], default: true },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date },
    managerId: { type: String, required: true },
    orgId: { type: String, required: true, ref: 'Organization' },
    roleId: { type: String, required: true },
    designationId: { type: String, required: true },
    departmentId: { type: String, required: true },
    teamTypeId: { type: String, required: true }
}, { strict: true });

module.exports = mongoose.model('Employee', empSchema);