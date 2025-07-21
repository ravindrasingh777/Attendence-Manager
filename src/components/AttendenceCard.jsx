"use client";

import { useRouter } from "next/navigation";
import { CreateAttendence } from "../../utilis/AttendenceHelper";

export default function AttendanceCard() {
  const router = useRouter();

  const submithandler = async (e) => {
    e.preventDefault();
    const userdetails = localStorage.getItem("User-Data");
    const user = JSON.parse(userdetails);

    const data = {
      userId: user._id,
      userName: user.Name,
      dateTime: e.target.dateTime.value,
      attendence: "Present",
    };

    try {
      const response = await CreateAttendence(data);
      console.log("response", response);
      if (response.flag === 1) {
        e.target.reset();
        alert(response.message);
        router.push("/");
        localStorage.removeItem("User-Data");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Mark Attendance
      </h2>

      <form onSubmit={submithandler}>
        <label
          htmlFor="datetime"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Select Date & Time
        </label>
        <input
          type="datetime-local"
          name="dateTime"
          id="datetime"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Present
        </button>
      </form>
    </div>
  );
}
