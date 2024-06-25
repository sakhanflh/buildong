import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaCheckCircle } from 'react-icons/fa';

const SimpleAlert = ({msg, icon, bg}) => {
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        let timeOut
        if(msg !== ''){
            setShowAlert(true);
            timeOut = setTimeout(() => {
                setShowAlert(false)
            }, 3000)
            return 
        }
        setShowAlert(false)
        return () => clearTimeout(timeOut)
    }, [msg])

    return ReactDOM.createPortal(
        <div className={`fixed ${showAlert ? 'translate-y-0' : '-translate-y-[500px]'} transition-all duration-300 flex top-10 w-full items-center justify-center rounded-lg bg-transparent  z-50`}>
            <div className={`w-max ${bg ? bg : 'bg-primary'} px-6 py-2 rounded-lg flex gap-4 items-center shadow-multiple text-white`}>
            {
                icon
                ?
                icon
                : 
                <FaCheckCircle className=' text-lg '/>
            }
            <h1 className='text-neutral-50'>{msg}</h1>
            </div>
        </div>,
        document.getElementById('alert-root')
    );
};

export default SimpleAlert;
