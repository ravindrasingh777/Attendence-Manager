import { NextRequest, NextResponse } from "next/server";

import ConnectToDB from "../../../../lib/db";
import AdminModel from "../../../../models/adminModel";
import { cookies } from "next/headers";
import UserModel from "../../../../models/userModel";

export async function POST(req) {
  try {
    const { email, password, confirmPassword } = await req.json();
    await ConnectToDB();
    const emailExists = await AdminModel.findOne({ Email: email });
    const passwordExists = await AdminModel.findOne({ Password: password });
    if (emailExists || passwordExists) {
      return NextResponse.json({
        flag: 0,
        message: "Email our Password Already used try another...",
      });
    } else {
      if (password == confirmPassword) {
        const user = await AdminModel({
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
        });
        user.save();
        cookies().set({
          name: "Admin-User",
          value: JSON.stringify(user),
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 10, // 10hr
        });
        return NextResponse.json({
          flag: 1,
          message: "Admin Registered successfully...",
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
