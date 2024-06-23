import axios from "axios";
import { useContext, useEffect, useState } from "react"
import LoadBtn from "../../elements/LoadBtn";
import UserContext from "../../../context/UserContext";

const EditLayout = () => {
    const [newData, setNewData] = useState({
        username: "",
        phone: "",
        address: "",
        photo: "",
    })
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(newData)
    }, [newData])

    async function handleUpdateData(e){
        e.preventDefault()
        setLoading(true)
        try {
            let token = localStorage.getItem('token');
            if (token) {
                token = token.replace(/"/g, '');
            }  

            const formData = new FormData();
            formData.append('username', newData.username);
            formData.append('phone', newData.phone);
            formData.append('address', newData.address);
            if (newData.photo) {
                formData.append('photo', newData.photo);
            }

            const config = {
                headers: { 
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            };
            console.log(config.headers.authorization)
            
            const response = await axios.post('https://buildong-api.vercel.app/account', formData, config); 
            console.log(response)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return(
        <div className="py-8 px-8">
            <div className="flex gap-8 items-center">
                <div className="rounded-full w-20 h-20 bg-neutral-300 overflow-hidden">
                    {
                        !user?.user.account
                        ?
                        ""
                        :
                        <img src={user?.user.account.profile_picture} alt="" className="w-full h-full object-cover"/>
                    }
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex items-center gap-2">
                        <div className="relative cursor-pointer">
                            <input onChange={(e) => setNewData({...newData, photo: e.target.files[0]})} type="file" className="opacity-0 absolute"/>
                            <button className="border-primary hover:bg-primary hover:text-white transition-all duration-100 border-2 text-primary rounded-lg px-4 py-2 text-sm">Change photo</button>
                        </div>
                        <p>{newData?.photo.name}</p>
                    </div>
                    <button className="border-red-500 w-max hover:bg-red-500 hover:text-white transition-all duration-100 text-red-600 border-2 rounded-lg px-4 py-2 text-sm">Remove photo</button>
                </div>
            </div>
            <form className="mt-8">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label className="font-semibold">Username</label>
                        <input onChange={(e) => setNewData({...newData, username: e.target.value})} className="text-neutral-500 border-2 rounded-lg px-4 py-2"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label className="font-semibold">Phone Number</label>
                        <input onChange={(e) => setNewData({...newData, phone: e.target.value})} className="text-neutral-500 border-2 rounded-lg px-4 py-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold">Address</label>
                    <textarea onChange={(e) => setNewData({...newData, address: e.target.value})} className="text-neutral-500 border-2 rounded-lg px-4 py-2"/>
                </div>
                <div className="flex w-full justify-end mt-6">
                    <LoadBtn
                    width={'w-max'}
                    loading={loading}
                    onClick={handleUpdateData}
                    value={'Update Profile'}
                    />
                </div>
            </form>
        </div>
    )
}


export default  EditLayout