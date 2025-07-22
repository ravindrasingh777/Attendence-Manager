import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Attendance Manager
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <Link href="/user-login" className="hover:text-blue-600">
              Login
            </Link>
          </nav>
          <button className="md:hidden text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 py-20 bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Simplify Employee Attendance
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Track, manage, and optimize your team&apos;s attendance with ease
            and accuracy.
          </p>
          <Link href="/user-login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">
              Instant visibility of employee check-ins and check-outs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Automated Reports</h3>
            <p className="text-gray-600">
              Generate detailed reports for attendance analytics.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-600">
              Connect with HR and payroll tools seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Attendance Manager. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
