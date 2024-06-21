import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "../../fragments/Input";

export function RegisterLayout() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newData, setNewData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        console.log(newData)
    }, [newData])

    const handleRegister = async () => {
        if (confirmPassword !== newData.password) {
            alert("salah")
            return
        }
        try {
            const res = await axios.post('https://buildong-api.vercel.app/register', newData)
            console.log(res)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

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
                        id={'password'}
                        onChange={(e) => setNewData({ ...newData, password: e.target.value })}
                        label={'Confirm Password'}
                        type={'password'}
                        placeholder={''}
                        />
                        <button
                            onClick={handleRegister}
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