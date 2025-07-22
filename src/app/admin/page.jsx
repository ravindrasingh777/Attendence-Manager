import React from "react";
import Link from "next/link";

import { GetUsersData } from "../../../utilis/UserHelper";
import { GetAdminsData } from "../../../utilis/AdminHelper";
import AdminDetails from "@/components/AdminDetails";
import Table from "@/components/table";

const Page = async () => {
  // Fetch Users
  let plainUsers = [];
  try {
    const usersData = await GetUsersData();
    plainUsers = Array.isArray(usersData)
      ? usersData.map((user) => ({
          _id: user._id?.toString() || "",
          Email: user.Email || "",
          Password: user.Password || "",
          ConfirmPassword: user.ConfirmPassword || "",
          createdAt: user.createdAt?.toString() || "",
        }))
      : [];
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  // Fetch Admins
  let plainAdmins = [];
  try {
    const adminsData = await GetAdminsData();
    plainAdmins = Array.isArray(adminsData)
      ? adminsData.map((admin) => ({
          _id: admin._id?.toString() || "",
          Email: admin.Email || "",
          Password: admin.Password || "",
          ConfirmPassword: admin.ConfirmPassword || "",
          createdAt: admin.createdAt?.toString() || "",
        }))
      : [];
  } catch (error) {
    console.error("Error fetching admins:", error);
  }

  return (
    <>
      <AdminDetails />
      <Table details={plainUsers} actions="true" />

      <div className="flex w-full items-center justify-center gap-1 mt-2">
        <Link href="/admin-register">
          <button className="px-2 py-1 rounded bg-green-500 text-white">
            Add Admin
          </button>
        </Link>

        <Link href="/">
          <button className="px-2 py-1 rounded bg-red-500 text-white">
            Back
          </button>
        </Link>

        <Link href="/register">
          <button className="px-2 py-1 rounded bg-blue-500 text-white">
            Add User
          </button>
        </Link>

        <Link href="/users-attendences">
          <button className="px-2 py-1 rounded bg-orange-500 text-white">
            Show Attendances
          </button>
        </Link>
      </div>

      <h1 className="text-center text-2xl py-2 mt-10 bg-gray-200">
        All Admins
      </h1>
      <Table details={plainAdmins} actions="true" />
    </>
  );
};

export default Page;
