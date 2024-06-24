
/* eslint-disable react/prop-types */
const DetailsLayout = ({user, loading}) => {
    const account = user?.user.account

    return (
        <>
            <div className="flex gap-4">
                {
                    loading ?
                    <div className="bg-neutral-300 animate-pulse w-20 h-20 rounded-full"></div>
                    :
                    <div className="rounded-full w-14 h-14 xl:w-20 xl:h-20 overflow-hidden">
                        <img src={account?.profile_picture} alt=""  className="w-full h-full object-cover"/>
                    </div>
                }
                {
                    loading ?
                    <div>
                        <div className="bg-neutral-400 animate-pulse rounded-full w-32 h-2"></div>
                        <div className="bg-neutral-300 mt-2 animate-pulse rounded-full w-40 h-2"></div>
                    </div>
                    :
                    <div>
                        <h1 className="font-semibold text-base xl:text-lg">{account?.username}</h1>
                        <h1 className="text-neutral-600 text-sm xl:text-base">{user.user.email}</h1>
                    </div>
                }
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-primary text-base xl:text-base">Address</h1>
                {
                    loading ?
                    <div className="bg-neutral-300 animate-pulse w-52 h-2 mt-2 rounded-full"></div>
                    :
                    <p className="text-neutral-500 text-sm xl:text-base">{account?.address}</p>
                }
            </div>
            <div className="mt-4">
                <h1 className="font-semibold text-primary text-base xl:text-base">Phone Number</h1>
                {
                    loading ?
                    <div className="bg-neutral-300 animate-pulse w-32 h-2 mt-2 rounded-full"></div>
                    :
                    <p className="text-neutral-500 text-sm xl:text-base">{account?.phone}</p>
                }
            </div>
        </>
    )
}

export default DetailsLayout;