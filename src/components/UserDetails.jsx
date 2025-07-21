"use client";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [user, setuser] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("User-Data");
    const Data = JSON.parse(data);
    setuser(Data);
  }, []);
  return (
    <>
      <h1 className="text-2xl text-end  bg-gray-200 py-2 pr-14 ">{`Hello, ${user?.Email}`}</h1>
    </>
  );
};

export default UserDetails;
