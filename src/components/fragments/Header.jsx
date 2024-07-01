import { Navbar } from "../layouts/Navbar";
import { GiExitDoor, GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../layouts/Sidebar";
import { useContext, useEffect, useState } from "react";
import { ListIcon } from "../elements/ListIcon";
import { FaChevronDown, FaChevronUp, FaLock, FaShoppingBasket, FaTrash, FaUserCheck, FaUserCircle, FaUserEdit } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import { Link, useParams } from "react-router-dom";
import SimpleAlert from "./SimpleAlert";
import SkeletonLoading from "./SkeletonLoading";
import { FaBuildingUser, FaCartShopping, FaDoorOpen, FaMedal } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Notifications } from "../layouts/admin/Notifications";


export function Header() {
    const [showSidebar, setShowSidebar] = useState(false)
    const { user, points, level } = useContext(UserContext)
    const { profileId } = useParams()
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const [showMenu, setShowMenu] = useState(false)
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [showNotifications, setShowNotifications] = useState(false)

    const handleShowNotif = () => {
        console.log('Hello World!')
        setShowNotifications(!showNotifications)
    }
    useEffect(() => {
        if (user) {
            setLoading(false)
        }
    }, [user, profileId])

    useEffect(() => {
        if (!token) {
            setLoading(false)
        }
    }, [token])

    async function handleLogOut() {
        setLoading(true)
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            setLoading(false)
            setMsg('Successfully logged out')
            window.location.href = '/#/';
        }, 2000)
    }
    function handleShowSidebar() {
        setShowSidebar(!showSidebar)
    }

    return (
        <>
            <div className="bg-white shadow-md justify-center xl:shadow-none w-full top-0 z-50 h-16 flex px-[5%] fixed font-jost  text-font-gray items-center">
                <div className="w-full flex items-center justify-between">
                    <GiHamburgerMenu className="text-2xl xl:hidden" onClick={handleShowSidebar} />
                    <h1 className="hidden font-semibold text-xl xl:block">BUILDONG</h1>
                </div>
                <div className="flex gap-10 items-center">
                    <Navbar />
                    {
                        loading ?
                            <div className="xl:border-l-2 xl:pl-6 pr-4 relative flex items-center gap-2">
                                <div className="rounded-full h-10 w-10 overflow-hidden">
                                    <SkeletonLoading height={'h-full'} />
                                </div>
                                <FaChevronDown />
                            </div>
                            :
                            token ?
                                <div onClick={() => setShowMenu(!showMenu)} className="xl:border-l-2 xl:pl-6 xl:pr-4 relative flex items-center gap-3 cursor-pointer">
                                    <div className="relative">
                                        <div className="text-3xl mr-3 z-50" onClick={handleShowNotif}>
                                            <IoIosNotificationsOutline />
                                        </div>
                                        <Notifications
                                            showNotifications={showNotifications}
                                        />
                                    </div>
                                    <div className="rounded-full outline outline-primary outline-offset-2 w-9 h-9 xl:w-10 xl:h-10 overflow-hidden bg-neutral-300">
                                        {
                                            role == 'admin' ? <img src={'/img/admin.jpg'} alt="" className="w-full h-full object-cover" />
                                                :
                                                !user.user.account
                                                    ?
                                                    ""
                                                    :
                                                    <img src={user.user.account.profile_picture} alt="" className="w-full h-full object-cover" />
                                        }
                                    </div>
                                    <FaChevronUp className={`${showMenu ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} />
                                    {
                                        role == 'admin'
                                            ?
                                            <div className={`${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'} transition-all duration-500 absolute top-14 right-0 bg-white shadow-multiple w-max h-max rounded-xl`}>
                                                <ul className="flex flex-col px-2 gap-1 py-2 text-sm">
                                                    <ListIcon
                                                        icon={<FaShoppingBasket />}
                                                        text={'Upload product'}
                                                        to={'/admin'}
                                                        path={'admin'}
                                                    />
                                                    <button onClick={handleLogOut} className="bg-red-500 text-white w-full flex items-center justify-center gap-3 rounded-lg py-2 mt-4">
                                                        <GiExitDoor />
                                                        Log Out
                                                    </button>
                                                </ul>
                                            </div>
                                            :
                                            <div className={`${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-[500px] opacity-0'} transition-all duration-500 absolute top-14 right-0 bg-white shadow-multiple w-max h-max rounded-xl`}>
                                                <ul className="flex flex-col px-3 gap-1 py-3 text-sm">
                                                    <div className={`${level?.toLowerCase()} px-2 py-3 rounded-lg font-bold text-center`}>
                                                        <h1>{level?.toUpperCase()}</h1>
                                                    </div>
                                                    <div className="px-4 py-3 border-b-2 flex items-center gap-4 font-semibold text-black">
                                                        <FaMedal className="text-primary" />
                                                        <h1>{points ? points : 0} pts</h1>
                                                    </div>
                                                    <ListIcon
                                                        icon={<FaUserCircle />}
                                                        text={'Account Details'}
                                                        to={'/profile/details'}
                                                        path={'details'}
                                                    />
                                                    <ListIcon
                                                        icon={<FaCartShopping />}
                                                        text={'My Orders'}
                                                        to={'/profile/orders/all'}
                                                        path={'orders'}
                                                    />
                                                    <ListIcon
                                                        icon={<FaUserEdit />}
                                                        text={'Edit Account'}
                                                        to={'/profile/edit'}
                                                        path={'edit'}
                                                    />
                                                    <ListIcon
                                                        icon={<FaLock />}
                                                        text={'Sign in & Security'}
                                                        to={'/profile/security'}
                                                        path={'security'}
                                                    />
                                                    <ListIcon
                                                        icon={<FaTrash />}
                                                        text={'Delete Account'}
                                                        to={'/profile/delete'}
                                                        path={'delete'}
                                                    />
                                                    <button onClick={handleLogOut} className="bg-red-500 text-white w-full rounded-lg py-2 mt-4 flex items-center justify-center gap-4">
                                                        <FaDoorOpen />
                                                        Log Out
                                                    </button>
                                                </ul>
                                            </div>

                                    }
                                </div>
                                :
                                <div className="px-10 py-2 border border-black rounded-3xl hover:bg-primary hover:border-primary hover:text-white">
                                    <Link to={'/login'}>
                                        <button className="font-semibold">Login</button>
                                    </Link>
                                </div>
                    }

                </div>
                <Sidebar onShowSidebar={showSidebar} />
            </div>
            <SimpleAlert
                icon={<FaUserCheck />}
                msg={msg}
            />
        </>
    )
}