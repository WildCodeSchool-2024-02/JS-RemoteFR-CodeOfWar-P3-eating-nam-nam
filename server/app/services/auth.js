const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

// UNIQUEMENT POUT LE /login

const verifyPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.readByEmail(email);
    if (!user) {
      res.sendStatus(401);
      return;
    }
    req.user = {
      id: user.id,
      email: user.email,
    };
    const verified = await argon2.verify(user.password, password);
    if (!verified) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;

    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1h",
    });

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};

// ---

const verifyToken = async (req, res, next) => {
  try {
    const { auth } = req.cookies;
    jwt.verify(auth, process.env.APP_SECRET, (err, decoded) => {
      if (err) {
        return next(err);
      }

      console.info("Données décodées du token :", decoded);
      req.params.id = decoded.id;

      return next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  verifyToken,
};
