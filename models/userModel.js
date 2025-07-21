const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      unique: true,
    },
    ConfirmPassword: {
      type: String,
      required: true,
    },
    Mobile: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Use existing model if it exists, otherwise define it
const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);

module.exports = UserModel;
