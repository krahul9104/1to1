const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const empSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Email address is required",
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ]
    },
    active: { type: Boolean, enum: [true, false], default: true },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date },
    managerId: { type: String, required: true },
    orgId: { type: String, required: true, ref: "Organization" },
    departmentId: { type: String, required: true, ref: "Department" },
    departmentTypeId: { type: String, required: true, ref: "DepartmentType" },
    designationId: { type: String, required: true, ref: "Designation" },
    roleId: { type: String, required: true, ref: "Role" }
}, { strict: true });

empSchema.plugin(autoIncrement.plugin, { model: "Employee", field: "number" });

module.exports = mongoose.model("Employee", empSchema);