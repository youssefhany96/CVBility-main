import React, { useContext, useState } from 'react'
import BrandLogo from '../assets/BrandLogo'
import Menu from '../assets/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faPenToSquare, faDownload } from '@fortawesome/free-solid-svg-icons'
import Add from '../assets/Add'
import { Link, useParams } from 'react-router-dom'
import e1 from '../assets/e1.png'
import template1 from '../assets/template1.png'
import template2 from '../assets/template2.png'
import Loading from './Loading'

import TemplateContext from "../context/TemplateContext";
import UpgradeNotification from './UpgradeNotification'
import { useEffect } from 'react'
import Trash from '../assets/Trash'
export default function Mydocument() {
    const { CreateDocument ,Alldocuments,documents,ChangeDocName,isLoading,docList } = useContext(TemplateContext)
    const {type}=useParams()
    
    
    const handleChangeName=(id,name)=>{
        ChangeDocName({
            "docID": id,
            "docName": name
          })
    }
 

    useEffect(() => {
        
        
        Alldocuments(type)
            
            
      
    }, [type]);

    const [menu, setmenu] = useState(false)

    const handleOpenMenu = (e) => {
        const id = e.currentTarget.getAttribute('data-column')
        if (menu === false) {
            setmenu(true)
            document.getElementById(`div${id}`).classList.remove('hidden')
        }
        else {
            setmenu(false)
            document.getElementById(`div${id}`).classList.add('hidden')

        }
    }

    return (
        <>
       {isLoading? <Loading></Loading>:
       <>
            <div className='mt-2 max-w-7xl  mx-auto'>
                <nav className='flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 '>
                    <div className='mr-5 cursor-pointer'>
                        <Link to='/'><BrandLogo></BrandLogo></Link>
                    </div>

                    <div className='bg-[#FBFCFF] rounded-md flex justify-between py-3 px-5 mr-[8.5rem] '>
                        <button className='bg-primary text-white rounded-md py-2 px-4 text-sm'>Resume</button>
                        <button className=' text-[#A8B0B9] ml-7 rounded-md p-2 text-sm'>Cover Letter</button>
                    </div>

                    <div className='flex-col cursor-pointer'>
                        <Menu></Menu>
                    </div>
                </nav>

                <div className='flex flex-col mt-20 lg:mx-32 md:mx-16 sm:mx-5 mb-20 '>

                    <div className='flex  lg:justify-end lg:mr-[77px] md:justify-center lg:space-x-5 sm:space-x-2'>
                        <p>Document Created: <span className='text-primary2'>{docList==null ?'0':docList.length}</span></p>
                        <p>Sort: <span className='text-primary2'>Date</span></p>
                    </div>

                    <div className='mt-12 mb-6 sm:mx-auto md:mx-auto lg:mx-auto'>
                        <div className=' lg:gap-10 sm:space-y-4 md:space-y-4 lg:space-y-0 grid lg:grid-cols-3 '>

                            <div>
                                <Link to='/'>
                               <div  className=' w-[262px] h-[24rem] border border-gray-400 rounded-md cursor-pointer transform transition  duration-500 hover:scale-110 '>
                                    <div className='bg-primary2 rounded-full w-10 h-10 m-auto mt-[55%]  item-center flex flex-col'>
                                        <span ><FontAwesomeIcon icon={faAdd} className='p-[0.80rem] text-white'></FontAwesomeIcon></span>
                                        </div>
                                        <p className='text-center mt-[10px]'><span >Create</span><br />
                                            Resume/CV</p>
                                   
                                </div>
                                </Link>
                            </div>

                            {/* Card */}
                            { docList==null ||docList.length==0?<><div>There are no resumes created in this data set.</div></>:docList.map((item) => {
                                return (
                                    <div className="max-w-[16.5rem] relative max-h-[24rem] bg-white border border-gray-400 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                                        <Link to={`/create/${item.docID}`}>
                                            <img id={item.id} className={`rounded-t-lg  h-[19rem] w-[16.5rem]  `} src={item.content.templateID=='1'?template1:template2} alt="" />
                                            </Link>

                                        <div className='bg-[#FBFCFF] h-[21%] flex justify-between'>
                                            <div className="p-3 flex w-[85%] flex-col ">
                                                <input type='text' defaultValue={item?.content?.docName?item.content.docName:"blank"} onBlur={(e)=>item?.content?.docName!=e.target.value?handleChangeName(item.docID,e.target.value):null} className='text-start text-black w-[60%] font-semibold outline-none'/>
                                                <p className='text-start text-[#070F1880] text-[12px]'>{item?.content?.docName?item.content.docName:"blank"}</p>
                                                <div id={`div${item.id}`} className={`hidden border border-primary border-1 w-[200px] right-[50px] top-[240px] rounded-lg space-x-1 space-y-2 bg-white absolute flex-row cursor-pointer p-4 mt-3 `}>
                                                    <div className='flex flex-row space-x-1 '><FontAwesomeIcon  className='text-primary ' icon={faPenToSquare}></FontAwesomeIcon><p>Edit</p></div>
                                                    <div className='flex flex-row space-x-1'> <FontAwesomeIcon className='text-primary ' icon={faDownload}></FontAwesomeIcon><p>Download</p></div>
                                                    <div className='flex flex-row space-x-1 trashicon redTrash'> <Trash></Trash><p>Delete</p></div>
                                                   
                                                </div>
                                            </div>

                                            <div className='rounded-full h-8 w-8 border flex items-center justify-center border-primary m-2 cursor-pointer ' data-column={item.id} onClick={handleOpenMenu} >
                                                <div className='flex h-2 mb-2 items-center justify-center text-primary '>...</div>
                                            </div>
                                        </div>

                                    </div>)
                            })}

                            {/* end Card */}


                        </div>

                    </div>

                </div>
            </div>
            <div>
                <UpgradeNotification></UpgradeNotification>
            </div>
            </>
         }</>
    )
}
