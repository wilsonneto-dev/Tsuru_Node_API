const bcrypt = require('bcrypt');

module.exports = {
  async hash(password){
    const saltRounds = 10;
  
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    });
  
    return hashedPassword
  },

  async compare(password, hash){
    return await bcrypt.compare(password, hash);
  }
}
