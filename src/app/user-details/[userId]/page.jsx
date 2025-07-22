import React from "react";
import { GetAllAttendenceById } from "../../../../utilis/AttendenceHelper";
import Link from "next/link";

const Page = async ({ params }) => {
  const id = params.userId;
  console.log(id, "id");
  const response = await GetAllAttendenceById(id);
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
      <h1 className="p-2 bg-slate-300 text-center text-3xl">Attendence List</h1>
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-6 py-3">User&apos;s Name</th>
            <th className="px-6 py-3">User Id</th>
            <th className="px-6 py-3">Date-Time</th>
            <th className="px-6 py-3 ">Attendence</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {plainobj?.map((user, index) => (
            <tr key={index} className=" hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{user?.userName}</td>
              <td className="px-6 py-4">{user?.userId}</td>
              <td className="px-6 py-4">{user?.dateTime}</td>
              <td className="px-6 py-4">{user?.Attendence}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-10">
        <Link href="/user-details">
          <button className="bg-red-500 rounded text-white px-2 py-1">
            Back To Dashboard
          </button>
        </Link>
      </div>
    </>
  );
};

export default Page;
