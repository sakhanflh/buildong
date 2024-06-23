import { FaLock, FaTrash, FaUserCircle, FaUserEdit } from "react-icons/fa";
import Layout from "../components/layouts/Layout";
import { Navbar } from "../components/layouts/Navbar";
import { ListIcon } from "../components/elements/ListIcon";
import { useParams } from "react-router-dom";
import DetailsLayout from "../components/layouts/profile/DetailsLayout";
import { useContext, useEffect, useState } from "react";
import EditLayout from "../components/layouts/profile/EditLayout";
import UserContext from "../context/UserContext";

const ProfilePage = () => {
    const { profileId } = useParams();
    const [data, setData] = useState([])
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(user){
            setLoading(false)
            console.log(user)
        }
    }, [user])

    return (
        <>
        <Navbar/>
        <Layout>
            <div className="flex gap-4 items-start">
                <div className="bg-white rounded-lg shadow-soft h-max pb-4 w-[25%] overflow-hidden">
                    <div className="w-full px-4 py-4 border-b-2 text-primary">
                        <h1 className="font-bold text-xl">Settings</h1>
                    </div>
                    <ul className="flex flex-col px-2 pt-6 gap-1">
                        <ListIcon
                        icon={<FaUserCircle/>}
                        text={'Account Details'}
                        to={'details'}
                        />
                        <ListIcon
                        icon={<FaUserEdit/>}
                        text={'Edit Account'}
                        to={'edit'}
                        />
                        <ListIcon
                        icon={<FaLock/>}
                        text={'Sign in & Security'}
                        to={'security'}
                        />
                        <ListIcon
                        icon={<FaTrash/>}
                        text={'Delete Account'}
                        to={'delete'}
                        />
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-soft h-max w-[80%]">
                    <div className="w-full px-4 py-4 text-primary border-b-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FaUserCircle className="text-xl"/>
                            <h1 className="font-bold text-xl">Account Details</h1>
                        </div>
                        {
                            loading ?
                            <div className="w-40 h-2 bg-neutral-200 animate pulse rounded-full"></div>
                            :
                            <h1 className="font-semibold text-neutral-400">USER ID : {user?.user._id}</h1>
                        }
                    </div>
                    { profileId == 'details' && <DetailsLayout user={user} loading={loading}/>}
                    { profileId == 'edit' && <EditLayout/>}
                </div>
            </div>
        </Layout>
        </>
    )
}

export default ProfilePage;