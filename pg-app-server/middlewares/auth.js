import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    if (!req.cookies) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const verifiedUser = jwt.verify(
      req.cookies.token,
      process.env.JWT_PASSWORD
    );
    req.user = verifiedUser.id;
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = auth;
