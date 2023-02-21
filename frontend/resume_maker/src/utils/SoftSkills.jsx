import React, { useContext, useEffect, useState, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import SkillSvg from '../assets/Skills'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'


export const SoftSkillsComponent = ({id}) => {

    const { handleNewField, SoftSkillsData, setSoftSkillsData, SelectedId, SoftSkillsSettingInfoGraphic,SoftSkillsCompArray, setSoftSkillsCompArray, SoftSkillsIntensify, setSoftSkillsIntensify,setSelectedId,FontSize } = useContext(ComponentListContext)
    const SkillRef = useRef()
    const [size, setSize] = useState(6)
    const handleSize =(e)=>{
        if(SoftSkillsSettingInfoGraphic === 'Highlighted' ||SoftSkillsSettingInfoGraphic === 'None' ){

        if(e.target.value.length==0){
            setSize(6)
        }
        else{
            
            setSize(e.target.value.length)
        }

    }}
    useEffect(() => {
        const title = SkillRef.current.value
        const newData = { id, title };
        setSoftSkillsData([...SoftSkillsData, newData]);

        if(+id>1){
            setSelectedId(id)
            SkillRef.current.focus()
            
           
        }
      
    
  }, [id]);


    const handleSkillsEnterKey = (e) => {
        if((e.target.value).trim()!=""){
            if (e.key === 'Enter') {
                handleSave()
                handleNewField('softskills')
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
        const menu =document.getElementById('softskillsmenu');
        const underliend=document.getElementsByClassName(`${id}softskill`)[0].querySelectorAll('.x')

        if (SkillRef.current && SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.remove('placeholder:text-black')
        }
        if (SkillRef.current && !SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.add('placeholder:text-black')
            SkillRef.current.classList.replace("x",'input-underline')
        }
        if(document.getElementsByClassName(`${id}softskill`)[0].contains(e.target)){
            for(let i of underliend){
                i.classList.replace("x",'input-underline')
            }
            return;
        }
        else{
            if((menu&&!menu.contains(e.target))){
            const notunderliend=document.getElementsByClassName(`${id}softskill`)[0].querySelectorAll('.input-underline')
            for(let i of notunderliend){
                i.classList.replace('input-underline','x')
            }
          }
        }
    }
    useEffect(() => {
       
        document.addEventListener('mousedown', handler)
        document.addEventListener('focusin', handler)


        if (SoftSkillsSettingInfoGraphic === 'Free1') {
            setSize(22)
            const div = document.getElementsByClassName('SkillsInfoDiv')
            
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
        if (SoftSkillsSettingInfoGraphic === 'Premium2') {
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
        if (SoftSkillsSettingInfoGraphic === 'Premium3' || SoftSkillsSettingInfoGraphic === 'Premium4' ||SoftSkillsSettingInfoGraphic === 'Premium1') {
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
          };
    })
  const handleOnClick = (id) => {

    setSelectedId(id)
    
}
const handleSave =()=>{
    const title = SkillRef.current.value
    const newData = { id, title };
  
    let existingObjectIndex = SoftSkillsData.findIndex(object => object.id === id);
    if (existingObjectIndex !== -1) {
      let updatedSoftSkillsData = [...SoftSkillsData];
      updatedSoftSkillsData[existingObjectIndex].title = title;
      setSoftSkillsData(updatedSoftSkillsData);
    } else {
      setSoftSkillsData([...SoftSkillsData, newData]);
    }
  };
    return (
        <div className={`flex flex-col  border-skill ${id}softskill`} id={id}  onClick={()=>handleOnClick(id)}>
            <div className='ml-9 pb-3 skillsAllFields' id='skillsOldField'>

                <div className='flex'style={{alignItems:'center'}}>
                    <div className={``}>
                        <input type="text" onFocus={(e)=>{handleOnClick(id);e.target.classList.add('input-underline')}} size={size} onBlur={(e)=>{handleSave();e.target.classList.remove('input-underline')}}   onInput={handleSize} placeholder='Skill' className={` x ${(SoftSkillsSettingInfoGraphic === 'Highlighted' ||SoftSkillsSettingInfoGraphic === 'None' )?'text-center':''} ${FontSize=='md'?'text-[18px]':FontSize=="sm"?'text-[16px]':'text-[20px]'} flex-shrink font-[500] outline-none placeholder:text-black ${FontSize=='md'?'text-[18px]':FontSize=="sm"?'text-[16px]':'text-[20px]'} placeholder:font-[500]  ${SoftSkillsSettingInfoGraphic === 'Highlighted' ? 'text-white bg-gray-500 rounded-lg py-2 placeholder:text-white placeholder:px-1 px-1' : 'text-black placeholder:text-black'} ${SoftSkillsIntensify ? 'bg-gray-800' : null}  max-w-full`} ref={SkillRef} onKeyPress={(e) => handleSkillsEnterKey(e)} />
                    </div>
                    {/* Free1 */}
                    {SoftSkillsSettingInfoGraphic === 'Free1' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4 border-primary rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `} >
                            </div>
                        </div>
                    }

                    {/* Premium1 */}
                    {SoftSkillsSettingInfoGraphic === 'Premium1' &&
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
                    {SoftSkillsSettingInfoGraphic === 'Premium2' &&
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
                    {SoftSkillsSettingInfoGraphic === 'Premium3' &&
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
                    {SoftSkillsSettingInfoGraphic === 'Premium4' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border ml-4  border-[#BDBDBD] rounded-md w-6 h-6 `}>
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



export default function SoftSkills() {
    const {handleNewField,SelectedId, Icon, SoftSkillsCompArray, setSoftSkillsCompArray, ThemeColor, SoftSkillsSettingInfoGraphic } = useContext(ComponentListContext)
    const addSoftSkils = useRef()
    const handleAdd=()=>{
        handleNewField('softskills')

    }
    useEffect(() => {
        const handler = (e) => {
            const menu =document.getElementById('softskillsmenu');
            if(document.getElementsByClassName("softskills")[0].contains(e.target)){
                addSoftSkils.current.classList.remove('hidden')
                return;
            }
            else{
                if((menu&&!menu.contains(e.target))){
                addSoftSkils.current.classList.add('hidden')}
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
          };

    })
    return (
        <div key='softskills' className='pb-3 pr-5 '>
            <div className='   ml-6 pt-5 px-5 '>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] softskills'>
                    {Icon && <span className='relative left-3'><SkillSvg></SkillSvg></span>
                    }
                     <div contentEditable="true" suppressContentEditableWarning={true} className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >SOFT SKILLS</div>
                  
                </div>
            </div>
            <div style={{display:SoftSkillsSettingInfoGraphic !== 'None' && SoftSkillsSettingInfoGraphic!=='Highlighted' ? undefined : 'flex',flexWrap:'wrap',marginTop:10}}  >
                {SoftSkillsCompArray.map((data) => {
                    return (
                        data
                    )
                })}
             
            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addSoftSkils} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>


        </div>)
}        