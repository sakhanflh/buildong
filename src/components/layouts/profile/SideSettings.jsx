import { FaLock, FaTrash, FaUserCircle, FaUserEdit } from "react-icons/fa"
import { ListIcon } from "../../elements/ListIcon"
import { FaCartShopping } from "react-icons/fa6";

const SideSettings = () => {
    return (
        <div className="hidden xl:block bg-white rounded-lg shadow-soft h-max pb-4 w-[25%] overflow-hidden">
            <div className="w-full px-4 py-4 border-b-2 text-primary">
                <h1 className="font-bold text-xl">Settings</h1>
            </div>
            <ul className="flex flex-col px-2 pt-6 gap-1">
            <ListIcon
            icon={<FaUserCircle/>}
            text={'Account Details'}
            to={'/profile/details'}
            path={'details'}
            />
            <ListIcon
            icon={<FaCartShopping/>}
            text={'My Orders'}
            to={'/profile/orders/all'}
            path={'orders'}
            />
            <ListIcon
            icon={<FaUserEdit/>}
            text={'Edit Account'}
            to={'/profile/edit'}
            path={'edit'}
            />
            <ListIcon
            icon={<FaLock/>}
            text={'Sign in & Security'}
            to={'/profile/security'}
            path={'security'}
            />
            <ListIcon
            icon={<FaTrash/>}
            text={'Delete Account'}
            to={'/profile/delete'}
            path={'delete'}
            />
        </ul>
    </div>
    )
}

export default SideSettings;