const User = require('../models/User');
const PasswordHelper = require('../utils/PasswordHelper');

module.exports = {
  async store(req, res) {
    const { name, email, pass } = req.body;
    const encriptedPass = await PasswordHelper.hash(pass);

    const userByEmail = await User.findOne({ email });
    if(userByEmail) {
      return res.status(409).json({ error: 'E-mail already registered...'});
    }

    const user = await User.create({
      name, 
      email, 
      pass: encriptedPass, 
      active: true
    });

    return res.json(user);
  }
};
