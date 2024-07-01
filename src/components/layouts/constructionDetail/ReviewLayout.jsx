/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReviewCard from "../../fragments/ReviewCard";
import Stars from "../../elements/Stars";
import SkeletonLoading from "../../fragments/SkeletonLoading";
import Loader from "../../fragments/Loader";

const ReviewLayout = ({isLoading, reviews, setPage, totalPages, page}) => {
    const fiveStars = reviews?.filter(dt => dt.rating == 5);
    const fourStars = reviews?.filter(dt => dt.rating == 4);
    const threeStars = reviews?.filter(dt => dt.rating == 3);
    const twoStars = reviews?.filter(dt => dt.rating == 2);
    const oneStars = reviews?.filter(dt => dt.rating == 1);
    
    return (
        <div className="mt-6 xl:flex xl:gap-6">
                        <div className="xl:w-[30%]">
                            <h1 className="font-bold xl:text-lg">Customer Reviews</h1>
                            {isLoading ? <SkeletonLoading width={'w-20 mt-2'}/> : <p className="text-sm xl:text-base">{reviews?.length} reviews</p>}
                            <div className="flex flex-col gap-1 mt-4 text-sm xl:text-base">
                                <div className="flex justify-between">
                                    <Stars length={5}/>
                                    {isLoading ? <SkeletonLoading width={'w-14'}/> : <p className="text-sm xl:text-base">{fiveStars.length}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={4}/>
                                    {isLoading ? <SkeletonLoading width={'w-10'}/> : <p className="text-sm xl:text-base">{fourStars.length}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={3}/>
                                    {isLoading ? <SkeletonLoading width={'w-10'}/> : <p className="text-sm xl:text-base">{threeStars.length}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={2}/>
                                    {isLoading ? <SkeletonLoading width={'w-8'}/> : <p className="text-sm xl:text-base">{twoStars.length}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={1}/>
                                    {isLoading ? <SkeletonLoading width={'w-8'}/> : <p className="text-sm xl:text-base">{oneStars.length}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm rounded-lg xl:w-[70%] xl:mt-0 xl:border-l-2 xl:px-6 py-2 ">
                            {
                                isLoading ?
                                <Loader/>
                                :
                                reviews.length == 0 ?
                                <div className="w-full text-center py-20 text-lg font-semibold text-neutral-400">No reviews available</div>
                                :
                                reviews.map(dt => (
                                    <ReviewCard
                                    key={dt._id}
                                    name={dt.username}
                                    img={dt.user_image}
                                    postAt={dt.publishedAt}
                                    star={dt.rating}
                                    desc={dt.desc}
                                    />
                                )) 
                            }
                            <div className="flex items-center gap-6 w-full justify-center mt-4 text-sm">
                                <FaChevronLeft onClick={() => setPage(prev => Math.max(prev - 1, 1))} />
                                    <div className="flex gap-3 items-center text-neutral-400">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <div key={i} onClick={() => setPage(i + 1)} className={`w-7 h-7 flex justify-center items-center rounded-full cursor-pointer ${page === i + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                    <FaChevronRight onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} />
                            </div>
                        </div>
                    </div>
    )
}

export default ReviewLayout;