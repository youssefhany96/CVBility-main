import React, { useRef, useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faAdd, faTrash,faAngleUp,faAngleDown,faUserGroup, faGlobe, faCity, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faFacebook,faTwitter, faQuora, faSkype, faGithub, faStackOverflow, faMedium, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faUser, faMap, faAddressBook, faCalendar,} from '@fortawesome/free-regular-svg-icons'

import ComponentListContext from '../../context/ComponentListContext'
import './style.css'
import TemplateContext from '../../context/TemplateContext';
import { useParams } from 'react-router-dom';
export default function UserInfoEdit(props) {
    const {id}= useParams()
    const { ContactInfo,ModifyContact ,Document} = useContext(TemplateContext)
    const { List1,ThemeColor, List2, setList2, setList1, USFormat, Title, Picture, Summary, setPicture, setTitle, setSummary, setUSFormat } = useContext(ComponentListContext)
    const { showLayoutModal, setshowLayoutModal } = props
    const LayoutModalRef = useRef()
    const [SocialEdit, setSocialEdit] = useState(false)
    const [ShowDay, setShowDay] = useState(false)
    const [ShowMonth, setShowMonth] = useState(false)
    const [ShowYear, setShowYear] = useState(false)
    const [Firstname, setFirstname] = useState(ContactInfo?.firstName?.value ? ContactInfo?.firstName?.value : null)
    const [Lastname, setLastname] = useState(ContactInfo?.lastName?.value ? ContactInfo?.lastName?.value : null)
    const [Email, setEmail] = useState(ContactInfo?.email?.value ? ContactInfo?.email?.value : null)
    const [phone, setphone] = useState(ContactInfo?.phone?.value ? ContactInfo?.phone?.value : null)
    const [Country, setCountry] = useState(ContactInfo?.country?.value!='Country' ? ContactInfo?.country?.value :'')
    const [City, setCity] = useState(ContactInfo?.city?.value!='City' ? ContactInfo?.city?.value :'')
    const [Address, setAddress] = useState(ContactInfo?.address?.value!='Address' ? ContactInfo?.address?.value :'')
    const [website, setwebsite] = useState(ContactInfo?.website?.value!='Website'  ? ContactInfo?.website?.value :'')
    const [Linkedin, setLinkedin] = useState(ContactInfo?.linkedin?.value!='LinkedIn' ? ContactInfo?.linkedin?.value :'')
    const [twitter, settwitter] = useState(ContactInfo?.twitter?.value!='Twitter' ? ContactInfo?.twitter?.value :'')
    const [skype, setskype] = useState(ContactInfo?.skype?.value!='Skype' ? ContactInfo?.skype?.value :'')
    const [quora, setquora] = useState(ContactInfo?.quora?.value!='Quora' ? ContactInfo?.quora?.value :'')
    const [facebook, setfacebook] = useState(ContactInfo?.facebook?.value!='Facebook' ? ContactInfo?.facebook?.value :'')
    const [github, setgithub] = useState(ContactInfo?.github?.value!='GitHub'? ContactInfo?.github?.value :'')
    const [Medium, setMedium] = useState(ContactInfo?.medium?.value!='Medium' ? ContactInfo?.medium?.value :'')
    const [stackoverflow, setstackoverflow] = useState(ContactInfo?.stackoverflow?.value!='Stack Overflow' ? ContactInfo?.stackoverflow?.value :'')
    const [Instagram, setInstagram] = useState(ContactInfo?.instagram?.value!='Instagram' ? ContactInfo?.instagram?.value :'')
    const [Dob, setDob] = useState(ContactInfo?.DOB ? ContactInfo?.DOB : null)
    const [ShowEmail, setShowEmail] = useState(ContactInfo?.email?.visible ? ContactInfo?.email?.visible : false)
    const [Showphone, setShowphone] = useState(ContactInfo?.phone?.visible ? ContactInfo?.phone?.visible : false)
    const [ShowCountry, setShowCountry] = useState( (ContactInfo?.country?.value==null||ContactInfo?.country?.value=="")?  false : ContactInfo?.country?.visible)
    const [ShowCity, setShowCity] = useState( (ContactInfo?.city?.value==null||ContactInfo?.city?.value=='') ? false : ContactInfo?.city?.visible)
    const [showAddress, setshowAddress] = useState(( ContactInfo?.address?.value==null||ContactInfo?.address?.value=='') ? false : ContactInfo?.address?.visible)
    const [Showwebsite, setShowwebsite] = useState((ContactInfo?.website?.value==null||ContactInfo?.website?.value=='') ? false : ContactInfo?.website?.visible)
    const [ShowLinkedin, setShowLinkedin] = useState( (ContactInfo?.linkedin?.value==null||ContactInfo?.linkedin?.value=='') ? false : ContactInfo?.linkedin?.visible)
    const [Showtwitter, setShowtwitter] = useState( (ContactInfo?.twitter?.value==null||ContactInfo?.twitter?.value=='') ? false : ContactInfo?.twitter?.visible)
    const [Showskype, setShowskype] = useState((ContactInfo?.skype?.value==null||ContactInfo?.skype?.value=='') ? false : ContactInfo?.skype?.visible)
    const [Showquora, setShowquora] = useState( (ContactInfo?.quora?.value==null||ContactInfo?.quora?.value=='') ? false : ContactInfo?.quora?.visible)
    const [Showfacebook, setShowfacebook] = useState((ContactInfo?.facebook?.value==null||ContactInfo?.facebook?.value=='') ? false : ContactInfo?.facebook?.visible)
    const [Showgithub, setShowgithub] = useState((ContactInfo?.github?.value==null||ContactInfo?.github?.value=='') ? false : ContactInfo?.github?.visible)
    const [ShowMedium, setShowMedium] = useState((ContactInfo?.medium?.value==null||ContactInfo?.medium?.value=='') ? false : ContactInfo?.medium?.visible)
    const [Showstackoverflow, setShowstackoverflow] = useState( (ContactInfo?.stackoverflow?.value==null )? false : ContactInfo?.stackoverflow?.visible)
    const [ShowInstagram, setShowInstagram] = useState(ContactInfo?.instagram?.value==null ? false : ContactInfo?.instagram?.visible )
    const [showDob, setshowDob] = useState(ContactInfo?.showDOB ? ContactInfo?.showDOB : false)
    const [ShowBirthday, setShowBirthday] = useState(ContactInfo?.birthday?.visible? ContactInfo?.birthday?.visible : false)
    const [Day, setDay] = useState(ContactInfo?.birthday?.day ? ContactInfo?.birthday.day : null)
    const [Month, setMonth] = useState(ContactInfo?.birthday?.month ? ContactInfo?.birthday.month : null)
    const [Year, setYear] = useState(ContactInfo?.birthday?.year ? ContactInfo?.birthday.year : null)
   const [isUpdate,setIsUpdate] = useState(false)
    const dayModal = useRef()
    const monthModal = useRef()
    const yearModal = useRef()
   
    
    
    // useEffect(() => {
    //     console.log(localStorage.getItem('user_data'))
    //     let handler = (e) => {
    //         if (LayoutModalRef.current && !LayoutModalRef.current.contains(e.target)) {
    //             setshowLayoutModal(false)
    //         }
    //     }
    //     document.addEventListener('mousedown', handler)
    // },)
    useEffect(() => {
        let handler = (e) => {
            if(dayModal.current&&!dayModal.current.contains(e.target)){
                setShowDay(false)
                return;
            }
            if(monthModal.current&&!monthModal.current.contains(e.target)){
                setShowMonth(false)
                return;
            }
            if(yearModal.current&&!yearModal.current.contains(e.target)){
                setShowYear(false)
                return;
            }

        
               }
               document.addEventListener('mousedown', handler)
    
     
    }, [])
    


    
    const Onchange = async() => {
        setIsUpdate(true)
       const data= {
            "docID": id,
            "sectionID": "contact",
            "sectionModelDoc": {
                "email": {
                    "value": Email.trim(),
                    "visible": ShowEmail
                },
                "firstName": {
                    "value": Firstname.trim(),
                    "visible": true
                },
                "lastName": {
                    "value": Lastname,
                    "visible": true
                },
                "birthday": {
                    "visible": ShowBirthday,
                    "day": Day,
                    "month": Month,
                    "year": Year
                },
                "phone": {
                    "value": phone.trim(),
                    "visible": Showphone
                },
                "country": {
                    "value": Country.trim(),
                    "visible": ShowCountry
                },
                "city": {
                    "value": City.trim(),
                    "visible": ShowCity
                }
                ,
                "address": {
                    "value": Address.trim(),
                    "visible": showAddress
                }
                ,
                "website": {
                    "value": website.trim(),
                    "visible": Showwebsite
                },
                "github": {
                    "value": github.trim(),
                    "visible": Showgithub
                }
                ,
                "linkedin": {
                    "value": Linkedin.trim(),
                    "visible": ShowLinkedin
                }
                ,
                "twitter": {
                    "value": twitter.trim(),
                    "visible": Showtwitter
                }
                ,
                "skype": {
                    "value": skype.trim(),
                    "visible": Showskype
                }
                ,
                "facebook": {
                    "value": facebook.trim(),
                    "visible": Showfacebook
                }
                ,
                "quora": {
                    "value": quora.trim(),
                    "visible": Showquora
                }
                ,
                "medium": {
                    "value": Medium.trim(),
                    "visible": ShowMedium
                }
                ,
                "stackoverflow": {
                    "value": stackoverflow.trim(),
                    "visible": Showstackoverflow
                }
                ,
                "instagram": {
                    "value": Instagram.trim(),
                    "visible": ShowInstagram
                }
                

            }
        }
       
        ModifyContact(data).then(()=>Document(id,true,()=>{
            setIsUpdate(false)
            setshowLayoutModal(false)
        }))
        }
       
      
       
    

    return(
        showLayoutModal ? <>
            <div style={{height:SocialEdit ?  1000 : 700}} className={`flex flex-col absolute top-[-200px] left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2"  mt-20 bg-white w-[700px] after:left-[50%]  inset-0 z-50 outline-none focus:outline-none`} ref={LayoutModalRef}>
          <div className='flex justify-end mr-8'>
            <label className="inline-flex flex-end  relative items-center mb-5 cursor-pointer ml-3 mt-4">
                            <input type="checkbox" value="" className="sr-only h-4 peer" />
                            <div className="w-9  h-[13px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                        </div>
            <div  id='Account'>
            <p style={{color:'black',fontSize:20,marginLeft:'3%'}}>Accounts Settings</p>
            </div> 
           <>
                    <div className='flex space-x-6 justify-center py-6'>
                    {/* First Name  */}    
                    <div className='  main-container'>
                    <div className='w-[20px]'></div>
                    <span><FontAwesomeIcon icon={faUser} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
                    <input type="text" id="inputID" onChange={(e)=>setFirstname(e.target.value)}  placeholder='First Name' value={Firstname} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                     
                    {/* Last Name  */}
                    <div className='  main-container'>
                    <div className='w-[18px]'></div>
                    <span><FontAwesomeIcon icon={faUserGroup} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
            
                    <input type="text" id="inputID" onChange={(e)=>setLastname(e.target.value)}  placeholder='First Name' value={Lastname} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    </div>
                    <div className='flex space-x-[43px] justify-center items-center py-6 mx-10'>
                    
                    <div className='main-container gap-1'>
                    <span className='flex ml-8 '>
                        <input id='inputID' className='check check-box' checked={ShowBirthday?true:false} type="checkbox" onChange={(e)=>{setShowBirthday(!ShowBirthday)}} />
                        <FontAwesomeIcon icon={faCalendar} className={`text-${ThemeColor} text-lg ml-3 mr-[9px]`} ></FontAwesomeIcon></span>

                    <div className='editSelect flex flex-col relative'>
                        
                    <input type="text" id="inputID" onInput={(e) => e.target.value = "" } onClick={()=>setShowDay(true)} placeholder='First Name' value={Day?Day:'Day'}
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />

{   ShowDay &&                 <div ref={dayModal} className='w-[160px] overflow-y-scroll	scrollbar absolute -translate-x-1/2 left-1/2 top-[49px] text-black h-[150px] pl-4 pt-2 selec-border bg-white  pr-8'><ul className='cursor-pointer date' ><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="Day">Day</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="01">1</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="02">2</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="03">3</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="04">4</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="05">5</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="06">6</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="07">7</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="8">8</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="9">9</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="10">10</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="11">11</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="12">12</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="13">13</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="14">14</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="15">15</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="16">16</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="17">17</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="18">18</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="19">19</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="20">20</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="21">21</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="22">22</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="23">23</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="24">24</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="25">25</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="26">26</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="27">27</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="28">28</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="29">29</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="30">30</li><li onClick={(e)=>{setDay(e.target.value);setShowDay(false)}} value="31">31</li></ul></div>
}                    <span><FontAwesomeIcon onClick={()=>setShowDay(!ShowDay)} icon={ShowDay ? faAngleUp : faAngleDown} className={`text-${ThemeColor} text-lg ml-3 absolute top-1/2 -translate-y-1/2 right-[10px]`} ></FontAwesomeIcon></span>
                    </div>
                    
                    </div>
                    <div className='main-container'>
                    
                    <div className='editSelect flex flex-col relative'>
                    <input type="text" id="inputID" onInput={(e) => e.target.value = "" } onClick={()=>setShowMonth(true)} placeholder='First Name' value={Month ?Month:'Month'}
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />

{   ShowMonth &&                 <div  ref={monthModal} className='w-[160px] overflow-y-scroll	scrollbar absolute -translate-x-1/2 left-1/2 top-[49px] text-black h-[150px] pl-4 pt-2 selec-border bg-white  pr-8'><ul className='cursor-pointer date' ><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}} value="n">Month</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="1">January</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="2">February</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="3">March</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="4">April</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="5">May</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="6">June</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="7">July</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="8">August</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="9">September</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="10">October</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="11">November</li><li onClick={(e)=>{setMonth(e.target.innerHTML);setShowMonth(false)}}  value="12">December</li></ul></div>
}                    <span><FontAwesomeIcon onClick={()=>setShowMonth(!ShowMonth)} icon={ShowMonth ? faAngleUp : faAngleDown} className={`text-${ThemeColor} text-lg ml-3 absolute top-1/2 -translate-y-1/2 right-[10px]`} ></FontAwesomeIcon></span>
                    </div>
                    
                    </div>
                    <div className='main-container '>
                    
                    <div className='editSelect flex mr-8 flex-col relative'>
                    <input type="text" id="inputID" onInput={(e) => e.target.value = "" } onClick={()=>setShowYear(true)} placeholder='First Name' value={Year? Year:'Year'}
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />

