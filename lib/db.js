const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://ravindrasinghrss2004:ravibanna@cluster0.mlsuvk8.mongodb.net/";

if (!MONGODB_URL) {
  throw new Error("Please define mongoDB url in env variable...");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function ConnectToDB() {
  if (cached.conn) {
    console.log("✅ MongoDB already connected");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {
        dbName: "AttendenceManagement",
      })
      .then((mongoose) => {
        console.log("✅ MongoDB connected successfully");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error);
    cached.promise = null;
  }

  return cached.conn;
}

module.exports = ConnectToDB;
