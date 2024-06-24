import axios from "axios";
import { useContext, useEffect, useState } from "react"
import LoadBtn from "../../elements/LoadBtn";
import UserContext from "../../../context/UserContext";

const EditLayout = () => {
    let token = localStorage.getItem('token')
    const [newData, setNewData] = useState({
        username: "",
        phone: "",
        address: "",
        photo: "",
    })
    const [defVal, setDefVal] = useState(null)
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(user){
            console.log(user)
            const account = user.user.account
            setDefVal({
                photo: account.profile_picture,
                username: account.username,
                phone: account.phone,
                address: account.address
            })
        }
    }, [user])

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
            if(defVal){
                await axios.patch('https://buildong-api.vercel.app/account', formData, config); 
            } else {
                await axios.post('https://buildong-api.vercel.app/account', formData, config); 
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleRemovePhoto = async () => {
        if (token) {
            token = token.replace(/"/g, '');
        }     
        try {
            const response = await axios.delete('https://buildong-api.vercel.app/account/profile-picture', {
                headers: {
                    'Authorization': `Bearer ${token}` // sesuaikan dengan cara Anda menyimpan token
                }
            });
    
            // Lakukan sesuatu jika penghapusan berhasil
            console.log('Photo removed successfully', response.data);
        } catch (error) {
            console.error('Error removing photo', error);
        }
    };

    return(
        <>
            <div className="flex gap-8 items-center">
                <div className="rounded-full w-20 h-20 bg-neutral-300 overflow-hidden">
                    {
                        !user?.user.account
                        ?
                        ""
                        :
                        <img src={defVal?.photo} alt="" className="w-full h-full object-cover"/>
                    }
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex items-center gap-2">
                        <div className="relative cursor-pointer">
                            <input onChange={(e) => setNewData({...newData, photo: e.target.files[0]})} type="file" className="opacity-0 absolute cursor-pointer"/>
                            <button className="border-primary hover:bg-primary hover:text-white transition-all duration-100 border-2 text-primary rounded-lg px-4 py-2 text-sm">Change photo</button>
                        </div>
                        <p>{newData?.photo.name}</p>
                    </div>
                    <button onClick={handleRemovePhoto} className="border-red-500 w-max hover:bg-red-500 hover:text-white transition-all duration-100 text-red-600 border-2 rounded-lg px-4 py-2 text-sm">Remove photo</button>
                </div>
            </div>
            <form className="mt-8">
                <div className="gap-1 flex xl:gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label className="text-sm xl:text-base font-semibold">Username</label>
                        <input defaultValue={user ? defVal?.username : ''} onChange={(e) => setNewData({...newData, username: e.target.value})} className="text-neutral-500 text-sm border-2 rounded-lg px-4 py-1 xl:text-base xl:py-2"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label className="text-sm xl:text-base font-semibold">Phone Number</label>
                        <input defaultValue={user ? defVal?.phone : ''} onChange={(e) => setNewData({...newData, phone: e.target.value})} className="text-neutral-500 text-sm border-2 rounded-lg px-4 py-1 xl:text-base xl:py-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="text-sm xl:text-base font-semibold">Address</label>
                    <textarea defaultValue={user ? defVal?.address : ''} onChange={(e) => setNewData({...newData, address: e.target.value})} className="text-neutral-500 text-sm border-2 rounded-lg px-4 py-1 xl:text-base xl:py-2"/>
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
        </>
    )
}


export default  EditLayout