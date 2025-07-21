const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Attendence: {
      type: String,
      required: true,
      default: "rejected",
    },
    userName: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite error in dev or hot reload
const AttendenceModel =
  mongoose.models?.Attendence || mongoose.model("Attendence", AttendenceSchema);

module.exports = AttendenceModel;
