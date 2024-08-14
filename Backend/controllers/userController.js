const asyncHandler = require("asyncHandler");
const User = require("../Models/userModel");
const router = require("../userRoutes");
const generateToken = require("../config/generateToken");
const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    req.status(400);
    throw new Error("Please enter al the details");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({ name, email, password, pic });
  if (User) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(User._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

module.exports = { registerUser };
