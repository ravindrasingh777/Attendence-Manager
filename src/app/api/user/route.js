import { NextRequest, NextResponse } from "next/server";
import UserModel from "../../../../models/userModel";
import ConnectToDB from "../../../../lib/db";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password, confirmPassword, name, mobile } = await req.json();
    ConnectToDB();
    const emailExists = await UserModel.findOne({ Email: email });
    const passwordExists = await UserModel.findOne({ Password: password });
    if (emailExists || passwordExists) {
      return NextResponse.json({
        flag: 0,
        message: "Email our Password Already used try another...",
      });
    } else {
      if (password == confirmPassword) {
        const user = await UserModel({
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
          Mobile: mobile,
          Name: name,
        });
        user.save();
        cookies().set({
          name: "User",
          value: JSON.stringify(user),
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 10, // 10hr
        });
        return NextResponse.json({
          flag: 1,
          message: "User Registered successfully...",
          userData: user,
        });
      } else {
        return NextResponse.json({
          flag: 0,
          message: "confirm Password does not match with password",
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function GET(req) {
  try {
    ConnectToDB();
    const usersdata = await UserModel.find();
    return NextResponse.json({
      flag: 1,
      message: "UsersData fetched successful...",
      userData: usersdata,
    });
  } catch (error) {
    return NextResponse.json({
      flag: 0,
      message: error.message,
    });
  }
}
