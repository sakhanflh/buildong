import { FaLock, FaTrash, FaUserCircle, FaUserEdit } from "react-icons/fa"
import { ListIcon } from "../../elements/ListIcon"

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
    )
}

export default SideSettings;