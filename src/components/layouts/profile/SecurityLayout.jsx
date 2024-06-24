import SmSkeleton from "../../elements/SmSkeleton";

/* eslint-disable react/prop-types */
const SecurityLayout = ({ user, loading }) => {
    return (
        <div>
            <div className="text-sm flex justify-between xl:text-base">
                <h1 className="font-semibold">Email</h1>
                {
                    loading ? 
                    <SmSkeleton width={'w-32'}/>
                    :
                    <h1 className="text-neutral-400">{user?.user.email}</h1>
                }
            </div>
        </div>
    )
}

export default SecurityLayout;