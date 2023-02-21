import React from 'react'
import BrandLogo from '../assets/BrandLogo';
import Insta from '../assets/Insta.jsx'
import Fb from '../assets/Fb.jsx'
import Twitter from '../assets/Twitter.jsx'
import Vector from '../assets/Vector.jsx'

export default function
    () {
    return (
        <footer>
            <div className='bg-[#1F262E] w-full  mt-24'>
                <div className='flex justify-between lg:px-16  pt-8 pb-7'>

                    <div className='flex-col'>
                        <BrandLogo></BrandLogo>
                        <h1 className='text-white my-8'>Connecting with us on social <br />
                            media:</h1>
                        <div className='flex pb-10 '>
                            <a href='' className='mb-1'>
                                <Vector ></Vector>

                            </a>
                            <a href='' className='mx-4 mt-1'>
                                <Twitter></Twitter>
                            </a>

                            <a href='' className='mt-1'>
                                <Insta></Insta>
                            </a>

                            <a href='' className='ml-4 mt-1'>
                                <Fb></Fb>
                            </a>
                        </div>

                    </div>

                    <div className='flex-col space-y-5'>
                        <h1 className='text-[16px] text-white font-semibold mb-8'>CVbility</h1>
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white '>Resunme Templates</h1>
                        <h1 className='text-white'>CV Templates</h1>
                        <h1 className='text-white '>Cover Letter</h1>
                    </div>

                    <div className='flex-col space-y-5'>
                        <h1 className='text-[16px] text-white font-semibold mb-8'>Learn</h1>
                        <h1 className='text-white '>Blog</h1>
                        <h1 className='text-white  '>How to Write a Resume</h1>
                        <h1 className='text-white '>How to Write CV</h1>
                        <h1 className='text-white '>How to Write Cover Letters</h1>
                        <h1 className='text-white '>Resume Examples</h1>
                        <h1 className='text-white '>Cover Letters Examples</h1>
                    </div>
                    <div className='flex-col space-y-3'>
                        <h1 className='text-[16px] text-white font-semibold mb-8'>Contact</h1>
                        <h1 className='text-white'>cvbility@gmail.com</h1>

                    </div>
                </div>
                <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-[90%]" />

                <div className='flex justify-between ml-16'>
                    <h1 className='text-white'>Copyright © 2022 CVbility</h1>
                    <div className='mr-16 flex space-x-5'>
                        <h1 className='text-white '>Term of Use</h1>
                        <h1 className='text-white '>Privacy Policy</h1>
                    </div>
                </div>

            </div >
        </footer >
    )
}
