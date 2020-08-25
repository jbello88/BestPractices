const { User } = require("./models/user.model");
const bcrypt = require("bcrypt");

const userRepository = {
  async userWithThisEmailExists(email) {
    var existingUser = await User.findOne({ email });
    return existingUser ? true : false;
  },

  async getUserById(id) {
    var user = await User.findById(id).select("-password");
    return user;
  },

  async createNewUser(name, email, password, isAdmin = false) {
    user = new User({
      name,
      password,
      email,
      isAdmin,
    });
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();

    return user;
  },
};

module.exports = userRepository;
