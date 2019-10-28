const User = require('../models/User');
const PasswordHelper = require('../utils/PasswordHelper');

module.exports = {
  async login(req, res){
    const { email, pass } = req.body;

    const user = await User.findOne({ email });
    if(!user)
      return res.status(400).json({ error: 'User not found...' });

    const passMatch = await PasswordHelper.compare(pass, user.pass);
    if(passMatch){
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ error: 'User not found...' });
    }
  }
}