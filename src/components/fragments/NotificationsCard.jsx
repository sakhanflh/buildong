export function NotificationsCard({ dt }) {
    return (
        <>
            <div className="w-full p-2 hover:bg-gray-100">
                <div className="w-full flex gap-5">
                    <div className="w-12 rounded-full overflow-hidden">
                        <img src="/img/person.jpg" alt="" className="w-full object-cover" />
                    </div>
                    <div className="">
                        <p>{dt.title}</p>
                        <p className="text-font-gray">{dt.desc}</p>
                        <p>{dt.discount_type}</p>
                        <p>{dt.minimum_order}</p>
                        <p>{dt.user_level}</p>
                    </div>
                </div>
            </div>
        </>
    )
}