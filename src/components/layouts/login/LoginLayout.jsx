import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Input } from "../../fragments/Input";

export function LoginLayout() {
    const [newData, setNewData] = useState({
        email : '',
        password: '',
    })

    

    const handleSubmit = async() => {
        try {
            await axios.post('https://buildong-api.vercel.app/login', newData)
            window.location.href = '/'
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    useEffect(() => {
        console.log(newData)
    }, [newData])

    return (
        <>
            <div className="p-[5%] flex flex-col gap-5 items-center font-jost">
                <h1 className="text-2xl font-medium">Welcome Back!</h1>

                <form className="space-y-6 w-full">
                    <Input
                    id={'email'}
                    onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                    label={'Email'}
                    type={'email'}
                    placeholder={''}
                    />
                    <Input
                    id={'password'}
                    onChange={(e) => setNewData({...newData, password: e.target.value})}
                    label={'Password'}
                    type={'password'}
                    placeholder={''}
                    />
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
                        onClick={handleSubmit}
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