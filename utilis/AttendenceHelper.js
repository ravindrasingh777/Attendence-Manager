"use server";
import ConnectToDB from "../lib/db";
import AttendenceModel from "../models/attendenceModel";

export async function CreateAttendence(data) {
  try {
    const { userId, userName, attendence, dateTime } = data;
    console.log(userId, userName, attendence, dateTime);
    await ConnectToDB();
    const Attendence = new AttendenceModel({
      userId,
      userName,
      dateTime,
      Attendence: attendence,
    });

    await Attendence.save();

    return {
      flag: 1,
      message: "Your Attendence Has Been Counted Successfully...",
    };
  } catch (error) {
    return {
      flag: 0,
      message: error.message,
    };
  }
}

export async function GetAllAttendences() {
  try {
    const attendences = await AttendenceModel.find();
    return {
      flag: 1,
      message: "All attendences fetched successfully...",
      attendences: attendences,
    };
  } catch (error) {
    return {
      flag: 0,
      message: error.message,
    };
  }
}

export async function ManageAttendence(value, id, dateTime) {
  try {
    await ConnectToDB();
    console.log("dateTime", dateTime);
    const userattendence = await AttendenceModel.findOne({
      dateTime: dateTime,
    });
    if (userattendence) {
      userattendence.Attendence = value;
      await userattendence.save();
    }
    return {
      flag: 1,
      message: "Attendence Changed Successfully...",
    };
  } catch (error) {
    return {
      flag: 0,
      message: "Unable To Changed Attendence...",
    };
  }
}

export async function GetAllAttendenceById(id) {
  try {
    console.log(id, "id");
    const userAttendences = await AttendenceModel.find({ userId: id });
    return {
      flag: 1,
      message: "All attendences fetched successfully...",
      attendences: userAttendences,
    };
  } catch (error) {
    return {
      flag: 0,
      message: error.message,
    };
  }
}
