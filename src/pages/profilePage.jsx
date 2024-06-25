import { FaLock, FaTrash, FaUser, FaUserEdit } from "react-icons/fa";
import Layout from "../components/layouts/Layout";
import { useParams } from "react-router-dom";
import DetailsLayout from "../components/layouts/profile/DetailsLayout";
import { useContext, useEffect, useState } from "react";
import EditLayout from "../components/layouts/profile/EditLayout";
import UserContext from "../context/UserContext";
import { Header } from "../components/fragments/Header";
import SideSettings from "../components/layouts/profile/SideSettings";
import IconTitle from "../components/elements/IconTitle";
import SecurityLayout from "../components/layouts/profile/SecurityLayout";
import DeleteLayout from "../components/layouts/profile/DeleteLayout";
import SkeletonLoading from "../components/fragments/SkeletonLoading";

const ProfilePage = () => {
    const { profileId } = useParams();
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState({
        title: '',
        icon: null,
    })

    useEffect(() => {
        if(profileId == 'edit'){
            setTitle({title: 'Edit Account', icon: <FaUserEdit/>})
        } else if(profileId == 'security'){
            setTitle({title: 'Sign-in & Security', icon: <FaLock/>})
        } else if(profileId == 'delete'){
            setTitle({title: 'Delete Account', icon: <FaTrash/>})
        } else {
            setTitle({title: 'Account Details', icon: <FaUser/>})
        }
    }, [profileId])

    useEffect(() => {
        if(user){
            setLoading(false)
            console.log(user)
        }
    }, [user])

    return (
        <>
        <Header/>
        <Layout>
            <div className="px-[5%] flex gap-4 items-start">
                <SideSettings/>
                <div className="bg-white w-full rounded-lg shadow-soft h-max xl:w-[80%]">
                    <div className="flex-col w-full px-4 py-4 text-primary border-b-2 flex xl:flex-row xl:items-center xl:justify-between">
                        <IconTitle icon={title.icon} title={title.title}/>
                        {
                            loading ?
                            <div className="hidden xl:block w-40 h-2">
                                <SkeletonLoading/>
                            </div>
                            :
                            <h1 className="text-sm font-semibold hidden mt-2 text-neutral-400 xl:text-base xl:block xl:-mt-0 uppercase">USER ID : {user?.user._id}</h1>
                        }
                    </div>
                    <div className="py-4 px-8">
                        { profileId == 'details' && <DetailsLayout user={user} loading={loading}/>}
                        { profileId == 'edit' && <EditLayout/>}
                        { profileId == 'security' && <SecurityLayout user={user} loading={loading}/>}
                        { profileId == 'delete' && <DeleteLayout/>}
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default ProfilePage;