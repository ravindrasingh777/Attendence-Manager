import { NextRequest, NextResponse } from "next/server";
import UserModel from "../../../../../models/userModel";

export async function POST(req) {
  try {
    const { email, password, confirmPassword, id } = await req.json();
    console.log(email, password, confirmPassword);
    await UserModel.findByIdAndUpdate(id, {
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
    });
    return NextResponse.json({
      flag: 1,
      message: "User Details edit successfully...",
    });
  } catch (error) {
    return NextResponse.json({
      flag: 0,
      message: "Unable to edit user details...",
    });
  }
}
