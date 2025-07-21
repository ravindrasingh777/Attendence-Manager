"use server";
import AdminModel from "../models/adminModel";

export async function GetAdminsData() {
  try {
    const admins = await AdminModel.find();
    return admins;
  } catch (error) {
    return error.message;
  }
}
