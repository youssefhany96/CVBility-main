import React, { useContext, useState, useRef, useEffect } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import EducationSvg from '../assets/Education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'
import Bullet from '../assets/Bullet'

export const handleDeleteKey = (e) => {
    if (e.key === 'Backspace' && !e.target.innerHTML && e.target.className.includes('deadClass')) {
        e.target.parentElement.remove()
    }
}


export const PublicationComponent = ({id}) => {
    const {handleNewField,CurrentEntity, setCurrentEntity,PublicationData, setPublicationData, ToolBar, setToolBar, setLinkButton,SelectedId,FontSize,CoursesPerRowPublication,setSelectedId,setPublicationCompArray ,PublicationCompArray} = useContext(ComponentListContext)
    const [Present, setPresent] = useState(false)
    const StudyProgramRef = useRef()
    const InstituteRef = useRef()
    const AuthorRef = useRef()
    const listRef = useRef()
    const DatePublicationRef = useRef()
    const publisherRef = useRef()
    const pubDescreptionRef= useRef() 
    const addPublication = useRef()
    const handleAdd=()=>{
        handleNewField('publication')}
    const handleOnEnter = (e) => {

        
            if(document.getElementById(`${id}PubachievementsId`).childNodes.length<10){
                if (e.key === 'Enter'  ) {
                    e.preventDefault()
                    
                 }}
                 else{
                    if (e.key === 'Enter'  ) {
                    e.preventDefault()
                 }}
             }
             useEffect(() => {
                const title = StudyProgramRef.current.value
                const title2 = InstituteRef.current.innerHTML
                const newData = { id, title, title2 };
                setPublicationData([...PublicationData, newData]);
                if(+id>1){
                    setSelectedId(id)
                    StudyProgramRef.current.focus()
                }
            
            }, [id]);
    useEffect(() => {
        if(+id>0&&SelectedId==id&&CurrentEntity=='pub'){
            const underliend=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.y')
            listRef.current.classList.remove("hidden")
            publisherRef.current.classList.remove("hidden")
            document.getElementById(`${id}PubDesc`).classList.remove("hidden");
            AuthorRef.current.classList.remove("hidden")
            addPublication.current.classList.remove('hidden')
            for(let i of underliend){
               i.classList.replace("x",'input-underline')
           }
           for(let i of underliendDash){
               i.classList.replace("y",'input-underline-dashed')
           }
           return
        }else{
                addPublication.current.classList.add('hidden')
                const notunderliend=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.input-underline')
                for(let i of notunderliend){
                    i.classList.replace('input-underline','x')
                }
                const notunderliendDashed=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.input-underline-dashed')
                for(let i of notunderliendDashed){
                    i.classList.replace('input-underline-dashed','y')
                }}
            if ((listRef.current.value === "" )) {
                
                listRef.current.classList.add("hidden");
            } else {
                listRef.current.classList.remove("hidden");
            }  
            
            if (publisherRef.current.value === "" ) {
                
                publisherRef.current.classList.add("hidden");
            } else {
                publisherRef.current.classList.remove("hidden");
            }
            if (pubDescreptionRef.current.innerHTML === "") {
                
                document.getElementById(`${id}PubDesc`).classList.add("hidden");
            } else {
                document.getElementById(`${id}PubDesc`).classList.remove("hidden");
            }
            if (AuthorRef.current.value === "") {
                
                AuthorRef.current.classList.add("hidden");
            } else {
                AuthorRef.current.classList.remove("hidden");
        }
        const handler = (e) => {
            const menu =document.getElementById('publicationmenu');
            const toolbar = document.getElementById('toolbar');
            const underliend=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.y')
            if (StudyProgramRef && StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.remove('placeholder:text-black')
            }
            if (StudyProgramRef && !StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.add('placeholder:text-black')
            }
            if (StudyProgramRef && InstituteRef.current.contains(e.target)) {
                InstituteRef.current.classList.remove('placeholder:text-black')
            }
            if (StudyProgramRef && !InstituteRef.current.contains(e.target)) {
                InstituteRef.current.classList.add('placeholder:text-black')
            }
            
            if(document.getElementsByClassName(`${id}pub`)[0].contains(e.target)){
                
                 listRef.current.classList.remove("hidden")
                 publisherRef.current.classList.remove("hidden")
                 document.getElementById(`${id}PubDesc`).classList.remove("hidden");
                 AuthorRef.current.classList.remove("hidden")
                 addPublication.current.classList.remove('hidden')
                 for(let i of underliend){
                    i.classList.replace("x",'input-underline')
                }
                for(let i of underliendDash){
                    i.classList.replace("y",'input-underline-dashed')
                }
                return;
        }
        else{
            if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
            addPublication.current.classList.add('hidden')
            const notunderliend=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.input-underline')
            for(let i of notunderliend){
                i.classList.replace('input-underline','x')
            }
            const notunderliendDashed=document.getElementsByClassName(`${id}pub`)[0].querySelectorAll('.input-underline-dashed')
            for(let i of notunderliendDashed){
                i.classList.replace('input-underline-dashed','y')
            }}
        }
        if ((listRef.current.value === "" )&&!listRef.current.contains(e.target)) {
            if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
            listRef.current.classList.add("hidden");}
        } else {
            listRef.current.classList.remove("hidden");
        }  
        
        if (publisherRef.current.value === "" &&!publisherRef.current.contains(e.target)) {
            if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
            publisherRef.current.classList.add("hidden");}
        } else {
            publisherRef.current.classList.remove("hidden");
        }
        if (pubDescreptionRef.current.innerHTML === "" &&!pubDescreptionRef.current.contains(e.target)) {
            if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
            document.getElementById(`${id}PubDesc`).classList.add("hidden");}
        } else {
            document.getElementById(`${id}PubDesc`).classList.remove("hidden");
        }
        if (AuthorRef.current.value === "" &&!AuthorRef.current.contains(e.target)) {
            if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
            AuthorRef.current.classList.add("hidden");}
        } else {
            AuthorRef.current.classList.remove("hidden");
        } 

    }
    document.addEventListener('mousedown', handler)
    return () => {
        document.removeEventListener('mousedown', handler);
      };
})
    const handleOnClick = (id) => {

        setSelectedId(id)
        setCurrentEntity("pub")
    }
    const handleSave =()=>{
        const title = StudyProgramRef.current.value
        const title2 = InstituteRef.current.innerHTML
        const newData = { id, title, title2 };
      
        let existingObjectIndex = PublicationData.findIndex(object => object.id === id);
        if (existingObjectIndex !== -1) {
          let updatedPublicationData = [...PublicationData];
          updatedPublicationData[existingObjectIndex].title = title;
          updatedPublicationData[existingObjectIndex].title2 = title2;
          setPublicationData(updatedPublicationData);
        } else {
          setPublicationData([...PublicationData, newData]);
        }
      };


    return (
        <div className={`flex flex-col border-pubs ${id}pub`} id={id} onClick={()=>handleOnClick(id)}>
            <div className='ml-9 pb-3 educationAllFields' id='educationOldField'>
                <input type="text" onBlur={()=>handleSave()} autoFocus={id==1?false:true} onFocus={()=>handleOnClick(id)} placeholder='Publication Type' className={`text-black block x w-[100%] ${FontSize=='md'?'text-[24px]':FontSize=="sm"?'text-[22px]':'text-[26px]'} font-[500] outline-none placeholder: ${FontSize=='md'?'text-[24px]':FontSize=="sm"?'text-[22px]':'text-[26px]'} placeholder:font-[500] placeholder:text-black  `} ref={StudyProgramRef} />
                <div className='seconed'><p  onFocus={()=>{setLinkButton(true)}} onBlur={()=>{handleSave();setLinkButton(false)}}  contentEditable style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}  type="text" data-placeholder='Publication Title' ref={InstituteRef} className={`w-[100%] x block text-black ${FontSize=='md'?'text-[24px]':FontSize=='sm'?'text-[22px]':'text-[26px]'} outline-none  placeholder:text-black placeholder:${FontSize=='md'?'text-[24px]':FontSize=='sm'?'text-[22px]':'text-[26px]'} placeholder:font-[300] ` } onKeyPress={(e) => e.key === 'Enter'? e.preventDefault():null}></p></div>
                <div className='flex flex-col space-y-2' id={`${id}publications`} >
                
                    <input type="text"ref={AuthorRef} placeholder='Author(s)' className={`hidden text-black y text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} outline-none `} />
                    <input type="text" ref={listRef} placeholder='List of Author(s)' className={`hidden text-black y text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} outline-none `} />
                    <input type="text" ref={DatePublicationRef} placeholder='Date of Publication' className={` text-black y text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} outline-none `} />
                    <input type="text" ref={publisherRef} placeholder='Publisher/Pages/Issue,etc.' className={`hidden text-black y text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} outline-none `} />
                    <div className='hidden'id={`${id}PubDesc`}>
                    <div className={`grid grid-cols-${CoursesPerRowPublication}`} id={`${id}PubachievementsId`} >

                        <div className='flex space-x-2 SingleCourse ' id='PublicationCourse' >
                            <p ref={pubDescreptionRef}  data-placeholder ="Description  (optional)" style={{ overflow: 'hidden' }}  onFocus={()=>{setToolBar(true);setLinkButton(true)}} onBlur={()=>{setToolBar(false);setLinkButton(false)}}   contentEditable type="text"   className={` SingleCourse editable text-black input-underline w-[90%] ${FontSize=='md'?'text-[18px]':FontSize=="sm"?'text-[16px]':'text-[20px]'} outline-none`}  onKeyPress={(e) => handleOnEnter(e)} onKeyDown={(e) => handleDeleteKey(e)} ></p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addPublication} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>
        </div>)
}


export default function Publication() {
    const { Icon, CoursesPerRowPublication, ThemeColor, PublicationCompArray, setPublicationCompArray } = useContext(ComponentListContext)
    return (
        <div key='publication' className='pb-3 pr-5 '>
            <div className='   ml-6 pt-5 px-5 '>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] publication'>
                    {Icon && <span className='relative left-3'><EducationSvg></EducationSvg></span>
                    }
                     <div suppressContentEditableWarning={true} contentEditable="true" className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >PUBLICATIONS</div>
                  
                </div>
            </div>
            {PublicationCompArray.map((data) => {
                return (
                    data
                )
            })}







            {/* Dummy Div */}
            <div className='hidden grid grid-cols-1'>
            </div>
            <div className='hidden grid grid-cols-2'>
            </div>
            <div className='hidden grid grid-cols-3'>
            </div>
        </div>)
}