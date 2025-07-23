import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import AdminModel from "../../../../../models/adminModel";
import ConnectToDB from "../../../../../lib/db";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("email", email);
    await ConnectToDB();
    const adminUser = await AdminModel.findOne({ Email: email });
    if (adminUser) {
      cookies().set({
        name: "Admin-User",
        value: JSON.stringify(adminUser),
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 10, // 10hr
      });
      return NextResponse.json({
        flag: 1,
        message: "Admin Login successfull...",
        Data: adminUser,
      });
    } else {
      return NextResponse.json({
        flag: 0,
        message:
          "Unable to Login Admin, make sure email and password is correct..",
      });
    }
  } catch (error) {
    return NextResponse.json({
      flag: 0,
      message: error.message,
    });
  }
}
