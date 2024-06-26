export function AdminInput({ type, subTitle }) {
    return (
        <>
            <div className="mt-2">
                <label className="block">{subTitle}</label>
                {type == 'textarea' ?
                    <textarea className="w-full border rounded p-2 mt-1" rows="4"></textarea>
                    :
                    type == 'select' ?
                        <select name="" id=""></select>
                        :
                        type == 'file' ?
                            <div className="w-36 h-36 border border-dotted rounded-xl border-primary relative">
                                <label htmlFor="adminFoto" className="w-full h-full">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <p className="cursor-pointer text-center  text-font-gray"><span className="text-primary underline">Click to upload</span> or drag and drop</p>
                                    </div>

                                    <input type="file" name="adminFoto" id="adminFoto" className="aboslute opacity-0 cursor-pointer w-full h-full" />
                                </label>
                            </div>
                            :
                            <input type={type ? type : 'text'} className="w-full border rounded p-2 mt-1" />
                }
            </div>
        </>
    )
}
// {inputType === 'textarea' ? (
//     <textarea className="w-full border rounded p-2 mt-1" rows="4" />
// ) : inputType === 'select' ? (
//     <select className="w-full border rounded p-2 mt-1">
//         <option value="">Pilih opsi</option>
//         <option value="">Pilih opsi</option>
//         <option value="">Pilih opsi</option>
//     </select>
// ) : (
//     <input className="w-full border rounded p-2 mt-1" type="text" />
// )}