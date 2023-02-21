import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillsSettingsModal(props) {
    const { SettingsModal, setSettingsModal, SkillsSettingInfoGraphic, setSkillsSettingInfoGraphic,
        InfoGraphic, setInfoGraphic, Intensify, setIntensify } = useContext(ComponentListContext)
    const SkillsSettingsModalRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (SkillsSettingsModalRef.current && !SkillsSettingsModalRef.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('skillsSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={SkillsSettingsModalRef}>
            <div className='flex flex-col my-5 mx-5'>

                <div className='flex ml-12 space-x-5 bg-[#FBFCFF] w-72 h-10'>
                    <button className={`${InfoGraphic === 'None' ? 'text-white' : 'text-[#A8B0B9]'} ${InfoGraphic === 'None' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setSkillsSettingInfoGraphic('None')
                        setInfoGraphic('None')
                        setIntensify(false)
                    }}>None</button>

                    <button className={`${InfoGraphic === 'Highlighted' ? 'text-white' : 'text-[#A8B0B9]'} ${InfoGraphic === 'Highlighted' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                        setSkillsSettingInfoGraphic('Highlighted')
                        setInfoGraphic('Highlighted')
                    }}>Highlighted</button>

                    <button className={`${InfoGraphic === 'InfoGraphic' ? 'text-white' : 'text-[#A8B0B9]'}  ${InfoGraphic === 'InfoGraphic' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {setInfoGraphic('InfoGraphic');setIntensify(false)}}>Infographic</button>
                </div>

                {InfoGraphic === 'Highlighted' && <div className={`flex my-10 space-x-3 `}>
                    <input type="checkbox" id='Intensify' checked={Intensify} className='cursor-pointer check' onClick={() => Intensify ? setIntensify(false) : setIntensify(true)} />
                    <label htmlFor="Intensify" className='text-black cursor-pointer'>Intensify</label>
                </div>}

                {InfoGraphic === 'InfoGraphic' && <div className='flex mt-10'>

                    {/* Free */}
                    <div className='flex flex-col w-[30%]'>
                        <h1 className='text-black font-bold text-sm'>Free</h1>

                        <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => {setSkillsSettingInfoGraphic('Free1');setIntensify(false)}}>
                            <div className={`${SkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${SkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6`}>
                            </div>
                            <div className={`${SkillsSettingInfoGraphic === 'Free1' ? 'bg-primary2' : 'bg-primary '} rounded-full b w-6 h-6 border-[#BDBDBD] border-4`} >
                            </div>
                        </div>

                    </div>

                    {/* Premium */}
                    <div className='flex flex-col w-[70%] ml-10'>
                        <h1 className='text-black font-bold text-sm'>Premium</h1>
                        <div className='flex space-x-10'>

                            <div className='flex flex-col space-y-4'>
                                {/* Premium1 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSkillsSettingInfoGraphic('Premium1')}>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium1' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-6 h-6`}>
                                    </div>
                                </div>

                                {/* Premium2 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSkillsSettingInfoGraphic('Premium2')}>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full b w-6 h-6`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium2' ? 'bg-primary2' : 'bg-[#BDBDBD]'} rounded-full b w-4 h-4`}>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>

                                {/* Premium3 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSkillsSettingInfoGraphic('Premium3')}>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium3' ? 'bg-primary2' : 'bg-[#595959]'} rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}>
                                    </div>
                                </div>

                                {/* Premium4 */}
                                <div className='flex my-4 space-x-4 cursor-pointer' onClick={() => setSkillsSettingInfoGraphic('Premium4')}>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`${SkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
                                    </div>
                                    <div className={`bg-[#BDBDBD] ${SkillsSettingInfoGraphic === 'Premium4' ? 'bg-primary2' : 'bg-[#595959]'}  w-6 h-6 rounded-md`}>
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
