import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => {
  const { registeredUsers, setRegisteredUsers } = useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    alert("User Registered seccessfully");
    localStorage.setItem("registeredUsers", JSON.stringify(arr));

    reset();
  };
  return (
    <div className="min-h-screen bg-liner-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Register Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black">Create Account 🚀</h1>

            <p className="text-slate-400 mt-2">
              Create an account to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Full Name
              </label>

              <input
                {...register("name", { required: "name is required" })}
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-black placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>

              <input
                {...register("email", { required: "email is required" })}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-black placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
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
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "minimum 6 characters is required",
                  },
                })}
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-black placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition duration-200 shadow-lg shadow-indigo-600/20"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                type="button"
                className="text-indigo-400 font-semibold hover:text-indigo-300 transition"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-xs mt-6">
          © 2026 Your App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
