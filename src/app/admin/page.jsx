import React from "react";
import fetchuserdata from "@/apicalls/fetchdata";
import Table from "@/components/table";
import Link from "next/link";
import AdminDetails from "@/components/AdminDetails";
import { GetAdminsData } from "../../../utilis/AdminHelper";
import { cookies } from "next/headers";

const Page = async () => {
  const response = await fetchuserdata();
  const result = await response?.json();

  // Get data from backend(mongodb) without calling api..
  const adminsData = await GetAdminsData();

  // convert server arrobj to normal arrobj...
  const plainAdmins = adminsData.map((admin) => ({
    _id: admin._id.toString(), // convert ObjectId to string
    Email: admin.Email,
    Password: admin.Password,
    ConfirmPassword: admin.ConfirmPassword,
    createdAt: admin.createdAt.toString(),
  }));

  return (
    <>
      <AdminDetails />
      <Table details={result?.userData} actions="true" />
      <div className="flex w-full items-center justify-center gap-1 mt-2">
        <Link href="/admin-register">
          <button className="px-2 py-1  rounded bg-green-500 text-white">
            Add Admin
          </button>
        </Link>

        <Link href="/">
          <button className="px-2 py-1  rounded bg-red-500 text-white">
            Back
          </button>
        </Link>

        <Link href="/register">
          <button className="px-2 py-1  rounded bg-blue-500 text-white">
            Add User
          </button>
        </Link>

        <Link href="/users-attendences">
          <button className="px-2 py-1  rounded bg-orange-500 text-white">
            Show Attendences
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
