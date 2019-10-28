const mongoose = require('../config/mongoose');

const WorkspaceSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Workspace', WorkspaceSchema);
