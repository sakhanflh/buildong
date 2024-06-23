import axios from "axios";
import { useEffect, useState } from "react";
import { FaExclamationTriangle, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Input } from "../../fragments/Input";
import LoadBtn from "../../elements/LoadBtn";
import SimpleAlert from "../../fragments/SimpleAlert";

export function LoginLayout() {
    const [newData, setNewData] = useState({
        email : '',
        password: '',
    })
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [isError, setIsError] = useState(false)

    const handleSubmit = async(e) => {
        setMsg('')
        setLoading(true)
        e.preventDefault()
        try {
            const res = await axios.post('https://buildong-api.vercel.app/login', newData)
            console.log(res.data)
            if(res.data.role == 'admin'){
                setMsg(res.data.message)
                setIsError(false)
                localStorage.setItem('token', JSON.stringify(res.data.token))
                localStorage.setItem('role', res.data.role)
                setLoading(false)
                window.location.href = '/'
                return 
            }
            setMsg(res.data.message)
            setIsError(false)
            localStorage.setItem('token', JSON.stringify(res.data.token))
            localStorage.setItem('role', JSON.stringify(res.data.role))
            setLoading(false)
            window.location.href = '/'
        } catch (error) {
            console.log(error)
            const errorMsg = Array.isArray(error.response.data.message) ? error.response.data.message[0] : error.response.data.message
            setIsError(true)
            setLoading(false)
            setMsg(errorMsg)
        }
    }

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
                    <LoadBtn
                    loading={loading}
                    onClick={handleSubmit}
                    value={'Sign In'}
                    />
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
            {
                isError 
                ?
                <SimpleAlert 
                msg={msg}
                bg={'bg-red-600'}
                icon={<FaExclamationTriangle/>}
                />
                :
                <SimpleAlert
                msg={msg}
                />
            }
        </>
    )
}