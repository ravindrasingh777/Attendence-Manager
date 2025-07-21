const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// Use existing model if it exists, otherwise define it
const AdminModel =
  mongoose.models.admin || mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
