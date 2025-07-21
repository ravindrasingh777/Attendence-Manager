import { NextRequest, NextResponse } from "next/server";
import UserModel from "../../../../../../models/userModel";

export async function DELETE(req, { params }) {
  const userId = (await params).userId;
  try {
    // const userId = context.params.userId;  another method for params access
    console.log(userId, "userId");
    await UserModel.findByIdAndDelete(userId);
    return NextResponse.json({
      flag: 1,
      message: "User deleted successfully...",
    });
  } catch (error) {
    return NextResponse.json({
      flag: 0,
      message: error.message,
    });
  }
}
