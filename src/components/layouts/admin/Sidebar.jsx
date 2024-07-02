import { CiShop } from "react-icons/ci";
import { MenuAdmin } from "../../fragments/MenuAdmin";
import { MenuItem } from "../../fragments/MenuItem";


export function Sidebar({ activeMenu, onMenuClick, setVisibleComponent, showSidebar }) {
    return (
        <>
            <div className={`xl:w-[20%] h-[50rem] z-50 xl:h-auto fixed xl:translate-y-0 translate-y-16 xl:relative flex flex-col bg-gray-100 p-5 transition-all duration-500 ease-in-out text-font-gray ${showSidebar ? 'translate-x-0' : 'xl:translate-x-0 -translate-x-full'}`}>
                <h1 className="text-2xl font-semibold hidden xl:block">BUILDONG</h1>
                <div className="xl:mt-10 flex flex-col gap-5">
                    <MenuAdmin
                        title="My shop"
                        icon={<span><CiShop /></span>}
                        activeMenu={activeMenu}
                        onMenuClick={onMenuClick}
                    >
                        <MenuItem onClick={() => setVisibleComponent('Products')}>Products</MenuItem>
                        <MenuItem onClick={() => setVisibleComponent('Constructions')}>Constructions</MenuItem>
                        <MenuItem onClick={() => setVisibleComponent('Voucher')}>Voucher</MenuItem>
                    </MenuAdmin>
                </div>
            </div>
        </>
    )
}