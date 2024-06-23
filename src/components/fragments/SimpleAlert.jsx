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
        <div className={`fixed ${showAlert ? 'translate-x-0' : 'translate-x-[1000px]'} transition-all duration-300 flex gap-4 text-white top-10 right-5 items-center ${bg ? bg : 'bg-primary'} px-6 py-2 rounded-lg shadow-multiple z-50`}>
            {
                icon
                ?
                icon
                : 
                <FaCheckCircle className=' text-lg'/>
            }
            <h1 className='text-neutral-50'>{msg}</h1>
        </div>,
        document.getElementById('alert-root')
    );
};

export default SimpleAlert;
