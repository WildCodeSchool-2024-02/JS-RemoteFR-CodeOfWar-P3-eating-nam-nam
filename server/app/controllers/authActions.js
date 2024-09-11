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

// FAIRE L'ACTION register POUR ENREGISTRER UN UTILISATEUR
// ON PEUT FAIRE DES MIDDLEWARES -> auth.js
const register = async (req, res, next) => {
  try {
    // La suite...
    res.status(200).json({ message: "Inscription réussie" })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  register
};
