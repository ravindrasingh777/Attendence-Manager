"use client";
import React from "react";
import { ManageAttendence } from "../../utilis/AttendenceHelper";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AttendenceTable = ({ details }) => {
  const router = useRouter();

  const attendencehandler = async (value, id, dateTime) => {
    try {
      console.log(value, id);
      const response = await ManageAttendence(value, id, dateTime);
      alert(response.message);
      router.refresh();
    } catch (error) {}
  };

  return (
    <>
      <h1 className="p-2 bg-slate-300 text-center text-3xl">
        All Users Attendences
      </h1>
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
          {details?.map((user, index) => (
            <tr key={index} className=" hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{user?.userName}</td>
              <td className="px-6 py-4">{user?.userId}</td>
              <td className="px-6 py-4">{user?.dateTime}</td>
              <td className="px-6 py-4">
                {user?.Attendence && (
                  <>
                    <div className="flex gap-2 text-center">
                      <button
                        onClick={() =>
                          attendencehandler(
                            "Approved",
                            user?.userId,
                            user?.dateTime
                          )
                        }
                        className={`py-1 ${
                          user?.Attendence == "Approved" &&
                          "cursor-none opacity-45"
                        } px-2 rounded text-white bg-green-500`}
                      >
                        Approved
                      </button>
                      <button
                        onClick={() =>
                          attendencehandler(
                            "Rejected",
                            user?.userId,
                            user?.dateTime
                          )
                        }
                        className={`py-1 px-2 ${
                          user?.Attendence == "Rejected" &&
                          "cursor-none opacity-45"
                        } rounded text-white bg-red-500`}
                      >
                        Rejected
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-10">
        <Link href="/admin">
          <button className="bg-red-500 rounded text-white px-2 py-1">
            Back To Admin
          </button>
        </Link>
      </div>
    </>
  );
};

export default AttendenceTable;
