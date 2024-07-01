import { useEffect, useState } from "react"

export function AdminInput({ type, subTitle, onChange, img, options = [] }) {
    const [imageUrl, setImgUrl] = useState([])

    useEffect(() => {
        if (img) {
            img.map(dt => {
                const newImg = URL.createObjectURL(dt)
                setImgUrl([...imageUrl, newImg])
            })
        }
    }, [img])
    return (
        <>
            <div className="mt-2">
                <label className="block">{subTitle}</label>
                {type == 'textarea' ?
                    <textarea onChange={onChange} className="w-full border rounded p-2 mt-1" rows="4"></textarea>
                    :
                    type == 'select' ?
                        <select onChange={onChange} name="" id="">
                            <option value=""></option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        :
                        type == 'file' ?
                            img ?
                                <div className="flex gap-2">
                                    {imageUrl?.map((dt, i) => (
                                        <div key={i} className="w-36 h-36 border border-dotted rounded-xl border-primary relative overflow-hidden">
                                            <img src={dt} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    {
                                        imageUrl.length >= 3 ?
                                            ''
                                            :
                                            <div className="w-36 h-36 border border-dotted rounded-xl border-primary relative">
                                                <label htmlFor="adminFoto" className="w-full h-full">
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <p className="cursor-pointer text-center  text-font-gray"><span className="text-primary underline">Click to upload</span> or drag and drop</p>
                                                    </div>

                                                    <input onChange={onChange} type="file" name="adminFoto" id="adminFoto" className="aboslute opacity-0 cursor-pointer w-full h-full" />
                                                </label>
                                            </div>
                                    }
                                </div>
                                :
                                <div className="w-36 h-36 border border-dotted rounded-xl border-primary relative">
                                    <label htmlFor="adminFoto" className="w-full h-full">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <p className="cursor-pointer text-center  text-font-gray"><span className="text-primary underline">Click to upload</span> or drag and drop</p>
                                        </div>

                                        <input onChange={onChange} type="file" name="adminFoto" id="adminFoto" className="aboslute opacity-0 cursor-pointer w-full h-full" />
                                    </label>
                                </div>
                            :
                            <input onChange={onChange} type={type ? type : 'text'} className="w-full border rounded p-2 mt-1" />
                }
            </div>
        </>
    )
}