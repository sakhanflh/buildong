/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export function Input({type, id, placeholder, onChange, label}) {
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="relative">
                <input
                    type={type == 'password' ? showPassword ? 'text' : 'password' : type}
                    id={id}
                    className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent peer"
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
                <label
                    htmlFor={id}
                    className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                    {label}
                </label>
                <div className={`absolute inset-y-0 right-0 pr-3 ${type == 'password' ? 'flex' : 'hidden'} items-center text-sm leading-5`}>
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
        </>
    )
}