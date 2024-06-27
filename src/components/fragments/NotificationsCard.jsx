export function NotificationsCard() {
    return (
        <>
            <div className="w-full p-2 hover:bg-gray-100">
                <div className="w-full flex gap-5">
                    <div className="w-12 rounded-full overflow-hidden">
                        <img src="public/img/person.jpg" alt="" className="w-full object-cover"/>
                    </div>
                    <div className="">
                        <p>Admin Add Product</p>
                        <p className="text-font-gray">2 Hours Ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}