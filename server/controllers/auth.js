const { verifyBody } = require("../utils/verifyBody");
const UserService = require("../services/authService");
const TokenService = require("../services/tokenService");
const UserDTO = require("../dtos/userDTO");

class AuthController {
  async login(req, res) {
    if (!verifyBody(req.body, ["provider", "displayName", "email"])) {
      return res.status(400).json({ msg: "error" });
    }
    let user;
    user = await UserService.findUser({ email: req.body.email });
    if (!user) {
      user = await UserService.createUser(req.body);
    }
    const { accessToken, refreshToken } = TokenService.generateTokens({
      _id: user._id,
      displayName: user.displayName,
      email: user.email,
      avatar: user.avatar,
    });
    await TokenService.storeRefreshToken(refreshToken, user?._id);
    res
      .status(200)
      .json({
        user: new UserDTO(user),
        tokens: { at: accessToken, rt: refreshToken },
      });
  }
}

module.exports = new AuthController();
