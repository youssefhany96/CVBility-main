import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OrganisationSettingsModal(props) {
    const { SettingsModal, setSettingsModal, CoursesPerRowOrganisation, setCoursesPerRowOrganisation } = useContext(ComponentListContext)
    const OrganisationSettingsModal = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (OrganisationSettingsModal.current && !OrganisationSettingsModal.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('organisationSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={OrganisationSettingsModal}>

            <div className='flex flex-col space-y-4'>
                <h1 className='text-black font-bold'>Courses per row</h1>
                <div className='flex space-x-4'>

                    {/* Column 1 */}
                    <div className={` flex flex-col space-y-3 border ${CoursesPerRowOrganisation === 1 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowOrganisation(1)}>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mt-3 h-1 rounded-lg '>
                        </div>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mb-3 h-1 rounded-lg '>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className={`border ${CoursesPerRowOrganisation === 2 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowOrganisation(2)}>

                        <div className='flex  space-x-2 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/2  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/2 mt-3 h-1 rounded-lg '></div>
                        </div>

                        <div className='flex  space-x-2 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/2  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/2 mt-3 h-1 rounded-lg '></div>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className={`border ${CoursesPerRowOrganisation === 3 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowOrganisation(3)}>

                        <div className='flex  space-x-2 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3 mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3 mt-3 h-1 rounded-lg '></div>
                        </div>

                        <div className='flex  space-x-2 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3 mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-1/3 mt-3 h-1 rounded-lg '></div>
                        </div>

                    </div>
                </div>

            </div>


        </div>


    )
}
