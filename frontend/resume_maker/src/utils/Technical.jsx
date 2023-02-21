import React, { useContext, useState, useEffect, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import AchievementSvg from '../assets/Achievements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'


export function TechnicalComponent({id}) {
    const AchievementRef = useRef()
    const { handleNewField,CurrentEntity, setCurrentEntity,TechnicalData, setTechnicalData,SelectedId,setSelectedId,FontSize,setTechnicalCompArray,TechnicalCompArray} = useContext(ComponentListContext)
    const addTechnical = useRef()
    const handleAdd=()=>{
        handleNewField('technical')   
    }
            useEffect(() => {
                const title = AchievementRef.current.value
                const newData = { id, title, };
                setTechnicalData([...TechnicalData, newData]);
        
                if(+id>1){
                    setSelectedId(id)
                    AchievementRef.current.focus()
                    
                   
                }
              
            
          }, [id]);
    useEffect(() => {
        if(+id>0&&SelectedId==id&&CurrentEntity=='tech'){
            const underliend=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.y')
                addTechnical.current.classList.remove('hidden')
                for(let i of underliend){
                    i.classList.replace("x",'input-underline')
                }
                for(let i of underliendDash){
                    i.classList.replace("y",'input-underline-dashed')
                }
              
            return
        }
        else{
            addTechnical.current.classList.add('hidden')
                const notunderliend=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.input-underline')
                for(let i of notunderliend){
                    i.classList.replace('input-underline','x')
                }
                const notunderliendDashed=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.input-underline-dashed')
                for(let i of notunderliendDashed){
                    i.classList.replace('input-underline-dashed','y')
                }
        }
        const handler = (e) => {
            const menu =document.getElementById('technicalmenu');
            const underliend=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.x')
            const underliendDash=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.y')
            if(document.getElementsByClassName(`${id}tech`)[0].contains(e.target)){
                addTechnical.current.classList.remove('hidden')
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
                addTechnical.current.classList.add('hidden')
                const notunderliend=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.input-underline')
                for(let i of notunderliend){
                    i.classList.replace('input-underline','x')
                }
                const notunderliendDashed=document.getElementsByClassName(`${id}tech`)[0].querySelectorAll('.input-underline-dashed')
                for(let i of notunderliendDashed){
                    i.classList.replace('input-underline-dashed','y')
                }}
            }

            if (AchievementRef && AchievementRef.current.contains(e.target)) {
                AchievementRef.current.classList.remove('placeholder:text-black')
            }
            if (AchievementRef && !AchievementRef.current.contains(e.target)) {
                AchievementRef.current.classList.add('placeholder:text-black')
            }
        }

        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
          };
    })
    const handleOnClick = (id) => {

        setSelectedId(id)
        setCurrentEntity("tech")
    }
    const handleSave =()=>{
        const title = AchievementRef.current.value
        const newData = { id, title };
      
        let existingObjectIndex = TechnicalData.findIndex(object => object.id === id);
        if (existingObjectIndex !== -1) {
          let updatedTechnicalData = [...TechnicalData];
          updatedTechnicalData[existingObjectIndex].title = title;
          setTechnicalData(updatedTechnicalData);
        } else {
          setTechnicalData([...TechnicalData, newData]);
        }
      };

    return (
        <div className={`flex flex-col border-tech ${id}tech`} id={id} onClick={()=>handleOnClick(id)}>
            <div className='ml-9 pb-3 achievementsAllFields' id='achievementsOldField'>
                <input onBlur={()=>handleSave()}  autoFocus={id==1?false:true} onFocus={()=>handleOnClick(id)} type="text" placeholder='Group Name' className={`text-black  x w-[100%] ${FontSize=='md'?'text-[24px]':FontSize=="sm"?'text-[22px]':'text-[26px]'} font-[500] outline-none placeholder: ${FontSize=='md'?'text-[24px]':FontSize=="sm"?'text-[22px]':'text-[26px]'} placeholder:font-[500] placeholder:text-black  `}  ref={AchievementRef} />

                <div className='flex flex-col space-y-2 ' id='achievementsDetail' >
                    <input type="text" placeholder='List of technical skills' className={`text-black y  text-black ${FontSize=='md'?'text-[16px]':FontSize=="sm"?'text-[14px]':'text-[18px]'} outline-none `} />
                </div>

            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addTechnical} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>
        </div>
    )
}


export default function Technical() {
    const { Icon, ThemeColor,TechnicalCompArray , setTechnicalCompArray } = useContext(ComponentListContext)

    return (
        <div key='technical' className='pb-3 pr-5 '>
            <div className='   ml-6 pt-5 px-5 '>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] technical'>
                    {Icon && <span className='relative left-3'><AchievementSvg></AchievementSvg></span>}
                    <div suppressContentEditableWarning={true} contentEditable="true" className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >TECHNICAL</div>
                </div>
            </div>
            {TechnicalCompArray.map((data) => {
                return (
                    data
                )
            })}

        </div>)
}