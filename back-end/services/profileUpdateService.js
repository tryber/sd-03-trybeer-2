const decode = require('jwt-decode');
const { updateUser } = require('../models/users');

const profileUpdateService = async (newName, profileToken) => {
  const { email } = decode(profileToken);
  try {
    await updateUser(email, newName);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = profileUpdateService;
