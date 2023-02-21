import React, { useState, Fragment } from "react";
import Vector from "../assets/Vector.jsx";
import image1 from "../assets/image1.png";
import image4 from "../assets/image4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Elipse1 from "../assets/Ellipse1.jsx";
import Elipse2 from "../assets/Ellipse2.jsx";
import Footer from "./Footer.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import "swiper/css";

export default function SecondFooterPricing() {
  const type = "Pricing";

  const [slide1, setslide1] = useState(false);
  const [slide2, setslide2] = useState(false);
  const [slide3, setslide3] = useState(false);
  const [slide4, setslide4] = useState(false);
  const [open, setOpen] = useState(0);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <>
      <div className="lg:flex  mt-20 justify-center items-end  ">
        <div className="flex gap-24 flex-col my-20">
            <div>
          <h1 className="text-black text-[36px] text-start font-bold mb-6">
          Personal <br /> Stories
          </h1>
          <p>Lorem Ipsum is simply dummy text of<br />
           the printing and typesetting industry.</p>
           </div>
        <div className="flex justify-end gap-3">
           <div ref={navigationPrevRef} className='.swiper-button-prev w-[35px] h-[35px] border border-white rounded-full cursor-pointer bg-primary flex justify-center items-center'><FontAwesomeIcon className="text-[15px] text-white" icon={faAngleLeft}></FontAwesomeIcon></div>
           <div  ref={navigationNextRef}className='.swiper-button-next w-[35px] h-[35px] border border-white rounded-full cursor-pointer bg-primary flex justify-center items-center'><FontAwesomeIcon className="text-[15px] text-white" icon={faAngleRight}></FontAwesomeIcon></div>
        </div>
          
        </div>
        <div className="lg:w-[40%]  my-20 lg:ml-32 flex ">
        <Swiper
  navigation={{
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  }}
  spaceBetween={0}
  breakpoints={{
    // when window width is >= 350px
    350: {
      width: 350,
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 1.5,
    },
    // when window width is >= 968px
    968: {
      width: 968,
      slidesPerView: 1.5,
    },
  }}
>
  {/* Add SwiperSlide components here */}
            <SwiperSlide>
              {({ isActive }) => {
                isActive ? setslide1(true) : setslide1(false);
                return (
                    
                    
                    <div className={`rounded-lg shadow-lg bg-white max-w-sm  ${
                                        slide1 ? " border border-primary" :"border-none" 
                                      } rounded-lg cursor-pointer`}>
                   
                        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                     
                      <div className="p-6">
                       
                        <p className="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <h5 className="text-gray-900 text-xl italic text-incline text-bold font-medium">Marcus Schleifer </h5>
                        <h5 className="text-gray-900 text-md italic mb-2">Counselor</h5>
                      </div>
                    </div>
                    
                 
                );
              }}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => {
                isActive ? setslide2(true) : setslide2(false);
                return (
                   
                    <div className={`rounded-lg shadow-lg bg-white max-w-sm  ${
                                        slide2 ? " border border-primary" :"border-none" 
                                      } rounded-lg cursor-pointer`}>
                   
                        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                      
                      <div className="p-6">
                       
                        <p className="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <h5 className="text-gray-900 text-xl italic text-incline text-bold font-medium">Marcus Schleifer </h5>
                        <h5 className="text-gray-900 text-md italic mb-2">Counselor</h5>
                      </div>
                    </div>
                    
                );
              }}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => {
                isActive ? setslide3(true) : setslide3(false);
                return (
                    
                    <div className={`rounded-lg shadow-lg bg-white max-w-sm  ${
                                        slide3 ? " border border-primary" :"border-none" 
                                      } rounded-lg cursor-pointer`}>
                   
                        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                      
                      <div className="p-6">
                       
                        <p className="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <h5 className="text-gray-900 text-xl italic text-incline text-bold font-medium">Marcus Schleifer </h5>
                        <h5 className="text-gray-900 text-md italic mb-2">Counselor</h5>
                      </div>
                    </div>
                    
                );
              }}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => {
                isActive ? setslide4(true) : setslide4(false);
                return (
                    
                    <div className={`rounded-lg shadow-lg bg-white max-w-sm  ${
                                        slide4 ? " border border-primary" :"border-none" 
                                      } rounded-lg cursor-pointer`}>
                   
                        <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                      
                      <div className="p-6">
                       
                        <p className="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <h5 className="text-gray-900 text-xl italic text-incline text-bold font-medium">Marcus Schleifer </h5>
                        <h5 className="text-gray-900 text-md italic mb-2">Counselor</h5>
                      </div>
                    </div>
                    
                );
              }}
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
      <ul className="flex justify-center">
            <li className="">
              {slide1 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
            </li>

            <li className={` mx-3`}>
              {slide2 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
            </li>

            <li className="">
              {slide3 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
            </li>

            <li className="mx-3">
              {slide4 ? <Elipse1></Elipse1> : <Elipse2></Elipse2>}
            </li>
          </ul>
      <div className="my-24">
        <h1 className="text-[36px] font-[388px]">FAQ: {type}</h1>

        <div className="lg:mx-40  mt-16">
          <Fragment>
            <Accordion
              open={open === 1}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] "
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-black text-md hover:text-primary2 font-[400] "
              >
                Will my Premium account renew automatically?
              </AccordionHeader>
              <AccordionBody className="text-start">
              No, our pricing model is not subscription based. Therefore, you will not be charged automatically without your consent.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 2}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] mt-8"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-black text-md hover:text-primary2 font-[400] "
              >
                Are there any hidden costs?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 3}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] mt-8 "
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-black text-md hover:text-primary2 font-[400] "
              >
                Can I try before I buy?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 4}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] mt-8 "
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-black text-md hover:text-primary2 font-[400] "
              >
Will my information be saved after the Premium period expires?              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 5}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] mt-8 "
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-black text-md hover:text-primary2 font-[400] "
              >
                Is my payment information secure?
              </AccordionHeader>
              <AccordionBody>
                Yep, all of the templates listed above are free {type}{" "}
                templates.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 6}
              animate={customAnimation}
              className="hover:bg-[#FBFCFF] mt-8 "
            >
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-black hover:text-primary2 font-[400] text-md"
              >
What format will the documents be saved as?              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
      </div>
      <div className="text-center mt-40 ">
        <div
          className={`text-left w-[1440px] h-[470px] bg-[rgba(251,252,255,1)] overflow-clip font-['Inter'] flex justify-center mx-[auto] gap-2 items-center`}
        >
          <div className="flex flex-col gap-5">
          <p className=" text-4xl font-semibold leading-normal inline m-0  text-[rgba(7,15,24,1)]">
            Have a particular 
            <br />
            question?
          </p>
          <p className=" text-base font-normal leading-normal inline m-0 h-[76px] w-[464px] tracking-[-0.32px] text-[rgba(38,42,55,1)]">
            If you have any questions regarding our Premium account or services,
            please do not hesitate to drop us an email and our team will be
            happy to assist.
            <br />
          </p>
          <div
            className={`[box-shadow:0px_0px_0px_1px_rgba(255,255,_225,_1)_inset] [box-shadow-width:1px] bg-primary py-3 w-[40%] inline-flex justify-center text-left font-normal px-[20px] drop-shadow-lg rounded-[10px] text-white`}
          >
            <button className="text-base leading-normal m-0">
            cvbility@gmail.com
            </button>
          </div>
          </div>
          <img className='w-[398px] top-9  h-[398px]'src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c48749266b86adb36d9a2668a800175b502216b9.webp" alt='lol'/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
