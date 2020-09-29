const profileUpdateService = require('../services/profileUpdateService');

const profileController = async (req, res) => {
  try {
    const profileToken = req.body.token;
    const newName = req.body.name;
    const updateProfile = await profileUpdateService(newName, profileToken);
    if (updateProfile) return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

module.exports = profileController;
