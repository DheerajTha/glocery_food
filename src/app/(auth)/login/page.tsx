"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOff, IoEyeOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e:FormEvent) => { 
    e.preventDefault();
    setLoading(true);
    try {
        await signIn("credentials",{
          email,
          password,

        } )
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 px-4 py-8">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-300">
        {/* LEFT SECTION - Enhanced */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-teal-900/90 via-emerald-900/80 to-slate-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <span className="text-3xl">🛒</span>
              </div>
              <h1 className="text-4xl font-bold text-white leading-tight">
                Fresh Food & <br /> Daily Groceries
              </h1>
            </div>

            <p className="text-green-100/90 mt-4 text-lg leading-relaxed">
              Order fresh vegetables, fruits, and daily essentials delivered
              safely to your doorstep with guaranteed quality.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-green-50">
                <div className="p-1.5 bg-green-500/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Farm-fresh quality products</span>
              </li>
              <li className="flex items-center gap-3 text-green-50">
                <div className="p-1.5 bg-blue-500/20 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <span>Fast & reliable delivery</span>
              </li>
              <li className="flex items-center gap-3 text-green-50">
                <div className="p-1.5 bg-purple-500/20 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span>Secure & easy payments</span>
              </li>
            </ul>

            <div className="mt-10 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="text-sm text-green-200/90 leading-relaxed">
                <span className="font-semibold text-white">Pro Tip:</span> Login
                to manage your orders, track deliveries in real-time, and get
                personalized recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Enhanced */}
        <div className="p-8 md:p-12 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome Back!
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <span>📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white placeholder-gray-400/70 border border-white/10 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <span>🔒</span>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white placeholder-gray-400/70 border border-white/10 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 pr-12"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEyeOff className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white" />
                    ) : (
                      <IoEyeOutline className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={!email || !password || loading}
                className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  email && password
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-teal-500/25 cursor-pointer"
                    : "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin " />
                ) : (
                  " Login"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10"></div>
              <span className="px-4 text-gray-500 text-sm font-medium">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            {/* Google Login */}
            <button onClick={() => signIn("google") } className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-white/5 text-gray-300 font-medium hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-200 group">
              <FcGoogle
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Continue with Google
            </button>

            {/* Login Link */}
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/register"
                  className="text-teal-400 hover:text-teal-300 font-medium hover:underline transition-colors"
                >
                  SigUp in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
