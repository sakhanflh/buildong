import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Loader from "../../fragments/Loader";

const ReviewModal = ({prodName, prodId, img, profile, name, show, setShow}) => {
    const [newReview, setNewReview] = useState({
        username: '',
        user_image: '',
        construction_id: '',
        construction_name: '',
        rating: 0,
        desc: '',
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setNewReview({
            username: name,
            user_image: profile,
            construction_id: prodId,
            construction_name: prodName
        })
    }, [name, prodName])

    useEffect(() => {
        console.log(newReview)
    }, [newReview])

    const handleUploadReview = async() => {
        setLoading(true)
        try {
            const res = await axios.post(`https://buildong-api.vercel.app/constructions/${prodId}/testimonials`, newReview)
            console.log(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className={`fixed bg-neutral-100 bg-opacity-30 backdrop-blur-sm inset-0 w-full h-dvh ${show? 'flex' : 'hidden'} justify-center items-center`}>
            <div className="rounded-lg bg-white shadow-multiple px-6 py-6">
                <h1 className="font-bold xl:text-lg">Review Product</h1>
                <div className="flex gap-4 mt-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden">
                        <img src={img} alt=""  className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="font-semibold">{prodName}</h1>
                </div>
                <div className="mt-4">
                    <h1 className="font-semibold">Product Quality</h1>
                    <div className="flex gap-2 items-center mt-2">
                        {
                            Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    onClick={() => setNewReview({...newReview, rating: i+1})}
                                    className={`text-xl cursor-pointer ${i < newReview.rating ? 'text-primary' : 'text-neutral-400'}`}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex gap-2">
                        <div className="rounded-full w-10 h-10 overflow-hidden bg-neutral-300">
                            <img src={profile} alt=""  className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="font-semibold">{name}</h1>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="reviews">Write your review :</label>
                        <textarea onChange={(e) => setNewReview({...newReview, desc: e.target.value})} name="reviews" id="reviews" className="rounded-lg bg-neutral-100 px-4 py-2" rows={5} cols={50} placeholder="Share your review of this product to help other buyers">

                        </textarea>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button onClick={() => setShow(false)} className="bg-white px-4 py-2 text-primary border-2 border-primary font-semibold rounded-lg w-1/2">Cancel</button>
                        <button onClick={handleUploadReview} className="bg-primary px-4 py-2 border-2 border-primary text-white font-semibold rounded-lg w-1/2 flex justify-center items-center">
                        {loading ? <Loader/> : 'Send'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewModal;