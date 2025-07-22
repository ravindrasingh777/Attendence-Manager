"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Table = ({ details, actions = "" }) => {
  const router = useRouter();
  const deletehandler = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/delete-user/${userId}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.flag == 1) {
        alert(result.message);
        router.refresh();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="overflow-x-auto p-4">
        <div className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">User&apos;s Email</th>
                <th className="px-6 py-3">Password</th>
                <th className="px-6 py-3">Confirm-Password</th>
                <th className="px-6 py-3 text-center">CreatedAt</th>
                {actions && <th className="px-6 py-3 text-center">Actions</th>}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {details?.map((user, index) => (
                <tr key={index} className=" hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{user?.Email}</td>
                  <td className="px-6 py-4">{user?.Password}</td>
                  <td className="px-6 py-4">{user?.ConfirmPassword}</td>
                  <td className="text-center">{user?.createdAt}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    {actions && (
                      <>
                        <Link href={`/user-edit/${user?._id}`}>
                          <button className="text-blue-600 hover:underline">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => deletehandler(user?._id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
