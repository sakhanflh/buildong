import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { FaChevronDown, FaChevronUp, FaLock, FaTrash, FaUserCheck, FaUserCircle, FaUserEdit } from "react-icons/fa";
import { ListIcon } from "../elements/ListIcon";
import SimpleAlert from "../fragments/SimpleAlert";

export function Navbar() {
    // const { user } = useContext(UserContext)
    // const { profileId } = useParams()
    const role = localStorage.getItem('role')
    // const token = localStorage.getItem('token')
    // const [showMenu, setShowMenu] = useState(false)
    // const [loading, setLoading] = useState(true)
    // const [msg, setMsg] = useState('')

    // useEffect(() => {
    //     if(user){
    //         setLoading(false)
    //     } 
    // }, [user, profileId])

    // useEffect(() => {
    //     if(!token){
    //         setLoading(false)
    //     }
    // }, [token])

    // async function handleLogOut(){
    //     setLoading(true)
    //     setTimeout(() => {
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('role');
    //         setMsg('Successfully logged out')
    //         setLoading(false)
    //         // window.location.href = '/#/login';
    //     }, 2000)
    
    // }

    return (
        <>
            {/* <div className="xl:flex shadow-soft hidden w-full  h-14 px-[5%] md:w-full xl:h-full md:flex justify-between items-center font-jost text-font-gray xl:border-b-2"> */}
                {/* <div className="font-semibold">
                    <h1 className="text-black hover:text-font-black font-semibold text-xl">BUILDONG</h1>
                </div> */}
                
                <div className="hidden xl:flex gap-10 h-full items-center">
                    <ul className="flex gap-10">
                        <Link to='/'>
                            <li className="hover:text-font-black font-semibold">Home</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Project</li>
                        </Link>

                        <Link to='/shop'>
                            <li className="hover:text-font-black font-semibold">Shop</li>
                        </Link>

                        <Link to={'/constructions'}>
                            <li className="hover:text-font-black font-semibold">Constructions</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Gallery</li>
                        </Link>

                        <Link className={`${role == 'admin' ? '' : 'hidden'}`}>
                            <li className="hover:text-font-black font-semibold">Upload Product</li>
                        </Link>
                    </ul>

                    {/* {
                    loading ?
                    <div className="border-l-2 pl-6 pr-4 relative flex items-center gap-2">
                        <div className="rounded-full h-10 w-10 bg-neutral-400 animate-pulse"></div>
                        <FaChevronDown />
                    </div>
                    :
                    token ? 
                    <div onClick={() => setShowMenu(!showMenu)} className="border-l-2 pl-6 pr-4 relative flex items-center gap-3 cursor-pointer">
                        <div className="rounded-full w-10 h-10 overflow-hidden bg-neutral-300">
                            {
                                !user.user.account
                                ?
                                ""
                                :
                                <img src={user.user.account.profile_picture} alt="" className="w-full h-full object-cover"/>
                            }
                        </div>
                        {
                            showMenu ?
                            <FaChevronUp />
                            :
                            <FaChevronDown />
                        }
                        <div className={`${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'} transition-all duration-500 absolute top-14 right-0 bg-white shadow-multiple w-max h-max rounded-xl`}>
                            <ul className="flex flex-col px-2 gap-1 py-2 text-sm">
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
                            <button onClick={handleLogOut} className="bg-red-500 text-white w-full rounded-lg py-2 mt-4">Log Out</button>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="px-10 py-2 border border-black rounded-3xl hover:bg-primary hover:border-primary hover:text-white">
                        <Link to={'/login'}>
                            <button className="font-semibold">Login</button>
                        </Link>
                    </div>
                    } */}
                </div>

            {/* </div> */}
            {/* <SimpleAlert
            icon={<FaUserCheck/>}
            msg={msg}
            /> */}
        </>
    )
}