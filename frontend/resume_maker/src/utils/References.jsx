import React, { useContext, useState, useRef, useEffect } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import EducationSvg from '../assets/Education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'
import Bullet from '../assets/Bullet'
export const handleOnEnter = (e) => {
    if(document.getElementById('WorkachievementsId').childNodes.length<10){
    if (e.key === 'Enter' && e.target.value) {
        let newField = document.createElement('div')
        newField.classList.add('flex', 'space-x-2')
        let SingleCourse = document.getElementById('SingleCourse')
        newField.innerHTML = SingleCourse.innerHTML
        newField.children[1].addEventListener('keypress', handleOnEnter)
        newField.children[1].addEventListener('keydown', handleDeleteKey)
        newField.children[1].classList.add('deadClass')
        e.target.parentElement.parentElement.appendChild(newField)
        newField.children[1].focus()
    }}

}

export const handleDeleteKey = (e) => {
   
    if (e.key === 'Backspace' && !e.target.innerHTML && e.target.className.includes('deadClass')) {
        e.target.parentElement.remove()
    }
}


export const ReferencesComponent = ({id}) => {
    const { handleNewField,CurrentEntity, setCurrentEntity, ReferencesData, setReferencesData,ToolBar, setToolBar, setLinkButton,FontSize,CoursesPerRow,setSelectedId,setReferencesCompArray,SelectedId ,ReferencesCompArray} = useContext(ComponentListContext)
    const [Present, setPresent] = useState(false)
    const StudyProgramRef = useRef()
    const RefContacts = useRef()
    const RefContact1 = useRef()
    const RefContact2= useRef() 
    const addRefrences = useRef()
    const ReferenceDescriptionRef=useRef()
    const handleAdd=()=>{
        handleNewField('references')

    }
 useEffect(() => {
    const title = StudyProgramRef.current.innerHTML
    const title2 = ReferenceDescriptionRef.current.innerHTML
    const newData = { id, title, title2 };
    setReferencesData([...ReferencesData, newData]);
    if(+id>1){
        setSelectedId(id)
        StudyProgramRef.current.focus()
    }

}, [id]);
    useEffect(() => {
        if(+id>0&&SelectedId==id&&CurrentEntity=='ref'){
            const underliend=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.y')
            document.getElementById(`${id}RefContacts`).classList.remove("hidden");
                RefContact1.current.classList.remove("hidden")
                ReferenceDescriptionRef.current.classList.remove("hidden");
                RefContact2.current.classList.remove("hidden")
                addRefrences.current.classList.remove('hidden')
                for(let i of underliend){
                    i.classList.replace("x",'input-underline')
                }
                for(let i of underliendDash){
                    i.classList.replace("y",'input-underline-dashed')
                }
                return

        }
        else{
            addRefrences.current.classList.add('hidden')
                const notunderliend=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.input-underline')
                for(let i of notunderliend){
                    i.classList.replace('input-underline','x')
                }
                const notunderliendDashed=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.input-underline-dashed')
                for(let i of notunderliendDashed){
                    i.classList.replace('input-underline-dashed','y')
                }}
            if (ReferenceDescriptionRef.current.innerHTML === "") {
                ReferenceDescriptionRef.current.classList.add("hidden");
            } else {
                ReferenceDescriptionRef.current.classList.remove("hidden");
            }
            if ((RefContact1.current.value === ""|| RefContact2.current.value=== "") ) {
                if(RefContact1.current.value === ""){
                    RefContact1.current.classList.add("hidden")
                    
                }if(RefContact2.current.value === ""){
                    RefContact2.current.classList.add("hidden")

                }if((RefContact1.current.value === "")){   
                document.getElementById(`${id}RefContacts`).classList.add("hidden");}
            } else {
                document.getElementById(`${id}RefContacts`).classList.remove("hidden");
            
        }
        const handler = (e) => {
            const menu =document.getElementById('referencesmenu'); 
            const toolbar = document.getElementById('toolbar');
            const underliend=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.y')
            if (StudyProgramRef && StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.remove('placeholder:text-black')
            }
            if (StudyProgramRef && !StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.add('placeholder:text-black')
            }
            if(document.getElementsByClassName(`${id}refs`)[0].contains(e.target)){
                document.getElementById(`${id}RefContacts`).classList.remove("hidden");
                RefContact1.current.classList.remove("hidden")
                ReferenceDescriptionRef.current.classList.remove("hidden");
                RefContact2.current.classList.remove("hidden")
                addRefrences.current.classList.remove('hidden')
                for(let i of underliend){
                    i.classList.replace("x",'input-underline')
                }
                for(let i of underliendDash){
                    i.classList.replace("y",'input-underline-dashed')
                }

                return;
            }
            else{
                if((menu&&!menu.contains(e.target))){
                addRefrences.current.classList.add('hidden')
                const notunderliend=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.input-underline')
                for(let i of notunderliend){
                    i.classList.replace('input-underline','x')
                }
                const notunderliendDashed=document.getElementsByClassName(`${id}refs`)[0].querySelectorAll('.input-underline-dashed')
                for(let i of notunderliendDashed){
                    i.classList.replace('input-underline-dashed','y')
                }}
            }
            if (ReferenceDescriptionRef.current.innerHTML === "" &&!ReferenceDescriptionRef.current.contains(e.target)) {
                if((menu&&!menu.contains(e.target))&&(toolbar&&!toolbar.contains(e.target))){
                ReferenceDescriptionRef.current.classList.add("hidden");}
            } else {
                ReferenceDescriptionRef.current.classList.remove("hidden");
            }
            if ((RefContact1.current.value === ""|| RefContact2.current.value=== "") &&!RefContacts.current.contains(e.target)) {
                if(RefContact1.current.value === ""){
                    if((menu&&!menu.contains(e.target))){
                    RefContact1.current.classList.add("hidden")}
                    
                }if(RefContact2.current.value === ""){
                    if((menu&&!menu.contains(e.target))){
                    RefContact2.current.classList.add("hidden")}

                }if((RefContact1.current.value === ""&& RefContact2.current.value=== "")){   
                    if((menu&&!menu.contains(e.target))){             
                document.getElementById(`${id}RefContacts`).classList.add("hidden");}}
            } else {
                document.getElementById(`${id}RefContacts`).classList.remove("hidden");
            }
        }

        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
          };

    })
    const handleOnClick = (id) => {

        setSelectedId(id)
        setCurrentEntity("ref")
    }
    const handleSave =()=>{
        const title = StudyProgramRef.current.innerHTML
        const title2 = ReferenceDescriptionRef.current.innerHTML
        const newData = { id, title, title2 };
      
        let existingObjectIndex = ReferencesData.findIndex(object => object.id === id);
        if (existingObjectIndex !== -1) {
          let updatedReferencesData = [...ReferencesData];
          updatedReferencesData[existingObjectIndex].title = title;
          updatedReferencesData[existingObjectIndex].title2 = title2;
          setReferencesData(updatedReferencesData);
        } else {
          setReferencesData([...ReferencesData, newData]);
        }
      };
    return (
        <div className={`flex flex-col border-refs ${id}refs`} id={id} onClick={()=>handleOnClick(id)}>
            <div className='ml-9 pb-3 educationAllFields' id='educationOldField'>
                <div className='first'><p autoFocus={id==1?false:true} onFocus={()=>setLinkButton(true)} onBlur={()=>{setLinkButton(false);handleSave()}}   contentEditable style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}  type="text" data-placeholder='Name And Position' ref={StudyProgramRef} className={`w-[100%] x block text-black ${FontSize=='md'?'text-[24px]':FontSize=='sm'?'text-[22px]':'text-[26px]'} outline-none  placeholder:text-black placeholder:${FontSize=='md'?'text-[24px]':FontSize=='sm'?'text-[22px]':'text-[26px]'} placeholder:font-[300] ` } onKeyPress={(e) => e.key === 'Enter'? e.preventDefault():null}></p></div>
                <div className='SingleCourse'><p  onFocus={()=>setToolBar(true)} onBlur={()=>{handleSave();setToolBar(false)}} contentEditable style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}  type="text" data-placeholder='Reference' ref={ReferenceDescriptionRef} className={` hidden text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} y outline-none `} onKeyPress={(e) => e.key === 'Enter'? e.preventDefault():null}></p></div>

                <div className='flex  flex-col hidden ' id={`${id}RefContacts`} ref={RefContacts} >                   
                    <div className='flex ' >{/*<img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2  mt-[0.30rem]' alt="" />*/}
                    <input type="text" ref={RefContact1} placeholder='Contact Person' className={`text-black y ${FontSize=='md'?'text-[16px]':FontSize=='sm'?'text-[14px]':'text-[18px]'} outline-none `} /></div>
                    <div className='flex '> {/*<img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2  mt-[0.30rem]' alt="" />*/}
                    <input type="text" ref={RefContact2} placeholder='Contact Info' className={`text-black y ${FontSize=='md'?'text-[16px]':FontSize=='sm'?'text-[14px]':'text-[18px]'} outline-none `} />
                   
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addRefrences} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>
        </div>)
}


export default function References() {
    const { Icon, CoursesPerRow, ThemeColor, ReferencesCompArray, setReferencesCompArray } = useContext(ComponentListContext)
    return (
        <div key='references' className='pb-3 pr-5 '>
             <div className='   ml-6 pt-5 px-5'>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] references'>
                    {Icon && <span className='relative left-3'><EducationSvg></EducationSvg></span>
                    }
                     <div suppressContentEditableWarning={true} contentEditable="true" className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >REFERENCES</div>
                  
                </div>
            </div>
            {ReferencesCompArray.map((data) => {
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