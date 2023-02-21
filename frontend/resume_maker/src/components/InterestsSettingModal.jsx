import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext';

export default function InterestsSettingModal(props) {
    const { SettingsModal, setSettingsModal, InterestsInfoGraphic, setInterestsInfoGraphic, InterestsSettingInfoGraphic, setInterestsSettingInfoGraphic
    } = useContext(ComponentListContext)
    const InterestsSettingModalRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (InterestsSettingModalRef.current && !InterestsSettingModalRef.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('interestsSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={InterestsSettingModalRef}>
            <div className='flex ml-12 space-x-5 bg-[#FBFCFF] w-72 '>

                <button className={`${InterestsInfoGraphic === 'None' ? 'text-white' : 'text-[#A8B0B9]'} ${InterestsInfoGraphic === 'None' ? 'bg-primary' : null} py-2 px-2 text-sm rounded-md`} onClick={() => {
                    setInterestsSettingInfoGraphic('None')
                    setInterestsInfoGraphic('None')
                }}>None</button>

                <button className={`${InterestsInfoGraphic !== 'Icons' ? 'text-[#A8B0B9]' : 'text-white'}  ${InterestsInfoGraphic !== 'Icons' ? null : 'bg-primary'} py-2 px-2 text-sm rounded-md`} onClick={() => {
                    setInterestsInfoGraphic('Icons')
                    setInterestsSettingInfoGraphic('Icons')
                }}>Icons</button>
            </div>

        </div >


    )
}
