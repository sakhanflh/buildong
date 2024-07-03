import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function NotificationsCard({ dt }) {
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    const togglePreview = () => {
        setIsPreviewVisible(!isPreviewVisible);
    };

    return (
        <>
            <div className="w-full flex items-center p-2 mt-2 bg-gray-100" onClick={togglePreview}>
                <div className="w-full flex gap-5 items-center">
                    <div className="w-20 rounded-full overflow-hidden">
                        <img src="/img/voucher-removebg-preview.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="">
                        <p className="font-medium">{dt.title.toUpperCase()}</p>
                        <p className="text-font-gray">{dt.desc}</p>
                        <p className="">{dt.discount_type}</p>
                        <p>{dt.total_discount}%</p>
                    </div>
                </div>
                <button className="py-1 px-5 rounded-lg border bg-primary text-white text-sm">
                    Detail
                </button>
            </div>

            {isPreviewVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-font-gray bg-opacity-80 backdrop-blur-sm">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 max-w-lg">
                        <div className="flex gap-5 items-center">
                            <div className="w-20 rounded-full overflow-hidden">
                                <img src="/img/voucher-removebg-preview.png" alt="" className="w-full object-cover" />
                            </div>
                            <div className="">
                                <p className="font-medium">{dt.title.toUpperCase()}</p>
                                <p className="">{dt.discount_type}</p>
                                <p className="font-medium">For {dt.user_level.toUpperCase()} Rank</p>
                                <p className="text-font-gray">{dt.desc}</p>
                                <p>{dt.description}</p>
                                <p className="font-medium">Minimum Order Rp {dt.minimum_order}</p>
                            </div>
                        </div>
                        <button onClick={togglePreview} className="mt-4 py-1 px-5 rounded-lg border bg-red-500 text-white text-sm">
                            Close
                        </button>
                        <Link to={'/shop'} className="mt-4 ml-3 py-1 px-5 rounded-lg border bg-primary text-white text-sm">
                            Use
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
