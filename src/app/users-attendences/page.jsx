import Table from "@/components/table";
import React from "react";
import { GetAllAttendences } from "../../../utilis/AttendenceHelper";
import AttendenceTable from "@/components/AttendenceTable";

const Page = async () => {
  const response = await GetAllAttendences();
  const attendences = response?.attendences;
  const plainobj = attendences?.map((attend) => ({
    id: attend._id.toString(),
    userId: attend.userId.toString(),
    Attendence: attend.Attendence,
    userName: attend.userName,
    dateTime: attend.dateTime.toString(),
  }));

  return (
    <>
      <AttendenceTable details={plainobj} />
    </>
  );
};

export default Page;
