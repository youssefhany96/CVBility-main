import React, { useState, Fragment } from 'react'
import Clock from '../assets/Clock.jsx'
import Heart from '../assets/Heart.jsx'
import Pencil from '../assets/Pencil.jsx'
import Vector from '../assets/Vector.jsx'
import Professional from '../assets/Professional.jsx'
import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'
import e1 from '../assets/e1.png'
import e2 from '../assets/e2.png'
import e3 from '../assets/e3.png'
import Elipse1 from '../assets/Ellipse1.jsx'
import Elipse2 from '../assets/Ellipse2.jsx'
import Footer from './Footer.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import 'swiper/css';

export default function SecondFooter(props) {

    const type = props.type

    const [slide1, setslide1] = useState(false)
    const [slide2, setslide2] = useState(false)
    const [slide3, setslide3] = useState(false)
    const [slide4, setslide4] = useState(false)
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <>
            <div className='mt-24'>
                <h1 className='text-[36px] text-black   mb-16 font-bold '>Why Choose CVbility?</h1>
                <div className="lg:flex  justify-center  lg:space-x-32 xl:space-x-32 mb-10  ">
                    <div className='w-[25rem] sm:mx-auto md:mx-auto lg:mx-0
                    '>
                        <div className='w-24 bg-primary2 rounded-lg  text-white py-5 pl-7'><Heart></Heart></div>
                        <h1 className='text-[26px] text-black font-bold my-5 text-start '>ATS Friendly</h1>
                        <p className='text-start'>All CVbility {type} templates are built with the most popular Applicant Tracking Systems (ATS) in mind. What this means for YOU is that whichever job you apply for, the CV filtering software they use will be able to read your {type} (and NOT automatically discard it).</p>
                    </div>
                    <div className='w-[25rem] sm:mx-auto md:mx-auto lg:mx-0'>
                        <div className='w-24 bg-primary2 rounded-lg  text-white py-5 pl-7'><Pencil></Pencil></div>
                        <h1 className='text-[26px] text-black font-bold my-5 text-start '>Easy Create Online</h1>
                        <p className='text-start'>Whether you’re a creative advertiser looking for an outside-the-box creative {type} template, or a banker seeking a more professional {type} template, we’ve got a template for you!</p>
                    </div>
                </div>

                <div className="lg:flex  justify-center lg:space-x-32 xl:space-x-32 ">

                    <div className='w-[25rem] sm:mx-auto md:mx-auto lg:mx-0'>
                        <div className='w-24 bg-primary2 rounded-lg  text-white py-5 pl-7'><Professional></Professional></div>
                        <h1 className='text-[26px] text-black font-bold my-5 text-start '>Professional Templates</h1>
                        <p className='text-start'>Being professional doesn't have to mean dull and boring. Elevate your presentation with CVbility's free slide templates you can edit to be visually appealing..</p>
                    </div>


                    <div className='w-[25rem] sm:mx-auto md:mx-auto lg:mx-0'>
                        <div className='w-24 bg-primary2 rounded-lg  text-white py-5 pl-7'><Clock></Clock></div>
                        <h1 className='text-[26px] text-black font-bold my-5 text-start '>Unlimited Access</h1>
                        <p className='text-start'>We offer both free and premium {type} templates, so whatever your budget might be, you can still take advantage of our {type} builder.</p>
                    </div>

                </div>
            </div>

            <div className='lg:flex  mt-20 justify-center  '>

                <div className='my-20'>
                    <h1 className='text-black text-[36px] text-center font-bold'>Expert Review How They <br /> Say About Us</h1>

                    <ul className='flex justify-center mt-16'>

                        <li className=''>
                            {slide1 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
                        </li>

                        <li className={` mx-3`}>
                            {slide2 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
                        </li>

                        <li className=''>
                            {slide3 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
                        </li>

                        <li className='mx-3'>
                            {slide4 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
                        </li>



                    </ul>

                </div>
                <div className='lg:w-[40%]  my-20 lg:ml-32 flex '>
                    <Swiper
                        spaceBetween={0}
                        // slidesPerView={1.5}

                        breakpoints={{
                            // when window width is >= 640px
                            350: {
                                width: 350,
                                slidesPerView: 1,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 1.5,
                            },

                            968: {
                                width: 968,
                                slidesPerView: 1.5,
                            },


                        }}

                    >
                        <SwiperSlide>
                            {({ isActive }) => {
                                isActive ? setslide1(true) : setslide1(false)
                                return (

                                    <div className={`${slide1 ? 'bg-primary' : 'bg-white'} ${slide1 ? 'border-none' : ' border border-primary'} ${slide1 ? 'text-white' : 'text-black'} rounded-lg  p-7 max-w-lg cursor-pointer`}>
                                        <p className='text-center mb-4'>“CVbility not only offers you a smart and modern template for you to fill in, but their team has also crafted a winning combo of aesthetics and functionality that will inspire you to apply for the job you thought was out of your league. Give it a try!”.</p>

                                        <div className='flex '>
                                            <img src={image1} alt="" className='mt-3 rounded-full' />
                                            <div className='flex-col'>
                                                <h1 className={`text-[16px]${slide1 ? 'text-white' : 'text-black'} mx-5 mt-3 font-bold`}>Marcus Schleifer</h1>
                                                <h1 className='text-start mx-5'>Counselor
                                                </h1>
                                            </div>
                                            <div className={`mt-5 ml-16 ${slide3 ? 'text-white' : 'text-black'} ml-52`}>
                                                <Vector></Vector>
                                            </div>
                                        </div>

                                    </div>)
                            }

                            }

                        </SwiperSlide>

                        <SwiperSlide>
                            {({ isActive }) => {
                                isActive ? setslide2(true) : setslide2(false)
                                return (

                                    <div className={`${slide2 ? 'bg-primary' : 'bg-white'} ${slide2 ? 'border-none' : ' border border-primary'} ${slide2 ? 'text-white' : 'text-black'} rounded-lg  p-7 max-w-lg  cursor-pointer`}>
                                        <p className='text-center mb-4'>“CVbility not only offers you a smart and modern template for you to fill in, but their team has also crafted a winning combo of aesthetics and functionality that will inspire you to apply for the job you thought was out of your league. Give it a try!”.</p>

                                        <div className='flex '>
                                            <img src={image4} alt="" className='mt-3 rounded-full' />
                                            <div className='flex-col'>
                                                <h1 className={`text-[16px]${slide2 ? 'text-white' : 'text-black'} mx-5 mt-3 font-bold`}>Hanna Dokidis</h1>
                                                <h1 className='text-start mx-5'>Manager
                                                </h1>
                                            </div>
                                            <div className={`mt-5 ml-16 ${slide2 ? 'text-white' : 'text-black'} ml-52`}>
                                                <Vector></Vector>
                                            </div>
                                        </div>

                                    </div>)
                            }

                            }

                        </SwiperSlide>

                        <SwiperSlide>
                            {({ isActive }) => {
                                isActive ? setslide3(true) : setslide3(false)
                                return (

                                    <div className={`${slide3 ? 'bg-primary' : 'bg-white'} ${slide3 ? 'border-none' : ' border border-primary'} ${slide3 ? 'text-white' : 'text-black'} rounded-lg  p-7 max-w-lg cursor-pointer`}>
                                        <p className='text-center mb-4'>“CVbility not only offers you a smart and modern template for you to fill in, but their team has also crafted a winning combo of aesthetics and functionality that will inspire you to apply for the job you thought was out of your league. Give it a try!”.</p>

                                        <div className='flex '>
                                            <img src={image1} alt="" className='mt-3 rounded-full' />
                                            <div className='flex-col'>
                                                <h1 className={`text-[16px]${slide3 ? 'text-white' : 'text-black'} mx-5 mt-3 font-bold`}>Marcus Schleifer</h1>
                                                <h1 className='text-start mx-5'>Counselor
                                                </h1>
                                            </div>
                                            <div className={`mt-5 ml-16 ${slide3 ? 'text-white' : 'text-black'} ml-52`}>
                                                <Vector></Vector>
                                            </div>
                                        </div>

                                    </div>)
                            }

                            }

                        </SwiperSlide>

                        <SwiperSlide>
                            {({ isActive }) => {
                                isActive ? setslide4(true) : setslide4(false)
                                return (

                                    <div className={`${slide4 ? 'bg-primary' : 'bg-white'} ${slide4 ? 'border-none' : ' border border-primary'} ${slide4 ? 'text-white' : 'text-black'} rounded-lg  p-7 max-w-lg cursor-pointer`}>
                                        <p className='text-center mb-4'>“CVbility not only offers you a smart and modern template for you to fill in, but their team has also crafted a winning combo of aesthetics and functionality that will inspire you to apply for the job you thought was out of your league. Give it a try!”.</p>

                                        <div className='flex '>
                                            <img src={image4} alt="" className='mt-3 rounded-full' />
                                            <div className='flex-col'>
                                                <h1 className={`text-[16px]${slide4 ? 'text-white' : 'text-black'} mx-5 mt-3 font-bold`}>Marcus Schleifer</h1>
                                                <h1 className='text-start mx-5 '>Manager
                                                </h1>
                                            </div>
                                            <div className={`mt-5 ml-16 ${slide4 ? 'text-white' : 'text-black'} ml-52`}>
                                                <Vector></Vector>
                                            </div>
                                        </div>

                                    </div>)
                            }

                            }

                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div className='mt-24 mb-14 sm:space-x-0 lg:space-x-32 xl:space-x-32 justify-center'>
                <h1 className='text-[36px] font-bold'>
                    Get More Inspirated With <br /> {type} Templates
                </h1>

                <div className='lg:flex justify-center lg:space-x-16 sm:space-y-14 md:space-y-12 lg:space-y-0 xl:space-y-0 mt-28  '>
                    <div className=''>
                        <img src={e1} className='mx-auto border border-gray-500 rounded-md transform transition  duration-500 hover:scale-110 cursor-pointer' alt="" width='300px' height='250px' />
                        <h1 className='text-center text-[26px] font-semibold my-4 '>Simple</h1>
                    </div>

                    <div className=''>
                        <img src={e2} className='mx-auto border border-gray-500 rounded-md transform transition  duration-500 hover:scale-110 cursor-pointer' alt="" width='300px' height='250px' />
                        <h1 className='text-center text-[26px] font-semibold my-4 '>Traditional</h1>
                    </div>

                    <div className=''>
                        <img src={e3} className='mx-auto border border-gray-500 rounded-md transform transition  duration-500 hover:scale-110 cursor-pointer' alt="" width='300px' height='250px' />
                        <h1 className='text-center text-[26px] font-semibold my-4 '>Executive</h1>
                    </div>

                </div>

            </div>

            <div className='my-24'>
                <h1 className='text-[36px] font-[388px]'>FAQ: {type} Templates</h1>

                <div className='lg:mx-40  mt-16'>
                    <Fragment>
                        <Accordion open={open === 1} animate={customAnimation} className='hover:bg-[#FBFCFF] '  >
                            <AccordionHeader onClick={() => handleOpen(1)} className='text-black text-md hover:text-primary2 font-[400] ' >

                                Are These {type} Templates Free?
                            </AccordionHeader>
                            <AccordionBody className='text-start'>
                                Yep, all of the templates listed above are free {type} templates.

                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 2} animate={customAnimation} className='hover:bg-[#FBFCFF] mt-8'>
                            <AccordionHeader onClick={() => handleOpen(2)} className='text-black text-md hover:text-primary2 font-[400] ' >
                                How to Make a {type} with CVbility?                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 3} animate={customAnimation} className='hover:bg-[#FBFCFF] mt-8 '>
                            <AccordionHeader onClick={() => handleOpen(3)} className='text-black text-md hover:text-primary2 font-[400] '>
                                Are These {type} Templates ATS-Friendly?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 4} animate={customAnimation} className='hover:bg-[#FBFCFF] mt-8 '>
                            <AccordionHeader onClick={() => handleOpen(4)} className='text-black text-md hover:text-primary2 font-[400] '>
                                What If I Am a Student?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 5} animate={customAnimation} className='hover:bg-[#FBFCFF] mt-8 '>
                            <AccordionHeader onClick={() => handleOpen(5)} className='text-black text-md hover:text-primary2 font-[400] '>
                                Do You Offer One-Page {type} Templates?                            </AccordionHeader>
                            <AccordionBody>
                                Yep, all of the templates listed above are free {type} templates.
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={open === 6} animate={customAnimation} className='hover:bg-[#FBFCFF] mt-8 '>
                            <AccordionHeader onClick={() => handleOpen(6)} className='text-black hover:text-primary2 font-[400] text-md'>
                                Who Created These {type} Samples?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
