import React, { useContext, useEffect, useState, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import SkillSvg from '../assets/Skills'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdd } from '@fortawesome/free-solid-svg-icons'



export const SkillComponent = ({id}) => {

    const { handleNewField, SkillsData, setSkillsData,SkillsSettingInfoGraphic, SkillsCompArray, setSkillsCompArray, Intensify, setIntensify,setSelectedId,FontSize,SelectedId} = useContext(ComponentListContext)
    const SkillRef = useRef()
    const [size, setSize] = useState(6)
    const handleSize =(e)=>{
        if(SkillsSettingInfoGraphic === 'Highlighted' ||SkillsSettingInfoGraphic === 'None' ){
        
        
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
        setSkillsData([...SkillsData, newData]);

        if(+id>1){
            setSelectedId(id)
            SkillRef.current.focus()
            
           
        }
      
    
  }, [id]);
    const handleSkillsEnterKey = (e) => {
        if((e.target.value).trim()!=""){
        if (e.key === 'Enter') {
            handleSave()
            handleNewField("skills")
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
        const menu =document.getElementById('skillsmenu');
        const underliend=document.getElementsByClassName(`${id}skill`)[0].querySelectorAll('.x')
        if (SkillRef.current && SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.remove('placeholder:text-black')
        }
        if (SkillRef.current && !SkillRef.current.contains(e.target)) {
            SkillRef.current.classList.add('placeholder:text-black')
        }
        if(document.getElementsByClassName(`${id}skill`)[0].contains(e.target)){
            for(let i of underliend){
                i.classList.replace("x",'input-underline')
            }

            return;
        }
        else{
            if((menu&&!menu.contains(e.target))){
            const notunderliend=document.getElementsByClassName(`${id}skill`)[0].querySelectorAll('.input-underline')
            for(let i of notunderliend){
                i.classList.replace('input-underline','x')
            }
          }
        }
    }
    useEffect(() => {
        
        
        document.addEventListener('mousedown', handler)


        // Free1
        if (SkillsSettingInfoGraphic === 'Free1') {
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
        if (SkillsSettingInfoGraphic === 'Premium2') {
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
        if (SkillsSettingInfoGraphic === 'Premium3' || SkillsSettingInfoGraphic === 'Premium4' ||SkillsSettingInfoGraphic === 'Premium1') {
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
          };
    })
    
      
      
      
    const handleOnClick = (id) => {

        setSelectedId(id)
        
    }
    const handleSave =()=>{
        const title = SkillRef.current.value
        const newData = { id, title };
      
        let existingObjectIndex = SkillsData.findIndex(object => object.id === id);
        if (existingObjectIndex !== -1) {
          let updatedSkillsData = [...SkillsData];
          updatedSkillsData[existingObjectIndex].title = title;
          setSkillsData(updatedSkillsData);
        } else {
            setSkillsData([...SkillsData, newData]);
        }
      };
    
    return (
      <div
        className={`flex flex-col border-skill ${id}skill`}
        id={id}
        onClick={() => handleOnClick(id)}
      >
        <div className="ml-9  pb-3 skillsAllFields" id="skillsOldField">
          <div className="flex" style={{ alignItems: "center" }}>
            <div className={``} style={{width:SkillsSettingInfoGraphic === "Free1"?'60%':'100%'}}>
              <input
              style={{width:'100%'}}
                type="text"
                onFocus={(e) => {
                  handleOnClick(id);
                  e.target.classList.add("input-underline");
                }}
                size={size}
                onBlur={(e) => {
                  handleSave();
                  e.target.classList.remove("input-underline");
                }}
                onInput={handleSize}
                placeholder="Skill"
                className={` ${
                  SkillsSettingInfoGraphic === "Highlighted" ||
                  SkillsSettingInfoGraphic === "None"
                    ? ""
                    : ""
                } ${
                  FontSize == "md"
                    ? "text-[24px]"
                    : FontSize == "sm"
                    ? "text-[22px]"
                    : "text-[26px]"
                } x flex-shrink items-center font-[500] outline-none placeholder:${
                  FontSize == "md"
                    ? "text-[18px]"
                    : FontSize == "sm"
                    ? "text-[16px]"
                    : "text-[20px]"
                } flex-shrink font-[500] outline-none placeholder:${
                  FontSize == "md"
                    ? "text-[18px]"
                    : FontSize == "sm"
                    ? "text-[16px]"
                    : "text-[20px]"
                } flex-shrink font-[500] outline-none placeholder:${
                  FontSize == "md"
                    ? "text-[18px]"
                    : FontSize == "sm"
                    ? "text-[16px]"
                    : "text-[20px]"
                } placeholder:font-[500]  ${
                  SkillsSettingInfoGraphic === "Highlighted"
                    ? "text-white bg-gray-500 rounded-lg py-2 placeholder:text-white placeholder:px-1 px-1"
                    : "text-black placeholder:text-black"
                } ${Intensify ? "bg-gray-800" : null}  `}
                ref={SkillRef}
                onKeyPress={(e) => handleSkillsEnterKey(e)}
                onKeyDown={
                  SkillsSettingInfoGraphic === "Highlighted"
                    ? (e) => handleSkillsInput(e)
                    : null
                }
              />
            </div>
            {/* Free1 */}
            {SkillsSettingInfoGraphic === "Free1" && (
              <div
                className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}
                id={`${id}skillFree`}
              >
                <div
                  className={`border ml-4 border-primary rounded-full w-6 h-6 hover:bg-primary `}
                ></div>
                <div
                  className={`border border-primary rounded-full w-6 h-6 hover:bg-primary  `}
                ></div>
                <div
                  className={`border border-primary rounded-full w-6 h-6 hover:bg-primary  `}
                ></div>
                <div
                  className={`border border-primary rounded-full w-6 h-6 hover:bg-primary `}
                ></div>
                <div
                  className={`border border-primary rounded-full w-6 h-6 hover:bg-primary `}
                ></div>
              </div>
            )}

            {/* Premium1 */}
            {SkillsSettingInfoGraphic === "Premium1" && (
              <div
                className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}
              >
                <div
                  className={`border ml-4 border-[#595959] rounded-full w-6 h-6 hover:bg-[#595959] `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-6 h-6 hover:bg-[#595959] `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-6 h-6 hover:bg-[#595959] `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-6 h-6 hover:bg-[#595959] `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-6 h-6 hover:bg-[#595959] `}
                ></div>
              </div>
            )}

            {/* Premium2 */}
            {SkillsSettingInfoGraphic === "Premium2" && (
              <div
                className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}
              >
                <div
                  className={`border ml-4 border-[#595959] rounded-full w-4 h-4 `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-4 h-4  `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-4 h-4  `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-4 h-4  `}
                ></div>
                <div
                  className={`border border-[#595959] rounded-full w-4 h-4  `}
                ></div>
              </div>
            )}

            {/* Premium3 */}
            {SkillsSettingInfoGraphic === "Premium3" && (
              <div
                className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}
              >
                <div
                  className={`border-4 ml-4 border-[#BDBDBD] rounded-full w-6 h-6 `}
                ></div>
                <div
                  className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
                ></div>
                <div
                  className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
                ></div>
                <div
                  className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
                ></div>
                <div
                  className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
                ></div>
              </div>
            )}

            {/* Premium4 */}
            {SkillsSettingInfoGraphic === "Premium4" && (
              <div
                className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}
              >
                <div
                  className={`border ml-4 border-[#BDBDBD] rounded-md w-6 h-6 `}
                ></div>
                <div
                  className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
                ></div>
                <div
                  className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
                ></div>
                <div
                  className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
                ></div>
                <div
                  className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}



export default function Skills() {
    const {handleNewField,SelectedId, Icon, SkillsCompArray, setSkillsCompArray, ThemeColor, SkillsSettingInfoGraphic } = useContext(ComponentListContext)
    const addSkill = useRef()
    const handleAdd=()=>{
        handleNewField('skills')

    }
  
    useEffect(() => {
        const handler = (e) => {
            const menu =document.getElementById('skillsmenu');
            if(document.getElementsByClassName("skills")[0].contains(e.target)){
                addSkill.current.classList.remove('hidden')
                return;
            }
            else{
                if((menu&&!menu.contains(e.target))){
                addSkill.current.classList.add('hidden')}
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
          };

    })
    return (
        <div key='skills' className='pb-3 pr-5 '>
             <div className='   ml-6 pt-5 px-5 '>
                <div className='flex space-x-6 relative right-5 items-center w-[450px] skills'>
                    {Icon && <span className='relative left-3'><SkillSvg></SkillSvg></span>
                    }
                     <div suppressContentEditableWarning={true} contentEditable="true" className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `} >SKILLS</div>
                  
                </div>
            </div>
            <div style={{display:SkillsSettingInfoGraphic !== 'None' && SkillsSettingInfoGraphic!=='Highlighted' ? undefined : 'flex',flexWrap:'wrap',marginTop:10}} >
                {SkillsCompArray.map((data) => {
                    
                    return (
                        data
                    )
                })}
            </div>
            <div className='flex items-center gap-2 hidden ml-3' ref={addSkill} > 
            <span onClick={handleAdd} className='bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2' ><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>
            <div className=' new-border w-[90%]'> </div> <div className='w-[16px] h-[16px] border border-2 border-primary rounded-full '></div>
            </div>

        </div>)
}
