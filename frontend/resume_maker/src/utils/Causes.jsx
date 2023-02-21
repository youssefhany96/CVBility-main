import React, { useContext, useEffect, useState, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import SkillSvg from '../assets/Skills'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'



export const CausesComponent = ({id}) => {

    const {handleNewField,CurrentEntity, setCurrentEntity,CausesData, setCausesData,FontSize,setSelectedId,CausesSettingInfoGraphic,CausesCompArray,SelectedId,setCausesSettingInfoGraphic, SkillsCompArray, setSkillsCompArray,setCausesCompArray, CausesIntensify, setCausesIntensify } = useContext(ComponentListContext)
    const SkillRef = useRef()
    const [size, setSize] = useState(6)
    const handleSize =(e)=>{
        if(CausesSettingInfoGraphic === 'Highlighted' ||CausesSettingInfoGraphic === 'None' ){

        if(e.target.value.length==0){
            setSize(6)
        }
        else{
            
            setSize(e.target.value.length)
        }}

    }
    useEffect(() => {
        const title = SkillRef.current.value
        const newData = { id, title };
        setCausesData([...CausesData, newData]);

        if(+id>1){
            setSelectedId(id)
            SkillRef.current.focus()
            
           
        }
      
    
  }, [id]);
    const handleSkillsEnterKey = (e) => {
        if((e.target.value).trim()!=""){
            if (e.key === 'Enter') {
                handleSave()
                handleNewField("causes")
            }}
        
    }

    const handleSkillsInput = (e) => {
        if (e.target.value) {
            if (e.key !== 'Backspace' || e.key !== 'Delete') {
                e.target.size = e.target.value.length
            }
            else {
                e.target.size = e.target.value.length - 2

            }
        }


    }
    const handler = (e) => {
        const menu =document.getElementById("causesmenu");
        const underliend=document.getElementsByClassName(`${id}causes`)[0].querySelectorAll('.x')
        if(document.getElementsByClassName(`${id}causes`)[0].contains(e.target)){
          
            for(let i of underliend){
                i.classList.replace("x",'input-underline')
            }

            return;
        }
        else{
            if((menu&&!menu.contains(e.target))){
           
            const notunderliend=document.getElementsByClassName(`${id}causes`)[0].querySelectorAll('.input-underline')
            for(let i of notunderliend){
                i.classList.replace('input-underline','x')
            }
          
        }

        }
        if (SkillRef.current && SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.remove('placeholder:text-black')
        }
        if (SkillRef.current && !SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.add('placeholder:text-black')
        }
    }
    useEffect(() => {
       
        document.addEventListener('mousedown', handler)
        document.addEventListener('focusin', handler)

        if (CausesSettingInfoGraphic === 'Free1') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            setSize(22)
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)
                item.addEventListener('mouseleave', () => {
                    x.map((data, i) => {
                        if (!x[i].classList.contains('active') ) {
                           x[i].classList.remove('bg-primary')
                        }
                        else{
                            x[i].classList.add('bg-primary')
                        }
                    })
                })
                x.map((itm, index) => {
                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i >= index) {
                                x[i].classList.add('active')
                            }
                            else {
                                x[i].classList.remove('active')
                            }
                        })
                      })
                    itm.addEventListener('mouseenter', () => {
                        x.map((data, i) => {
                            if (i >= index ) {
                                x[i].classList.add('bg-primary')
                            }
                            else {
                                x[i].classList.remove('bg-primary')
                            }
                        })
                    })
                   
                    
                    ;
                })
            })
            

        }

       

        // Premium2
        if (CausesSettingInfoGraphic === 'Premium2') {
            setSize(22)
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)
                item.addEventListener('mouseleave', () => {
                    x.map((data, i) => {
                        if (!x[i].classList.contains('active') ) {
                            x[i].classList.remove('bg-[#595959]', 'w-6', 'h-6')
                            x[i].classList.add('w-4', 'h-4',)
                        }
                        else{
                            x[i].classList.add('bg-[#595959]', 'w-6', 'h-6')
                            x[i].classList.remove('w-4', 'h-4')
                        }
                    })
                })
                x.map((itm, index) => {
                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i >= index) {
                                x[i].classList.add('active')
                            }
                            else {
                                x[i].classList.remove('active')
                            }
                        })
                      })
                    itm.addEventListener('mouseenter', () => {
                        x.map((data, i) => {
                            if (i >= index ) {
                                x[i].classList.add('bg-[#595959]', 'w-6', 'h-6')
                                x[i].classList.remove('w-4', 'h-4')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]', 'w-6', 'h-6')
                                x[i].classList.add('w-4', 'h-4',)
                            }
                        })
                    })
                    
                    ;
                })
            })

        }


        // Premium3
        if (CausesSettingInfoGraphic === 'Premium3' || CausesSettingInfoGraphic === 'Premium4' ||CausesSettingInfoGraphic === 'Premium1') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            setSize(22)
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)
                item.addEventListener('mouseleave', () => {
                    x.map((data, i) => {
                        if (!x[i].classList.contains('active') ) {
                            x[i].classList.remove('bg-[#595959]')                        }
                        else{
                            x[i].classList.add('bg-[#595959]')

                        }
                    })
                })

                x.map((itm, index) => {
                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i >= index) {
                                x[i].classList.add('active')
                            }
                            else {
                                x[i].classList.remove('active')
                            }
                        })
                      })
                    itm.addEventListener('mouseenter', () => {
                        x.map((data, i) => {
                            if (i >= index ) {
                                x[i].classList.add('bg-[#595959]')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]')
                            }
                        })
                    })
                    
                    ;
                })
            })

        }

      
    
    return () => {
        document.removeEventListener('mousedown', handler);
        document.removeEventListener('focusin', handler);
      }; })

    const handleOnClick = (id) => {

        setSelectedId(id)
        
    }
    const handleSave =()=>{
      
            const title = SkillRef.current.value
            const newData = { id, title };
          
            let existingObjectIndex = CausesData.findIndex(object => object.id === id);
            if (existingObjectIndex !== -1) {
              let updatedCausesData = [...CausesData];
              updatedCausesData[existingObjectIndex].title = title;
              setCausesData(updatedCausesData);
            } else {
                setCausesData([...CausesData, newData]);
            }
          }
    return (
        <div className={`flex flex-col border-causes ${id}causes`}  id={id}  onClick={()=>handleOnClick(id)}>
            <div className='ml-9 pb-3 skillsAllFields' id='skillsOldField'>

                <div className='flex' style={{alignItems:'center'}}>
                    <div className={``}>
                        <input type="text"   onFocus={(e)=>{handleOnClick(id);e.target.classList.add('input-underline')}} size={size} onBlur={(e)=>{handleSave();e.target.classList.remove('input-underline')}}   onInput={handleSize} placeholder='Causes' className={`  x ${(CausesSettingInfoGraphic === 'Highlighted' ||CausesSettingInfoGraphic === 'None' )?'text-center':''} ${FontSize=='md'?'text-[18px]':FontSize=="sm"?'text-[16px]':'text-[20px]'} flex-shrink font-[500] outline-none placeholder:text-black ${FontSize=='md'?'text-[18px]':FontSize=="sm"?'text-[16px]':'text-[20px]'} placeholder:font-[500]  ${CausesSettingInfoGraphic === 'Highlighted' ? 'text-white bg-gray-500 rounded-lg py-2 placeholder:text-white placeholder:px-1 px-1' : 'text-black placeholder:text-black'} ${CausesIntensify ? 'bg-gray-800' : null}  max-w-full`} ref={SkillRef} 
                        onKeyPress={(e) => handleSkillsEnterKey(e)}  onKeyDown={CausesSettingInfoGraphic === 'Highlighted' ? (e) => handleSkillsInput(e) : null} />
                    </div>
                    {/* Free1 */}
                    {CausesSettingInfoGraphic === 'Free1' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4 border-primary rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium1 */}
                    {CausesSettingInfoGraphic === 'Premium1' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4 border-[#595959] rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium2 */}
                    {CausesSettingInfoGraphic === 'Premium2' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4 border-[#595959] rounded-full w-4 h-4 `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                        </div>
                    }

                    {/* Premium3 */}
                    {CausesSettingInfoGraphic === 'Premium3' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border-4 ml-4 border-[#BDBDBD] rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium4 */}
                    {CausesSettingInfoGraphic === 'Premium4' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4 border-[#BDBDBD] rounded-md w-6 h-6 `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>)
}



export default function Causes() {
    const { handleNewField,SelectedId,Icon, CausesCompArray, setCausesCompArray, ThemeColor, CausesSettingInfoGraphic } = useContext(ComponentListContext)
    const addCauses = useRef()
    const handleAdd=()=>{
        handleNewField('causes')
    }
    useEffect(() => {
        const handler = (e) => {
            const menu =document.getElementById("causesmenu");
            if(document.getElementsByClassName("causes")[0].contains(e.target)){
                addCauses.current.classList.remove('hidden')
                return;
            }
            else{
                if((menu&&!menu.contains(e.target))){
                addCauses.current.classList.add('hidden')}
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
          };

    })
    return (
        <div className='pb-3 pr-5 ' key='causes'>
           <div className='   ml-6 pt-5 px-5 '>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] causes'>
                    {Icon && <span className='relative left-3'><SkillSvg></SkillSvg></span>
                    }
                     <div suppressContentEditableWarning={true} contentEditable="true" className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >causes</div>
                  
                </div>
            </div>
            <div style={{display:CausesSettingInfoGraphic !== 'None' && CausesSettingInfoGraphic!=='Highlighted' ? undefined : 'flex',flexWrap:'wrap',marginTop:10}} >
                {CausesCompArray.map((data) => {
                    return (
                        data
                    )
                })}
            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addCauses} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>

        </div>)
}
