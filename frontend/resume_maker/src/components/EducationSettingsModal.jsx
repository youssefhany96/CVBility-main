import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EducationSettingsModal(props) {
    const { SettingsModal, setSettingsModal, CoursesPerRowEducation, setCoursesPerRowEducation } = useContext(ComponentListContext)
    const EducationSettingsModal = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (EducationSettingsModal.current && !EducationSettingsModal.current.contains(e.target)) {
                setSettingsModal(false)
            }

        }
        document.getElementById('educationSettingsModal').addEventListener('mousedown', handler)

    })
    return (

        <div className='ml-5 my-5' ref={EducationSettingsModal}>

            <div className='flex flex-col space-y-4'>
                <h1 className='text-black font-bold'>Courses per row</h1>
                <div className='flex space-x-4'>

                    {/* Column 1 */}
                    <div className={` flex flex-col space-y-3 border ${CoursesPerRowEducation === 1 ? 'border-primary selectedCourse' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowEducation(1)}>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mt-3 h-1 rounded-lg '>
                        </div>
                        <div className='border border-[#D9D9D9] bg-[#D9D9D9] mx-3 mb-3 h-1 rounded-lg '>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className={`border ${CoursesPerRowEducation === 2 ? 'border-primary selectedCourse' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowEducation(2)}>

                        <div className='flex  space-x-1 flex justify-evenly w-full mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9]  w-[50px]  mt-3 h-1 rounded-lg '>dsdq</div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9]  w-[50px]  mt-3 h-1 rounded-lg '>qsdsq</div>
                        </div>

                        <div className='flex  flex justify-evenly w-full space-x-1 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[50px]  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[50px] mt-3 h-1 rounded-lg '></div>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className={`border ${CoursesPerRowEducation === 3 ? 'border-primary selectedCourse' : 'border-[#D9D9D9]'} w-32 h-12 rounded-lg cursor-pointer  hover:border-primary`} onClick={() => setCoursesPerRowEducation(3)}>

                        <div className='flex  flex justify-evenly w-full space-x-1 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px]  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px] mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px] mt-3 h-1 rounded-lg '></div>
                        </div>

                        <div className='flex  flex justify-evenly w-full space-x-1 mx-auto'>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px]  mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px] mt-3 h-1 rounded-lg '></div>
                            <div className='border border-[#D9D9D9] bg-[#D9D9D9] w-[30px] mt-3 h-1 rounded-lg '></div>
                        </div>

                    </div>
                </div>

            </div>


        </div>


    )
}
