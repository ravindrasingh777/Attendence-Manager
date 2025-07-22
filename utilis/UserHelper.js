"use server";
import { cookies } from "next/headers";
import ConnectToDB from "../lib/db";
import UserModel from "../models/userModel";

export async function GetUsersData() {
  try {
    const users = await UserModel.find();
    console.log("usersbackene", users);
    return users;
  } catch (error) {
    return error.message;
  }
}

export async function Userlogin(data) {
  try {
    const { email } = data; // you don't need `await` here
    console.log("email", email);
    await ConnectToDB(); // ensure DB is connected

    const user = await UserModel.findOne({ Email: email });
    if (user) {
      // Convert Mongoose document to plain object
      const plainUser = {
        _id: user._id.toString(),
        Email: user.Email,
        Password: user.Password,
        Name: user.Name,
        Mobile: user.Mobile,
        ConfirmPassword: user.ConfirmPassword,
        createdAt: user.createdAt?.toISOString() || "",
        updatedAt: user.updatedAt?.toISOString() || "",
      };

      // Set cookie with serialized plain object
      cookies().set({
        name: "User",
        value: JSON.stringify(plainUser),
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 1, // 1 hour
      });

      return {
        flag: 1,
        message: "User Login successful...",
        Data: plainUser,
      };
    } else {
      return {
        flag: 0,
        message: "Invalid email or password",
      };
    }
  } catch (error) {
    return {
      flag: 0,
      message: error.message,
    };
  }
}
