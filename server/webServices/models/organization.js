const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const orgSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    orgEmail: { type: String },
    active: { type: Boolean, required: true, enum: [true, false] },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date },
    managerId: { type: Number, required: true, ref: "Employee" }
}, {
    strict: true
});

orgSchema.plugin(autoIncrement.plugin, {
    model: "Organization",
    field: "number"
});
module.exports = mongoose.model("Organization", orgSchema);