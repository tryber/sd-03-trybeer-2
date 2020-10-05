const profileUpdateService = require('../services/profileUpdateService');

const profileController = async (req, res) => {
  try {
    const { token } = req;
    const newName = req.body.name;
    const updateProfile = await profileUpdateService(newName, token);
    if (updateProfile) return res.status(200).json(updateProfile);
  } catch (error) {
    return res.sendStatus(400);
  }
};

module.exports = profileController;
