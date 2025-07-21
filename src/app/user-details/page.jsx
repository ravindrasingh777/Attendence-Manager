import React from "react";
import UserDetails from "@/components/UserDetails";
import Table from "@/components/table";
import AttendanceCard from "@/components/AttendenceCard";
import Link from "next/link";
import { cookies } from "next/headers";

const Page = async () => {
  const cookiestore = await cookies();
  const user = cookiestore.get("User");
  const value = JSON.parse(user?.value);

  return (
    <>
      <UserDetails />
      <AttendanceCard />
      <Link href={`/user-details/${value?._id}`}>
        <div className="text-center mt-14">
          <button className="bg-blue-500 text-white px-2 py-1 rounded ">
            Show Attendence
          </button>
        </div>
      </Link>
    </>
  );
};

export default Page;
