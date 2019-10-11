const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const deptSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    active: { type: Boolean, enum: [true, false], default: true },
    orgId: { type: String, required: true, ref: "Organization" },
    managerId: { type: String },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ]
    }
}, { strict: true });

deptSchema.plugin(autoIncrement.plugin, {
    model: "Department",
    field: "number"
});

module.exports = mongoose.model("Department", deptSchema);