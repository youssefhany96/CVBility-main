import React, { useEffect, useRef, useContext, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

export default function WorkInstructionModal(props) {
    const { Instruction, setInstruction } = useContext(ComponentListContext)
    const swiper = useSwiper();
    const WorkInstructionModalRef = useRef()
    const [slide, setslide] = useState(1)

    useEffect(() => {
        let handler = (e) => {
            // e.stopPropagation()
            // e.preventDefault()

            if (WorkInstructionModalRef.current && !WorkInstructionModalRef.current.contains(e.target)) {
                setInstruction(false)
            }

        }
        document.getElementById('workExperienceInsModal').addEventListener('mousedown', handler)

        // window.addEventListener('mousedown', handler, true)

    })

    return (

        <div className='ml-20 my-10' ref={WorkInstructionModalRef}>

            <div className={`flex  space-x-10`}>
                <h1 className='text-[#070F18] font-[500]'>Examples :</h1>
                <div className='bg-[#FBFCFF] rounded-md w-20 flex space-x-5'>
                    <button className={`bg-primary py-2 px-2 rounded-md hover:text-primary2`}>Junior</button>
                    <button className={` py-2 px-2 text-[#A8B0B9] rounded-md hover:text-primary2`}>Intermediate</button>
                    <button className={` py-2 px-2 text-[#A8B0B9] rounded-md hover:text-primary2`}>Senior</button>
                </div>
            </div>

            <div className={`border border-gray-600 w-[400px] h-[300px] mt-5 rounded-md`}>
                <div className='flex flex-col m-4 space-y-1'>
                    <h1 className='text-black font-bold text-sm'>BSc in International Business </h1>
                    <h1 className='text-black font-bold text-sm' >The University of Sydney</h1>
                    <h1 className='text-black font-bold text-sm'>02/2017 - Present</h1>
                    <h1 className='text-[#A8B0B9] font-bold text-sm py-4'>Courses</h1>
                    <li className='text-black text-sm'>International Business Enviroment</li>
                    <li className='text-black text-sm'>Organizational Behaviour</li>
                    <li className='text-black text-sm'>Entrepreurship and Global Starategy</li>
                    <li className='text-black text-sm'>International Economics Priciples </li>
                    <li className='text-black text-sm'>Macroeconomics</li>


                </div>

            </div>
            <div className='text-center flex mt-5 space-x-3'>
                <h1 className='text-sm font-bold text-black '>Tips </h1>
                <h1 className='text-sm font-bold text-black '>{slide}/3</h1>
            </div>

            <div className=' my-3 w-[70%]  flex '>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        {({ isActive }) => {
                            isActive && setslide(1)
                            return (
                                <div className=''>
                                    <h1 className='text-sm text-black'>Here you should include your school(s) and the courses that you took which are relevant to the position you are applying for.</h1>
                                </div>
                            )
                        }

                        }

                    </SwiperSlide>

                    <SwiperSlide>
                        {({ isActive }) => {
                            isActive && setslide(2)
                            return (
                                <div className=''>
                                    <h1 className='text-sm text-black'>Here you should include your school(s) and the courses that you took which are relevant to the position you are applying for.</h1>
                                </div>
                            )
                        }

                        }

                    </SwiperSlide>



                    <SwiperSlide>
                        {({ isActive }) => {
                            isActive && setslide(3)

                            return (
                                <div className=''>
                                    <h1 className='text-sm text-black'>Here you should include your school(s) and the courses that you took which are relevant to the position you are applying for.</h1>
                                </div>
                            )
                        }

                        }
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>


    )
}
