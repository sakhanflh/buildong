import { useState } from "react";
import { CiShop } from "react-icons/ci";
import { MenuAdmin } from "../../fragments/MenuAdmin";
import { MenuItem } from "../../fragments/MenuItem";
import { MdOutlineAnalytics } from "react-icons/md";


export function Sidebar({ activeMenu, onMenuClick, setVisibleComponent }) {
    return (
        <>
            <div className="w-[20%] flex flex-col bg-gray-100 p-5  text-font-gray">
                <h1 className="text-2xl font-semibold">BUILDONG</h1>
                <div className="mt-10 flex flex-col gap-5">
                    <MenuAdmin
                        title="My shop"
                        icon={<span><CiShop /></span>}
                        activeMenu={activeMenu}
                        onMenuClick={onMenuClick}
                    >
                        <MenuItem onClick={() => setVisibleComponent('Products')}>Products</MenuItem>
                        <MenuItem onClick={() => setVisibleComponent('Constructions')}>Constructions</MenuItem>
                    </MenuAdmin>
                </div>
            </div>
        </>
    )
}