{   ShowYear &&                 <div ref={yearModal} className='w-[160px] overflow-y-scroll	scrollbar absolute -translate-x-1/2 left-1/2 top-[49px] text-black h-[150px] pl-4 pt-2 selec-border bg-white  pr-8'><ul className='cursor-pointer date' ><ul><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="n">Year</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2007">2007</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2006">2006</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2005">2005</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2004">2004</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2003">2003</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2002">2002</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2001">2001</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="2000">2000</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1999">1999</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1998">1998</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1997">1997</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1996">1996</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1995">1995</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1994">1994</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1993">1993</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1992">1992</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1991">1991</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1990">1990</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1989">1989</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1988">1988</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1987">1987</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1986">1986</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1985">1985</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1984">1984</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1983">1983</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1982">1982</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1981">1981</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1980">1980</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1979">1979</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1978">1978</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1977">1977</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1976">1976</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1975">1975</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1974">1974</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1973">1973</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1972">1972</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1971">1971</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1970">1970</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1969">1969</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1968">1968</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1967">1967</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1966">1966</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1965">1965</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1964">1964</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1963">1963</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1962">1962</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1961">1961</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1960">1960</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1959">1959</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1958">1958</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1957">1957</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1956">1956</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1955">1955</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1954">1954</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1953">1953</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1952">1952</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1951">1951</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1950">1950</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1949">1949</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1948">1948</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1947">1947</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1946">1946</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1945">1945</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1944">1944</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1943">1943</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1942">1942</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1941">1941</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1940">1940</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1939">1939</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1938">1938</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1937">1937</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1936">1936</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1935">1935</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1934">1934</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1933">1933</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1932">1932</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1931">1931</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1930">1930</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1929">1929</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1928">1928</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1927">1927</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1926">1926</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1925">1925</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1924">1924</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1923">1923</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1922">1922</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1921">1921</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1920">1920</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1919">1919</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1918">1918</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1917">1917</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1916">1916</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1915">1915</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1914">1914</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1913">1913</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1912">1912</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1911">1911</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1910">1910</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1909">1909</li><li onClick={(e)=>{setYear(e.target.value);setShowYear(false)}} value="1908">1908</li></ul></ul></div>
}                    <span><FontAwesomeIcon onClick={()=>setShowYear(!ShowYear)} icon={ShowYear ? faAngleUp : faAngleDown} className={`text-${ThemeColor} text-lg ml-3 absolute top-1/2 -translate-y-1/2 right-[10px]`} ></FontAwesomeIcon></span>
                    </div>
                    
                    </div>

                       
                    </div>
                    </>
            <hr style={{marginTop:0}}></hr>
                <div className='flex flex-col space-y-8 py-3 '>

                    <div className='flex space-x-6 justify-center  '>
                        <button onClick={()=>setSocialEdit(false)} className={SocialEdit ? 'text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg' :  `bg-primary py-2 px-4  text-white rounded-lg cursor-pointer`}>Main Contact</button>
                        <button onClick={()=>setSocialEdit(true)} className={SocialEdit ? 
                            'bg-primary py-2 px-4  text-white rounded-lg cursor-pointer'  : 
                            'text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg'}>
                                Social
                                </button>
                    </div>
                
                {SocialEdit ? (
                    <div>
                    <p style={{color:'black',fontSize:20,marginLeft:'10%',marginBottom:'2%'}}>General/Social Media</p>
                    <div className='flex space-x-6 justify-center'>    
                    <div className='space-y-8'>
                    {/* Email */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={Showwebsite?true:false} type="checkbox" onChange={(e)=>{setShowwebsite(!Showwebsite)}} />
                    <span><FontAwesomeIcon icon={faGlobe} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
    
                    <input id='inputID' type="text" onChange={(e)=>setwebsite(e.target.value)} onInput={(e) => setShowwebsite(e.target.value === "" ? false : true)} placeholder='Website' value={website=='Website'?'':website} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>

                    {/* Email */}
                    <div className='main-container'>
                    <input id='inputID'  className='check check-box' checked={Showtwitter?true:false} type="checkbox" onChange={(e)=>{setShowtwitter(!Showtwitter)}} />
                    <span><FontAwesomeIcon icon={faTwitter} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
    
                    <input type="text" id="inputID" onChange={(e)=>settwitter(e.target.value)} onInput={(e) => setShowtwitter(e.target.value === "" ? false : true)}placeholder='Twitter' value={twitter=='Twitter'?'':twitter} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>

                    {/* Phone Number  */}
                    <div className='main-container'>
                    <input id="inputID" className='check check-box' checked={Showskype?true:false} type="checkbox" onChange={() =>setShowskype(!Showskype)} />
                    <span><FontAwesomeIcon icon={faSkype} className={`text-${ThemeColor} text-lg ml-[13px]`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
                    <input type="text" id="inputID" onChange={(e)=>setskype(e.target.value)} onInput={(e) => setShowskype(e.target.value === "" ? false : true)} placeholder='Skype' value={skype=="Skype"?'':skype} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    </div>
                    <div className='space-y-8'>
                    {/* Country */}
                    <div className='main-container'>
                    <input id="inputID" className='check check-box' checked={ShowLinkedin?true:false} type="checkbox" onChange={() => setShowLinkedin(!ShowLinkedin)} />
                    <span><FontAwesomeIcon icon={faLinkedin} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
        
                    <input type="text" id="inputID" onChange={(e)=>setLinkedin(e.target.value)} onInput={(e) => setShowLinkedin(e.target.value === "" ? false : true)} placeholder='LinkedIn' value={Linkedin=='LinkedIn'?'':Linkedin} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>

                    {/* City  */}
                    <div className='main-container'>
                    <input id="inputID" className='check check-box' checked={Showquora?true:false} type="checkbox" onChange={() => setShowquora(!Showquora)} />
                    <span><FontAwesomeIcon icon={faQuora} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
                    <input type="text" id="inputID" onChange={(e)=>setquora(e.target.value)} onInput={(e) => setShowquora(e.target.value === "" ? false : true)} placeholder='Quora' value={quora=="Quora"?"":quora} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    {/* Address  */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={Showfacebook?true:false} type="checkbox" onChange={() => setShowfacebook(!Showfacebook)} />
                    <span><FontAwesomeIcon icon={faFacebook} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
        
                    <input type="text" id="inputID" onChange={(e)=>setfacebook(e.target.value)} onInput={(e) => setShowfacebook(e.target.value === "" ? false : true)} placeholder='Facebook' value={facebook=="Facebook"?'':facebook} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className='flex space-x-6 justify-center py-6'>    
                    <div className='space-y-8'>
                    <p style={{color:'black',fontSize:20,marginLeft:'10%'}}>Coding</p>
                    {/* Email */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={Showgithub?true:false} type="checkbox" onChange={() => setShowgithub(!Showgithub)} />
                    <span><FontAwesomeIcon icon={faGithub} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>

                    <input id='inputID' type="text" onChange={(e)=>setgithub(e.target.value)} onInput={(e) => setShowgithub(e.target.value === "" ? false : true)} placeholder='Github' value={github=="GitHub"?"":github} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>


                    {/* Phone Number  */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={Showstackoverflow?true:false} type="checkbox" onChange={() => setShowstackoverflow(!Showstackoverflow)} />
                    <span><FontAwesomeIcon icon={faStackOverflow} className={`text-${ThemeColor} text-lg ml-4`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
                
                    <input id='inputID' type="text" onChange={(e)=>setstackoverflow(e.target.value)} onInput={(e) => setShowstackoverflow(e.target.value === "" ? false : true)} placeholder='Stack Overflow' value={stackoverflow=="Stack Overflow"?'':stackoverflow} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    </div>
                    <div className='space-y-8'>
                    <p style={{color:'black',fontSize:20,marginLeft:'10%'}}>Creative Platform</p>
                    {/* Country */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={ShowMedium?true:false} type="checkbox" onClick={() =>setShowMedium(!ShowMedium)} />
                    <span><FontAwesomeIcon icon={faMedium} className={`text-${ThemeColor} text-lg ml-2`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>

                    <input id='inputID' type="text" onChange={(e)=>setMedium(e.target.value)} onInput={(e) => setShowMedium(e.target.value === "" ? false : true)} placeholder='Medium' value={Medium=='Medium'?'':Medium} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>

                    {/* City  */}
                    <div className='main-container'>
                    <input id='inputID' className='check check-box' checked={ShowInstagram?true:false} type="checkbox" onChange={() => setShowInstagram(!ShowInstagram)} />
                    <span><FontAwesomeIcon icon={faInstagram} className={`text-${ThemeColor} text-lg ml-4`} ></FontAwesomeIcon></span>
                    <div className='editInput flex flex-col'>
            
                    <input id='inputID' type="text" onChange={(e)=>setInstagram(e.target.value)} onInput={(e) => setShowInstagram(e.target.value === "" ? false : true)} placeholder='Instagram' value={Instagram=='Instagram'?'':Instagram} 
                    className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                    />
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div>
                  
                </div>
                    </div>

                ) : (<>
                    <div className='flex space-x-6 justify-center'>
                        <div className='space-y-10'>
                        {/* Email */}
                        <div className='main-container'>
                        <input id='inputID' className='check check-box'  checked={ShowEmail?true:false} type="checkbox" onChange={() => setShowEmail(!ShowEmail)} />
                        <span><FontAwesomeIcon icon={faEnvelope} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                        <div className='editInput flex flex-col'>

                        <input  id='inputID' onChange={(e)=>setEmail(e.target.value)}  onInput={(e) => setShowEmail(e.target.value === "" ? false : true)} type="text" placeholder='Email' value={Email} 
                        className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                        />
                        </div>
                        </div>

                        {/* Phone Number  */}
                        <div className='main-container'>
                        <input id='inputID' className='check check-box' checked={Showphone?true:false} type="checkbox" onChange={() => setShowphone(!Showphone)} />
                        <span><div  className={`text-${ThemeColor} text-lg ml-3`} ><svg width="18" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9199 15.3333C23.6266 15.3333 23.3199 15.24 23.0266 15.1733C22.4325 15.0424 21.8488 14.8686 21.2799 14.6533C20.6613 14.4283 19.9814 14.44 19.371 14.6861C18.7605 14.9323 18.2627 15.3955 17.9732 15.9867L17.6799 16.5867C16.3812 15.8642 15.1879 14.967 14.1332 13.92C13.0862 12.8654 12.189 11.672 11.4666 10.3733L12.0266 10C12.6177 9.71055 13.0809 9.2127 13.3271 8.60225C13.5732 7.9918 13.5849 7.31188 13.3599 6.69333C13.1482 6.12323 12.9745 5.53973 12.8399 4.94666C12.7732 4.65333 12.7199 4.34666 12.6799 4.04C12.518 3.10082 12.0261 2.25032 11.2927 1.64165C10.5594 1.03298 9.63282 0.706142 8.67989 0.719997H4.67989C4.10527 0.714602 3.53622 0.833082 3.0115 1.06737C2.48678 1.30166 2.0187 1.64626 1.63913 2.07771C1.25956 2.50915 0.977403 3.01732 0.811874 3.56762C0.646346 4.11791 0.601329 4.69741 0.67989 5.26666C1.39021 10.8525 3.94126 16.0425 7.93009 20.0168C11.9189 23.9912 17.1182 26.5233 22.7066 27.2133H23.2132C24.1964 27.2148 25.1458 26.854 25.8799 26.2C26.3017 25.8227 26.6387 25.3602 26.8685 24.8431C27.0984 24.3259 27.2158 23.7659 27.2132 23.2V19.2C27.1969 18.2738 26.8596 17.3821 26.259 16.6769C25.6584 15.9717 24.8316 15.4968 23.9199 15.3333ZM24.5866 23.3333C24.5863 23.5226 24.5458 23.7097 24.4676 23.8822C24.3894 24.0546 24.2754 24.2084 24.1332 24.3333C23.9842 24.462 23.81 24.5581 23.6218 24.6155C23.4335 24.6729 23.2353 24.6903 23.0399 24.6667C18.0464 24.0264 13.4082 21.742 9.85685 18.1737C6.30549 14.6055 4.0431 9.95645 3.42656 4.96C3.40534 4.76469 3.42393 4.5671 3.48123 4.37919C3.53852 4.19127 3.63332 4.01691 3.75989 3.86666C3.88484 3.72444 4.03864 3.61045 4.21106 3.53229C4.38349 3.45412 4.57058 3.41357 4.75989 3.41333H8.75989C9.06995 3.40643 9.37272 3.50784 9.61608 3.70009C9.85944 3.89235 10.0282 4.16342 10.0932 4.46666C10.1466 4.83111 10.2132 5.19111 10.2932 5.54666C10.4473 6.24952 10.6522 6.94024 10.9066 7.61333L9.03989 8.48C8.88029 8.55323 8.73672 8.65726 8.61743 8.78613C8.49815 8.91499 8.40549 9.06615 8.34479 9.23092C8.28408 9.3957 8.25652 9.57084 8.26369 9.74629C8.27086 9.92175 8.31261 10.0941 8.38656 10.2533C10.3055 14.3637 13.6096 17.6677 17.7199 19.5867C18.0445 19.72 18.4086 19.72 18.7332 19.5867C18.8995 19.5272 19.0523 19.4353 19.1828 19.3162C19.3133 19.1972 19.4188 19.0535 19.4932 18.8933L20.3199 17.0267C21.0092 17.2732 21.7127 17.478 22.4266 17.64C22.7821 17.72 23.1421 17.7867 23.5066 17.84C23.8098 17.9051 24.0809 18.0738 24.2731 18.3171C24.4654 18.5605 24.5668 18.8633 24.5599 19.1733L24.5866 23.3333Z" fill="#070F18"/>
</svg>
</div></span>
                        <div className='editInput flex flex-col'>
                        
                        <input id='inputID' type="text" onChange={(e)=>setphone(e.target.value)} onInput={(e) => setShowphone(e.target.value === "" ? false : true)} placeholder='Phone Number' value={phone} 
                        className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                        />
                        </div>
                        </div>
    
                        </div>

                        <div className='space-y-10'>
                        {/* Country */}
                        <div className='main-container'>
                        <input id='inputID' className='check check-box' checked={ShowCountry?true:false} type="checkbox" onChange={() => setShowCountry(!ShowCountry)} />
                        <span><FontAwesomeIcon icon={faMap} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                        <div className='editInput flex flex-col'>
        
                        <input id='inputID' type="text" onChange={(e)=>setCountry(e.target.value)} onInput={(e) => setShowCountry(e.target.value === "" ? false : true)} placeholder='Country' value={Country=='Country'?'':Country} 
                        className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                        />
                        </div>
                        </div>

                        {/* City  */}
                        <div className='main-container'>
                        <input id='inputID' className='check check-box' checked={ShowCity?true:false} type="checkbox" onChange={() => setShowCity(!ShowCity)} />
                        <span><FontAwesomeIcon icon={faCity} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                        <div className='editInput flex flex-col'>
                        <input id='inputID' type="text" onChange={(e)=>setCity(e.target.value)} onInput={(e) => setShowCity(e.target.value === "" ? false : true)} placeholder='City' value={City=='City'?'':City} 
                        className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                        />
                        </div>
                        </div>
                        {/* Address  */}
                        
                        </div>
                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <input id='inputID' className='check check-box' checked={showAddress?true:false} type="checkbox" onChange={() => setshowAddress(!showAddress)} />
                        <span><FontAwesomeIcon icon={faAddressBook} className={`text-${ThemeColor} text-lg ml-3`} ></FontAwesomeIcon></span>
                        <div className='editInput w-[81%] flex flex-col'>

                        <input id='inputID' type="text" onChange={(e)=>setAddress(e.target.value)} onInput={(e) => setshowAddress(e.target.value === "" ? false : true)} placeholder='Address' value={Address=='Address'?"":Address} 
                        className={`bg-white text-[15px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[15px] `}
                        />
                        </div>
                        </div>
                    </>
                )}
                    
                </div>
                <div className='saveButton'>
                        <button onClick={()=>{
                            setshowLayoutModal(false)
                            setSocialEdit(false)
                            }} className={`discard-text py-2 px-4 rounded-lg  cursor-pointer`}>Cancel</button>
                        <button onClick={Onchange} 
                        disabled={isUpdate}
                        className={'save-text py-2 px-4  text-white bg-primary rounded-lg cursor-pointer' }>
                                   {isUpdate?
                                   <>
                                   <FontAwesomeIcon icon={faSpinner} className={``} ></FontAwesomeIcon>Saving{" "}
                                   </>
                                   :'Save'}
                                </button>
            </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </> : null)
        
}
