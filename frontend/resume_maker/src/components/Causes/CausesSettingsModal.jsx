import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CausesSettingsModal(props) {
    const { SettingsModal, setSettingsModal, CausesSettingInfoGraphic, setCausesSettingInfoGraphic,
        CausesInfoGraphic, setCausesInfoGraphic, CausesIntensify, setCausesIntensify } = useContext(ComponentListContext)
    const CausesSettingsModalRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (CausesSettingsModalRef.current && !CausesSettingsModalRef.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('causesSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={CausesSettingsModalRef}>
            <div className='flex flex-col my-5 mx-5'>

                <div className='flex ml-12 space-x-5 bg-[#FBFCFF] w-72 h-10'>
                    <button className={`${CausesInfoGraphic === 'None' ? 'text-white' : 'text-[#A8B0B9]'} ${CausesInfoGraphic === 'None' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setCausesSettingInfoGraphic('None')
                        setCausesInfoGraphic('None')
                        setCausesIntensify(false)
                    }}>None</button>

                    <button className={`${CausesInfoGraphic === 'Highlighted' ? 'text-white' : 'text-[#A8B0B9]'} ${CausesInfoGraphic === 'Highlighted' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setCausesSettingInfoGraphic('Highlighted')
                        setCausesInfoGraphic('Highlighted')
                    }}>Highlighted</button>

                    <button className={`${CausesInfoGraphic === 'InfoGraphic' ? 'text-white' : 'text-[#A8B0B9]'}  ${CausesInfoGraphic === 'InfoGraphic' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() =>{ setCausesInfoGraphic('InfoGraphic');setCausesIntensify(false)}}>Infographic</button>
                </div>

                {CausesInfoGraphic === 'Highlighted' && <div className={`flex my-10 space-x-3 `}>
                    <input type="checkbox" id='CausesIntensify' checked={CausesIntensify} className='cursor-pointer check' onClick={() => CausesIntensify ? setCausesIntensify(false) : setCausesIntensify(true)} />
                    <label htmlFor="CausesIntensify" className='text-black cursor-pointer'>CausesIntensify</label>
                </div>}

                {CausesInfoGraphic === 'InfoGraphic' && <div className='flex mt-10'>

                    {/* Free */}
                    <div className='flex flex-col w-[30%]'>
                        <h1 className='text-black font-bold text-sm'>Free</h1>

                        <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setCausesSettingInfoGraphic('Free1')}>
                            <div className={`${CausesSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${CausesSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${CausesSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6 border-[#BDBDBD] border-4`} >
                            </div>
                        </div>

                    </div>

                    {/* Premium */}
                    <div className='flex flex-col w-[70%] ml-10'>
                        <h1 className='text-black font-bold text-sm'>Premium</h1>
                        <div className='flex space-x-10'>

                            <div className='flex flex-col space-y-4'>
                                {/* Premium1 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setCausesSettingInfoGraphic('Premium1')}>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-6 h-6`}>
                                    </div>
                                </div>

                                {/* Premium2 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setCausesSettingInfoGraphic('Premium2')}>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-4 h-4`}>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>

                                {/* Premium3 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setCausesSettingInfoGraphic('Premium3')}>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                </div>

                                {/* Premium4 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setCausesSettingInfoGraphic('Premium4')}>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`${CausesSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`bg-[#BDBDBD] ${CausesSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>}

            </div>

        </div >


    )
}
