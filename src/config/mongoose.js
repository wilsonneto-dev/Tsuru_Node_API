const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://wilson:wilson@142.93.54.64/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose;
