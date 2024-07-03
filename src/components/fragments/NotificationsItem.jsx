export function NotificationsItem({children, onClick}) {
    return (
        <>
            <div className="block border-b border-black p-2 hover:bg-gray-200 cursor-pointer" onClick={onClick}>
                {children}
            </div>
        </>
    )
}