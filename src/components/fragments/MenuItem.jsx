export function MenuItem({children, onClick}) {
    return (
        <>
            <div className="block p-2 rounded-md hover:bg-gray-200 cursor-pointer" onClick={onClick}>
                {children}
            </div>
        </>
    )
}