import React, { useRef, useEffect, useContext } from 'react'
import ComponentListContext from '../context/ComponentListContext'
export default function GeneralSettingsModal(props) {
    const { showGeneralSettingsModal, setshowGeneralSettingsModal } = props
    const GeneralSettingsModalRef = useRef()
    const { DateSeparator, setDateSeparator } = useContext(ComponentListContext)
    useEffect(() => {
        let handler = (e) => {

            if (GeneralSettingsModalRef.current && !GeneralSettingsModalRef.current.contains(e.target)) {

                setshowGeneralSettingsModal(false)
            }


        }
        document.addEventListener('mousedown', handler)


    })
    return (
        showGeneralSettingsModal ? <>
            <div className=' flex flex-col absolute space-y-5 -left-72 mt-20 bubbleTop w-[800px] h-[530px] after:left-[40%]  inset-0 z-50 outline-none focus:outline-none' ref={GeneralSettingsModalRef}>

                <div className='flex space-x-6 justify-center my-12  '>
                    <button className={`bg-primary py-2 px-4  text-white rounded-lg cursor-pointer text-sm`}>General</button>
                    <button className={`text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg text-sm`}>Footer</button>
                </div>

                <div className='flex space-x-5 mx-8'>

                    {/* Date Format */}
                    <div className='flex flex-col w-[20%] space-y-5 text-center'>
                        <h1 className='text-black font-bold text-sm'>Date Format</h1>
                        <h1 className={`text-black text-sm cursor-pointer hover:text-primary2`}>dd-month-yyyy</h1>
                        <h1 className={`text-black text-sm cursor-pointer hover:text-primary2`}>month-dd-yyyy</h1>
                        <h1 className={`text-black text-sm cursor-pointer hover:text-primary2`}>yyyy-mm-dd</h1>
                        <h1 className={`text-black text-sm cursor-pointer hover:text-primary2`}>mm-dd-yyyy</h1>
                        <h1 className={`text-black text-sm cursor-pointer hover:text-primary2`}>dd-mm-yyyy</h1>
                    </div>

                    {/* Date Seperator */}
                    <div className='flex flex-col w-[30%] space-y-5 text-center'>
                        <h1 className='text-black font-bold text-sm'>Date Separator</h1>
                        <h1 className={`${DateSeparator === ',' ? 'text-primary' : 'text-black'} pl-5 text-sm cursor-pointer hover:text-primary2`} onClick={() => setDateSeparator(',')}>comma date separator “,”</h1>
                        <h1 className={`${DateSeparator === '-' ? 'text-primary' : 'text-black'} pl-5 text-sm cursor-pointer hover:text-primary2`} onClick={() => setDateSeparator('-')}>comma date separator “-”</h1>
                        <h1 className={`${DateSeparator === '_' ? 'text-primary' : 'text-black'} pl-5 text-sm cursor-pointer hover:text-primary2`} onClick={() => setDateSeparator('_')}>comma date separator “_”</h1>
                        <h1 className={`${DateSeparator === '/' ? 'text-primary' : 'text-black'} pl-5 text-sm cursor-pointer hover:text-primary2`} onClick={() => setDateSeparator('/')}>comma date separator “/”</h1>

                    </div>

                    {/* Month */}
                    <div className='flex flex-col w-[45%] space-y-5 text-center'>
                        <h1 className='text-black text-sm '>Please fill all the month so that the right <br />
                            date is used each time.</h1>

                        <div className='flex space-x-4'>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='January' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Jan' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='February' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Feb' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='March' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Mar' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='April' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Apr' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='May' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='May' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='June' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='June' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='July' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='July' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='August' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Aug' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='September' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Sept' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='October' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Oct' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='November' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Nov' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                            <div className={`flex flex-col w-24 h-14 justify-center px-4 rounded-lg border border-gray-500 transform transition  duration-500 hover:scale-110 hover:border-primary2`}>
                                <input type="text" readOnly={true} value='December' className='text-black text-[12px] font-semibold w-16 outline outline-none' />
                                <input type="text" placeholder='Dec' className='text-black text-[12px] w-16 outline outline-none' />
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </> : null
    )
}
