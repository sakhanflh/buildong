import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../fragments/Input";
import LoadBtn from "../../elements/LoadBtn";
import SimpleAlert from "../../fragments/SimpleAlert";
import { FaExclamationTriangle } from "react-icons/fa";

export function RegisterLayout() {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [newData, setNewData] = useState({
        email: '',
        password: '',
    })
    const [msg, setMsg] = useState('')
    const [isError, setIsError] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        setMsg("")
        setLoading(true)
        if (confirmPassword !== newData.password) {
            setMsg("Passwords do not match. Please try again.")
            setLoading(false)
            return
        }
        try {
            const res = await axios.post('https://buildong-api.vercel.app/register', newData)
            setMsg(res.data.message)
            setIsError(false)
            setLoading(false)
            console.log(res)
        } catch (error) {
            const errorMsg = Array.isArray(error.response.data.message) ? error.response.data.message[0] : error.response.data.message
            setIsError(true)
            setLoading(false)
            setMsg(errorMsg)
        } 
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 font-jost">
                <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center">Register</h2>
                    <form className="space-y-6">
                        <Input
                            id={'email'}
                            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                            label={'Email'}
                            type={'email'}
                            placeholder={''}
                        />
                        <Input
                        id={'password'}
                        onChange={(e) => setNewData({ ...newData, password: e.target.value })}
                        label={'Password'}
                        type={'password'}
                        placeholder={''}
                        />
                        <Input
                        id={'confirmPassword'}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        label={'Confirm Password'}
                        type={'password'}
                        placeholder={''}
                        />
                        <LoadBtn
                        loading={loading}
                        onClick={handleRegister}
                        value={'Register'}
                        />
                    </form>
                    <p className="text-center text-gray-500 mt-4">
                        Already have an account? <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link>
                    </p>
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