import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export function RegisterLayout() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 font-jost">
                <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center">Register</h2>
                    <form className="space-y-6">
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
                                    <FaEyeSlash
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirm-password"
                                className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="confirm-password"
                                className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                            >
                                Confirm Password
                            </label>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                {showConfirmPassword ? (
                                    <FaEyeSlash
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        onClick={toggleConfirmPasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        onClick={toggleConfirmPasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center text-gray-500 mt-4">
                        Already have an account? <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}