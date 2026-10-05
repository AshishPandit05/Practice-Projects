import React from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-liner-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome Back 👋</h1>
            <p className="text-slate-400 mt-2">
              Login to continue to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition duration-200 shadow-lg shadow-indigo-600/20"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <div className="mt-7 text-center">
            <p className="text-slate-400 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="text-indigo-400 font-semibold hover:text-indigo-300 transition"
              >
                Register
              </button>
            </p>
          </div>
        </div>

        {/* Small Footer */}
        <p className="text-center text-slate-500 text-xs mt-6">
          © 2026 Your App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
