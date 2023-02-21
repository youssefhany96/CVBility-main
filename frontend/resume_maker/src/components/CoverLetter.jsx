import React from 'react'
import { Link } from 'react-router-dom'
export default function CoverLetter() {
    return (
        <>
            <div className='text-center mt-40'>
                <h2 className='text-gray-800 text-xl'>Cover letters will be added soon</h2>
                <Link to='/'>                <button className='px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white my-5' >Back to Templates</button>
                </Link>
            </div>
        </>
    )
}
