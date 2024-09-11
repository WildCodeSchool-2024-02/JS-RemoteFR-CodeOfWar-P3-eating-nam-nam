const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id: req.user.id,
      email: req.user.email,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
