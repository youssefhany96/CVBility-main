import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SoftSkillsSettingsModal(props) {
    const { SettingsModal, setSettingsModal,SoftSkillsSettingInfoGraphic, setSoftSkillsSettingInfoGraphic,SoftSkillsInfoGraphic
        , setSoftSkillsInfoGraphic,SoftSkillsIntensify,setSoftSkillsIntensify } = useContext(ComponentListContext)
    const SoftSkillsSettingsModalRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (SoftSkillsSettingsModalRef.current && !SoftSkillsSettingsModalRef.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('softskillsSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={SoftSkillsSettingsModalRef}>
            <div className='flex flex-col my-5 mx-5'>

                <div className='flex ml-12 space-x-5 bg-[#FBFCFF] w-72 h-10'>
                    <button className={`${SoftSkillsInfoGraphic === 'None' ? 'text-white' : 'text-[#A8B0B9]'} ${SoftSkillsInfoGraphic === 'None' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setSoftSkillsSettingInfoGraphic('None')
                        setSoftSkillsInfoGraphic('None')
                        setSoftSkillsIntensify(false)
                    }}>None</button>

                    <button className={`${SoftSkillsInfoGraphic === 'Highlighted' ? 'text-white' : 'text-[#A8B0B9]'} ${SoftSkillsInfoGraphic === 'Highlighted' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setSoftSkillsSettingInfoGraphic('Highlighted')
                        setSoftSkillsInfoGraphic('Highlighted')
                    }}>Highlighted</button>

                    <button className={`${SoftSkillsInfoGraphic === 'InfoGraphic' ? 'text-white' : 'text-[#A8B0B9]'}  ${SoftSkillsInfoGraphic === 'InfoGraphic' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {setSoftSkillsInfoGraphic('InfoGraphic');setSoftSkillsIntensify(false)}}>InfoGraphic</button>
                </div>

                {SoftSkillsInfoGraphic === 'Highlighted' && <div className={`flex my-10 space-x-3 `}>
                <input type="checkbox" id='SoftSkillsIntensify' checked={SoftSkillsIntensify} className='cursor-pointer check' onClick={() => SoftSkillsIntensify ? setSoftSkillsIntensify(false) : setSoftSkillsIntensify(true)} />
                    <label htmlFor="SoftSkillsIntensify" className='text-black cursor-pointer'>Intensify</label>
                </div>}

                {SoftSkillsInfoGraphic === 'InfoGraphic' && <div className='flex mt-10'>

                    {/* Free */}
                    <div className='flex flex-col w-[30%]'>
                        <h1 className='text-black font-bold text-sm'>Free</h1>

                        <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSoftSkillsSettingInfoGraphic('Free1')}>
                            <div className={`${SoftSkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${SoftSkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${SoftSkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6 border-[#BDBDBD] border-4`} >
                            </div>
                        </div>

                    </div>

                    {/* Premium */}
                    <div className='flex flex-col w-[70%] ml-10'>
                        <h1 className='text-black font-bold text-sm'>Premium</h1>
                        <div className='flex space-x-10'>

                            <div className='flex flex-col space-y-4'>
                                {/* Premium1 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSoftSkillsSettingInfoGraphic('Premium1')}>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-6 h-6`}>
                                    </div>
                                </div>

                                {/* Premium2 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSoftSkillsSettingInfoGraphic('Premium2')}>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-4 h-4`}>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>

                                {/* Premium3 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSoftSkillsSettingInfoGraphic('Premium3')}>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                </div>

                                {/* Premium4 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSoftSkillsSettingInfoGraphic('Premium4')}>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`${SoftSkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`bg-[#BDBDBD] ${SoftSkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
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
