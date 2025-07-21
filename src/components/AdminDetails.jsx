"use client";
import React, { useEffect, useState } from "react";

const AdminDetails = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("Data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <h1 className="text-2xl text-end bg-gray-200 py-2 pr-14">
        {Data ? `Hello, ${Data.Email}` : "Loading..."}
      </h1>
    </>
  );
};

export default AdminDetails;
