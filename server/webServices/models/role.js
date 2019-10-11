const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const rolesSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    active: { type: Boolean, enum: [true, false], default: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
}, { strict: true });

rolesSchema.plugin(autoIncrement.plugin, { model: 'Role', field: 'number' });

module.exports = mongoose.model('Role', rolesSchema);