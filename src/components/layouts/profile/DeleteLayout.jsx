import { FaExclamationTriangle } from "react-icons/fa";
import SimpleModal from "../../fragments/SimpleModal";
import { useState } from "react";

const DeleteLayout = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <h1 className="text-sm xl:text-base">Once you <b>delete</b> your account, there is no going back. <b>Please be certain</b></h1>
        <button onClick={() => setShowModal(true)}  className="text-sm clicked bg-red-500 mt-6 rounded-lg text-white px-6 py-2">Delete your account</button>
        <SimpleModal 
        title={'Are you sure want to do this ?'}
        showModal={showModal}
        setShowModal={setShowModal}
        >
            <div className="border-y-2 text-sm border-red-300 flex gap-4 font-semibold bg-red-100 text-red-600 items-center px-4 py-2 xl:text-base">
                <FaExclamationTriangle/>
                <h1>This is extremely importnant.</h1>
            </div>
            <div className="px-4 py-4 text-sm">
                <p>We will immediately <b>delete your account</b>, along with all of your purchase histories, membership, account level, and your point</p>
                <div className="my-6 flex flex-col gap-2">
                    <label htmlFor="verify">To verify, type <b>delete my account</b> below:</label>
                    <input type="text" className="px-4 py-2 border-2 rounded-lg"/>
                </div>
                <button className="font-semibold bg-red-500 rounded-lg w-full py-2 text-white clicked xl:py-3">Delete this account</button>
            </div>
        </SimpleModal>
        </>
    )
}

export default DeleteLayout;