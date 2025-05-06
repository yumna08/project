import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex p-4 loginBg  bg-center">
      <div className=" p-12 rounded-3xl border-2 border-gray-200 w-lg">
       <header className="mb-10"> 
          <h1 className="text-4xl font-bold text-red-900">
            Welcome Back
          </h1>
          <p className="text-red-700 mt-3 text-lg">
            Welcome back! Please Login.
          </p>
        </header>
        <form className="space-y-7">
        

          <div className="space-y-1.5">
            <label for="email"
              className="block text-red-700 font-medium text-lg">
                Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-5 py-3.5 border-2
                       border-red-300 rounded-3xl
                       focus:border-rose-500 focus:ring-1
                       focus:ring-rose-800
                      text-red-700
                       transition-all duration-200 outline-none"
              placeholder="Enter your email"/>
          </div>

          


          <div className="space-y-1.5">
            <label
              for="password"
              className="block text-red-700 font-medium text-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-5 py-3.5 border-2
                       border-red-300 rounded-3xl
                       focus:border-rose-500 focus:ring-1
                       focus:ring-rose-800
                       text-red-700 
                       transition-all duration-200 outline-none"
              placeholder="Enter your password"/>
          </div>

       


          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-5 w-5 rounded border-red-300 text-red-300 
                         focus:ring-red-400 transition"
              />
              <label
                for="remember"
                className="ml-3 text-red-800 font-medium">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-red-900 hover:text-rose-950 font-medium 
                         transition-colors duration-200">
              Forgot password?
            </button>
          </div>

         


          <button
            type="submit"
            className="w-full mt-8 py-4
                       bg-red-900
                       hover:bg-rose-950
                       text-white 
                       font-semibold rounded-xl shadow-sm
                       transform hover:-translate-y-0.5 transition-all 
                       duration-200 active:translate-y-0">
              Sign In
          </button>
        
        </form>

        
        <p className="text-center text-red-700 mt-10 text-sm">
              Don't have an account?
          <button 
            className="text-red-900 font-medium hover:text-rose-950">
              Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
