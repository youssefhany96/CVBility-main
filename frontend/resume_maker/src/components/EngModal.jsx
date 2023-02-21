import React, { useRef, useEffect, useContext } from 'react'
import ComponentListContext from '../context/ComponentListContext'
export default function FontsModal(props) {
    const { showEngModal, setshowEngModal } = props
    const EngModalRef = useRef()
    const { Eng, setEng } = useContext(ComponentListContext)
    useEffect(() => {
        let handler = (e) => {

            if (EngModalRef.current && !EngModalRef.current.contains(e.target)) {

                setshowEngModal(false)
            }


        }
        document.addEventListener('mousedown', handler)


    })
    return (
        showEngModal ? <>
            <div className=' flex flex-col absolute space-y-5 -left-6 mt-20 bubbleTop w-32 h-48 after:left-[50%]  inset-0 z-50 outline-none focus:outline-none' ref={EngModalRef}>
                <div className='flex flex-col mx-auto my-5 space-y-2'>
                    <h1 className={`${Eng === 'Danska' ? 'text-primary' : 'text-black'} cursor-pointer hover:text-primary2`} onClick={() => setEng('Danska')}>Danska <span className='text-[#A8B0B9]'>(Beta)</span></h1>
                    <h1 className={`${Eng === 'Deutsch' ? 'text-primary' : 'text-black'} cursor-pointer hover:text-primary2`} onClick={() => setEng('Deutsch')}>Deutsch <span className='text-[#A8B0B9]'>(Beta)</span></h1>
                    <h1 className={`${Eng === 'English UK' ? 'text-primary' : 'text-black'} cursor-pointer hover:text-primary2`} onClick={() => setEng('English UK')}>English UK </h1>
                    <h1 className={`${Eng === 'English US' ? 'text-primary' : 'text-black'} cursor-pointer hover:text-primary2`} onClick={() => setEng('English US')}>English US </h1>
                    <h1 className={`${Eng === 'Espanol' ? 'text-primary' : 'text-black'} cursor-pointer hover:text-primary2`} onClick={() => setEng('Espanol')}>Espanol <span className='text-[#A8B0B9]'>(Beta)</span></h1>
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </> : null
    )
}
