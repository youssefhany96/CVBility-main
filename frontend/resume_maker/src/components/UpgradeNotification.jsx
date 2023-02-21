import React from 'react'

export default function UpgradeNotification() {
    return (
        <footer className='bg-primary fixed left-0 bottom-0 w-full z-50'>
            <div className='flex justify-between lg:p-8 sm:py-5 md:p-5 lg:px-36 '>
                <p className='text-white text-[16px] '>A Premium account is needed to create more than one resume/CV. <br />
                    Note: It is recommendation to have a custom application for each job application</p>

                <button className='text-[#070F18] bg-white rounded-md p-3 font-bold max-h-16'>Upgrade Now</button>
            </div>

        </footer>
    )
}
