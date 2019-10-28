const mongoose = require('../config/mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    pass: String,
    active: Boolean,
    workspace: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace'
    }]
  }
);

module.exports = mongoose.model('User', UserSchema);