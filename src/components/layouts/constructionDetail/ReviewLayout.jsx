import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReviewCard from "../../fragments/ReviewCard";
import Stars from "../../elements/Stars";
import SkeletonLoading from "../../fragments/SkeletonLoading";

const ReviewLayout = ({isLoading}) => {
    return (
        <div className="mt-6 xl:flex xl:gap-6">
                        <div className="xl:w-[30%]">
                            <h1 className="font-bold xl:text-lg">Customer Reviews</h1>
                            {isLoading ? <SkeletonLoading width={'w-20 mt-2'}/> : <p className="text-sm xl:text-base">1134 reviews</p>}
                            <div className="flex flex-col gap-1 mt-4 text-sm xl:text-base">
                                <div className="flex justify-between">
                                    <Stars length={5}/>
                                    {isLoading ? <SkeletonLoading width={'w-14'}/> : <p className="text-sm xl:text-base">1134</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={4}/>
                                    {isLoading ? <SkeletonLoading width={'w-10'}/> : <p className="text-sm xl:text-base">92</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={3}/>
                                    {isLoading ? <SkeletonLoading width={'w-10'}/> : <p className="text-sm xl:text-base">20</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={2}/>
                                    {isLoading ? <SkeletonLoading width={'w-8'}/> : <p className="text-sm xl:text-base">8</p>}
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={1}/>
                                    {isLoading ? <SkeletonLoading width={'w-8'}/> : <p className="text-sm xl:text-base">8</p>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm rounded-lg xl:w-[70%] xl:mt-0 xl:border-l-2 xl:px-6 py-2 ">
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <div className="flex items-center gap-6 w-full justify-center mt-4 text-sm">
                                <FaChevronLeft/>
                                <div className="bg-primary text-white font-bold rounded-lg px-4 py-2">1</div>
                                <FaChevronRight/>
                            </div>
                        </div>
                    </div>
    )
}

export default ReviewLayout;