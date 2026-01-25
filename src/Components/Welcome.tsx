"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        {/* LEFT SECTION */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-teal-900 to-slate-900">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Fresh Food & <br /> Daily Groceries 🛒
          </h1>

          <p className="text-green-100 mt-4 text-lg">
            Order fresh vegetables, fruits, and daily essentials delivered
            safely to your doorstep.
          </p>

          <ul className="mt-6 space-y-3 text-green-50">
            <li>✅ Farm-fresh quality products</li>
            <li>🚚 Fast & reliable delivery</li>
            <li>💳 Secure & easy payments</li>
          </ul>

          <p className="mt-8 text-sm text-green-200">
            Login to manage your orders and track deliveries in real-time.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white text-center">
            Create Account
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Sign up to get started
          </p>

          <form className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Dheeraj Thakur"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
