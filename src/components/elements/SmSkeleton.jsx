/* eslint-disable react/prop-types */
const SmSkeleton = ({width}) => {
    return (
        <div className={`bg-neutral-300 animate-pulse ${width ? width : 'w-full'} h-2 mt-2 rounded-full`}></div>
    )
}

export default SmSkeleton;