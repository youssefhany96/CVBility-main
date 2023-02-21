import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PublicationSettingsModal(props) {
    const { SettingsModal, setSettingsModal, CoursesPerRowPublication, setCoursesPerRowPublication } = useContext(ComponentListContext)
    const PublicationSettingsModal = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (PublicationSettingsModal.current && !PublicationSettingsModal.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('publicationSettingsModal').addEventListener('mousedown', handler)

    })

    return (

        <div className='ml-5 my-5' ref={PublicationSettingsModal}>

            <div className='flex flex-col space-y-4'>
                <h1 className='text-black font-bold'>Courses per row</h1>
                <div className='flex space-x-4'>

                    {/* Column 1 */}
                    <div className={` flex flex-col space-y-3 border ${CoursesPerRowPublication === 1 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowPublication(1)}>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mt-3 h-1 rounded-lg '>
                        </div>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mb-3 h-1 rounded-lg '>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className={`border ${CoursesPerRowPublication === 2 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowPublication(2)}>

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
                    <div className={`border ${CoursesPerRowPublication === 3 ? 'border-primary' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowPublication(3)}>

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
