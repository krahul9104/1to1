const mongoose = require('mongoose');


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const empSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    userName: { type: String, required: true },
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
    active: { type: Boolean, required: true, enum: [true, false] },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    managerId: { type: Number, required: true },
    orgId: { type: Number, required: true },
    role: { type: String, required: true },
    designation: { type: Number, required: true },
}, { strict: true });

module.exports = mongoose.model('Employee', empSchema);