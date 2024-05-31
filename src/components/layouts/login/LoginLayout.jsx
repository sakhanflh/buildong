import { useState } from "react";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export function LoginLayout() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="p-[5%] flex flex-col gap-5 items-center font-jost">
                <h1 className="text-2xl font-medium">Welcome Back!</h1>

                <form className="space-y-6 w-full">
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                        >
                            Password
                        </label>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            {showPassword ? (
                                <FaRegEye
                                    className="h-5 w-5 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            ) : (
                                <FaRegEyeSlash
                                    className="h-5 w-5 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" className="cursor-pointer" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <div>
                            <p className="text-primary hover:text-blue-700 cursor-pointer">Forgot Password?</p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between my-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="w-full flex gap-2 items-center justify-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
                            <FcGoogle className="text-2xl" />
                            <p className="font-medium">Continue with Google</p>
                        </button>

                        <button className="w-full flex gap-2 items-center justify-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
                            <FaFacebook className="text-2xl text-blue-700" />
                            <p className="font-medium">Continue with Google</p>
                        </button>
                        <p className="text-center text-gray-500 mt-4">
                            Don't have an account? 
                            <Link to={'/register'} className="text-blue-500 hover:underline"> Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}