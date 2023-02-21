import React, { useContext, useEffect } from 'react'
import TemplateContext from '../context/TemplateContext'
import SecondFooter from './SecondFooter'
import { Link } from 'react-router-dom'
import basic from '../assets/basic.png'
import modern from '../assets/modern.png'
import minimilist from '../assets/minimilist.png'
export default function CV() {
    // const { AllTemplates, template } = useContext(TemplateContext)

    // useEffect(() => {
    //     AllTemplates()

    // }, [])

    const handleShowButton = (id) => {
        const x = document.getElementById(id)

        x.classList.remove('hidden')
    }

    const template = [
        {
            'id': 1,
            'image': basic,
            'name': 'Basic',
            'description': 'Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process.'

        },

        {
            'id': 2,
            'image': modern,
            'name': 'Modern',
            'description': 'It can be hard to stand out from the crowd, but this modern resume sample will take care of this.'

        },

        {
            'id': 3,
            'image': minimilist,
            'name': 'Minimalist',
            'description': 'A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.'

        },
    ]

    const handleLeaveButton = (id) => {
        const x = document.getElementById(id)
        x.classList.add('hidden')
    }
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-black text-3xl font-bold'>CV Templates</h1>
                <p className='my-5 text-[16px] text-[#262A37]'>Choose one of free CV templates and build your CV. Create and download your professional <br /> CV in less than 5 minutes.</p>
                <Link to='/mydocument/resume'><button className='px-4 py-2 text-white border border-primary bg-primary rounded-lg shadow hover:bg-white hover:border-primary hover:text-primary'>Create my CV</button></Link>
                <div className='flex justify-center mt-12  border-b-2 border-b-[#A8B0B9] h-16 lg:w-1/2 sm:w-[70%] mx-auto'>
                    <Link to='/' className='text-[#A8B0B9] cursor-pointer'>Resume Templates</Link>

                    <div className={`border-b-4 border-b-primary sm:ml-5`}>
                        <Link to='/cv' className='text-[#A8B0B9] ml-2 mr-8 cursor-pointer'>CV Templates</Link>
                    </div>

                    <Link to='/coverletter' className='text-[#A8B0B9] cursor-pointer'>Cover Letters</Link>
                </div>

                <div className='lg:flex justify-center lg:space-x-32 sm:space-y-14 md:space-y-12 lg:space-y-0 xl:space-y-0 mt-28 mx-20 '>
                    {template && template.map((item) => {
                        return (
                            <div className='lg:w-80 ' key={item.id} >
                                <div className='relative justify-center '>
                                    <img src={item.image} className={`  border border-gray-500 rounded-md transform transition  duration-500 hover:scale-110 mx-auto `} id={`item${item.id}`} width='300px' height='250px ' alt="" onMouseEnter={() => handleShowButton(item.id)} onMouseLeave={() => handleLeaveButton(item.id)}></img>
                                    <Link to='/create'><button id={item.id} className={`hidden absolute top-1/2 lg:right-20 sm:right-6 md:right-56 px-4 py-2 rounded-md bg-primary  text-white transform transition duration-500 hover:scale-125 hover:border-primary`} onMouseEnter={() => handleShowButton(item.id)} onMouseLeave={() => handleLeaveButton(item.id)} onClick={() => handleOnclick('1')}>Use this template</button></Link>
                                </div>

                                <h1 className='text-[#070F18] font-bold text-[26px] mx-auto  mt-4 text-start'>{item.name}</h1>
                                <p className='text-[16px] text-start mx-auto'>{item.description}
                                </p>
                            </div>
                        )
                    })}

                </div>

                <button className=' my-16 px-4 py-2 text-center text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white'>View More</button>

                <SecondFooter type={'CV'}></SecondFooter>

            </div>
        </div>
    )
}
