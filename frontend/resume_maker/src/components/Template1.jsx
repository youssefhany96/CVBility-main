import React, { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAdd,
  faTrash,
  faArrowUp,
  faArrowDown,
  faGlobe,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faUser,
  faMap,
  faAddressBook,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

import Bulb from "../assets/Bulb";
import Settings from "../assets/Settings";
import MyContents from "../assets/MyContents";
import ProfileImage from "./ProfileImage";
import ComponentListContext from "../context/ComponentListContext";
import UserInfoEdit from "./UserModal/UserInfoEdit";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faQuora,
  faSkype,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TemplateContext from "../context/TemplateContext";

import { useParams } from "react-router-dom";
import Trash from "../assets/Trash";
import Question from "../assets/Question";

export default function Template1() {
  const {
    DummyState,
    setDummyState,
    setLinkButton,
    handleNewField,
    handleMoveComp,
    disabledButtonUp,
    disabledButtonDown,
    handleDeleteField,
    ToolBar,
    setToolBar,
    ShowCurrentTitleMd,
    setShowCurrentTitleMd,
    showSummarySettings,
    setshowSummarySettings,
    TitleSetting,
    setTitleSetting,
    UserData,
    setUserData,
    List1,
    List2,
    setList2,
    setList1,
    USFormat,
    Title,
    Picture,
    Summary,
    SoftSkillsCompArray,
    setSoftSkillsCompArray,
    Instruction,
    setInstruction,
    SettingsModal,
    setSettingsModal,
    setCertificatesCompArray,
    CertificatesCompArray,
    LanProfCompArray,
    ConferenceCompArray,
    setConferenceCompArray,
    OrganisationCompArray,
    setOrganisationCompArray,
    setLanProfCompArray,
    TechnicalCompArray,
    setTechnicalCompArray,
    SkillsCompArray,
    setSkillsCompArray,
    CausesCompArray,
    setCausesCompArray,
    EducationCompArray,
    setEducationCompArray,
    setTeachingCompArray,
    TeachingCompArray,
    setAwardsCompArray,
    AwardsCompArray,
    ThemeColor,
    ReferencesCompArray,
    setReferencesCompArray,
    WorkCompArray,
    setWorkCompArray,
    ProjectsCompArray,
    setProjectsCompArray,
    AchievementsCompArray,
    setAchievementsCompArray,
    InterestsCompArray,
    setPublicationCompArray,
    PublicationCompArray,
    setVolunteerCompArray,
    VolunteerCompArray,
    setInterestsCompArray,
    MovableIndex,
    setMovableIndex,
    SelectedId,
    SelectedText,
    setSelectedText,
    BackgroundImg,
    Font,
    FontSize,
    setSummary,
    setTitle,
    DateSeparator,
    Eng,
    Icon,
    setFont,
  } = useContext(ComponentListContext);
  const { ModifyDoc, ContactInfo, Document, DocData } =
    useContext(TemplateContext);
  const [showInfoEditModal, setshowInfoEditModal] = useState(false);

  const { id } = useParams();
  const reflist1 = useRef([]);
  const reflist2 = useRef([]);
  const title = useRef();
  const pitch = useRef();

  // const HandleSave = () => {
  //   const data = {
  //     docID: id,
  //     docConfig: {
  //       metaData: {
  //         font: Font,
  //         accountExperience: "graduate",
  //         color: ThemeColor,
  //         backgroundColor: 2,
  //         fontSize: FontSize,
  //         format: USFormat,
  //         photoStyle: "round",
  //         lastEdit: 1674137040639,
  //         dateFormat: "dd-month-yyyy",
  //         dateSeparator: DateSeparator,
  //         docPageNoShow: true,
  //         listLabelHide: false,
  //         docStampShow: false,
  //         pageCountFormat: "literal",
  //         showIcons: Icon,
  //         language: Eng,
  //         layout: {
  //           summary: Summary,
  //           photo: Picture,
  //           title: Title,
  //           settings: {
  //             january: "Janua",
  //             february: "February",
  //             march: "March",
  //             april: "April",
  //             may: "May",
  //             june: "June",
  //             july: "July",
  //             august: "August",
  //             september: "September",
  //             october: "October",
  //             november: "November",
  //             december: "December",
  //             pageCounterPage: "Pagee",
  //             pageCounterOf: "of",
  //           },
  //           layoutType: [2],
  //           oneColumn: "0",
  //           userSlot1: ["skills", "lang", "interests"],
  //           userSlot2: ["skills", "lang", "interests"],
  //           predSlot1: ["skills", "lang", "interests"],
  //           predSlot2: ["edu", "work", "org", "cert", "projects", "ach"],
  //         },
  //         documentStatus: "in_work",
  //       },
  //       templateLevel: "junior",
  //       templateID: 1,
  //     },
  //     sectionModelDoc: [
  //       {
  //         sectionID: "languages",
  //         metaData: {
  //           infographics: 0,
  //         },
  //         data: {
  //           info: {
  //             value: "language11",
  //             percentage: 80,
  //           },
  //         },
  //         other: {
  //           label: "Languages",
  //           lblProficiency5: "Native or Bilingual Proficiency",
  //           lblProficiency4: "Full Professional Proficiency",
  //           lblProficiency3: "Professional Working Proficiency",
  //           lblProficiency2: "Limited Working Proficiency",
  //           lblProficiency1: "Elementary Proficiency",
  //         },
  //       },
  //     ],
  //   };
  //   ModifyDoc(data);
  //   Document(id);
  // };

  reflist1.current = [];
  reflist2.current = [];

  const addreflist1 = (e) => {
    if (e && !reflist1.current.includes(e)) {
      reflist1.current.push(e);
    }
  };

  const addreflist2 = (e) => {
    if (e && !reflist2.current.includes(e)) {
      reflist2.current.push(e);
    }
  };

  /* const handleMoveCompUp1 = React.useCallback(
         () => {
             // do nothing on top element
             if (MovableIndex !== 0) {
           console.log(MovableIndex)
               let previousItems = [...WorkCompArray]
                 let temp = previousItems[MovableIndex - 1]
                 previousItems[MovableIndex - 1] = previousItems[MovableIndex]
                 previousItems[MovableIndex] = temp
                 console.log(previousItems)
                 setWorkCompArray(previousItems)
             }
         },
          [setWorkCompArray, WorkCompArray]
      )
 */
  // const handleMoveCompUp1 = (List, setList) => {

  //     let element = WorkCompArray[MovableIndex]
  //     let from = parseInt(MovableIndex)
  //     let to = from + 1
  //     let newArr = [...arraymove(WorkCompArray, from, to)]
  //     console.log(newArr)
  //     setWorkCompArray(newArr)
  //     console.log(WorkCompArray[1])
  // }

  let handleShow = (e) => {
    if (
      document.getElementById("summarymenu") &&
      !document.getElementById("summarymenu").contains(e.target)
    ) {
      setshowSummarySettings(false);
    }
    if (
      document.getElementById("titlemenu") &&
      !document.getElementById("titlemenu").contains(e.target)
    ) {
      setShowCurrentTitleMd(false);
    }
  };
  useEffect(() => {
    let handler = (e) => {
      handleShow(e);
      const toolbar = document.getElementById("toolbar");
      if (title && title.current.contains(e.target)) {
        title.current.classList.remove("placeholder:text-black");
      }
      if (title && !title.current.contains(e.target)) {
        title.current.classList.add("placeholder:text-black");
      }
      reflist1.current.map((ref) => {
        if (ref && !ref.contains(e.target)) {
          if (toolbar && !toolbar.contains(e.target)) {
            const id = ref.id;
            const x = document.getElementsByClassName(id);
            document.getElementById(`${id}menu`).classList.add("hidden");
            if (!x[0].contains(e.target)) {
              x[0].classList.remove("outlinedashed", "outline-primary2");
            }
            if (x[1] && !x[1].contains(e.target)) {
              x[1].classList.remove("outlinedashed", "outline-primary2");
            }
          }
        }
      });
      reflist2.current.map((ref) => {
        if (ref && !ref.contains(e.target)) {
          if (toolbar && !toolbar.contains(e.target)) {
            const id = ref.id;
            const x = document.getElementsByClassName(id);
            document.getElementById(`${id}menu`).classList.add("hidden");
            if (!x[0].contains(e.target)) {
              x[0].classList.remove("outlinedashed", "outline-primary2");
            }
            if (!x[1].contains(e.target)) {
              x[1].classList.remove("outlinedashed", "outline-primary2");
            }
          }
        }
      });
      //
    };
    /**/

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleOnClick = (e, id, index) => {
    const x = document.getElementsByClassName(id);
    console.log("x: ", x);

    if (x[0].contains(e.target) && !!e.clientX) {
      x[0].classList.add("outlinedashed", "outline-primary2");
      if (x[1]) {
        x[1].classList.remove("outlinedashed", "outline-primary2");
      }
      document.getElementById(`${id}menu`).classList.remove("hidden");
      setTitleSetting(true);
    }
    if (x[1] && x[1].contains(e.target)) {
      x[1].classList.add("outlinedashed", "outline-primary2");
      x[0].classList.remove("outlinedashed", "outline-primary2");
      document.getElementById(`${id}menu`).classList.remove("hidden");
      setTitleSetting(false);
    }
    // i.setAttribute("style", `border-image: url('${Border}') 30 round`)
  };
  console.log(List1, ":::::::::::::::::");
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          overflowAnchor: "none",
        }}
        className={`bg-white ${
          USFormat ? "w-[75.75rem]" : "w-[73.875rem]"
        }  my-5 min-h-screen ${Font} rounded-md`}
      >
        <div className="flex justify-between p-7 ">
          {/* Profile Pic */}
          {Picture ? <ProfileImage></ProfileImage> : null}

          {/* Current Title */}
          <div
            className={`flex flex-col space-y-3  ${
              Title || Picture ? null : "text-primary"
            } w-1/3 `}
          >
            <div>
              <span className="flex cursor-pointer">
                <h1
                  onClick={() => {
                    setshowInfoEditModal(true);
                  }}
                  className={`text-${ThemeColor}  text-[32px] font-bold`}
                >
                  {ContactInfo && ContactInfo?.firstName?.value}{" "}
                  {ContactInfo && ContactInfo?.lastName?.value}
                </h1>
              </span>
              <UserInfoEdit
                showLayoutModal={showInfoEditModal}
                setshowLayoutModal={setshowInfoEditModal}
              ></UserInfoEdit>
            </div>

            <div className="flex gap-5 relative">
              {Title && (
                <>
                  {" "}
                  <div
                    className={` w-12 h-[7rem] ${
                      ShowCurrentTitleMd ? "" : "hidden"
                    }  bg-[#425061] rounded-lg settings absolute left-[-65px] top-[-38px] `}
                    id={`titlemenu`}
                  >
                    <div className={`flex flex-col space-y-4 relative`}>
                      <span className="mt-1 rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2 hover:border-primary2">
                        ?
                      </span>
                      <span className=" mx-auto  cursor-pointer hover:text-primary2">
                        <Bulb></Bulb>
                      </span>
                      <span
                        className="mx-auto mt-2 cursor-pointer hover:text-primary2 trashicon"
                        onClick={() => setTitle(false)}
                      >
                        <span className="text-white ">
                          <Trash></Trash>
                        </span>
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    onFocus={(e) => {
                      setShowCurrentTitleMd(true);
                      e.target.classList.add("input-underline");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("input-underline");
                    }}
                    placeholder="Current title"
                    className={`text-${ThemeColor} text-black ${
                      FontSize == "md"
                        ? "text-[24px]"
                        : FontSize == "sm"
                        ? "text-[22px]"
                        : "text-[26px]"
                    } font-[500] outline-none placeholder:${
                      FontSize == "md"
                        ? "text-[24px]"
                        : FontSize == "sm"
                        ? "text-[22px]"
                        : "text-[26px]"
                    } placeholder:font-[500] placeholder:text-black`}
                    ref={title}
                  />
                </>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col space-y-4 cursor-pointer "
            onClick={() => setshowInfoEditModal(true)}
          >
            {/* Email */}
            {ContactInfo?.email?.value && ContactInfo?.email?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`text-${ThemeColor} ${
                      FontSize == "md"
                        ? "text-[18px]"
                        : FontSize == "sm"
                        ? "text-[16px]"
                        : "text-[20px]"
                    }`}
                  ></FontAwesomeIcon>
                </span>
                <h1
                  className={`text-${ThemeColor} ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.email?.value}
                </h1>
              </div>
            ) : null}
            {/* Phone */}
            {ContactInfo?.phone?.value && ContactInfo?.phone?.visible ? (
              <div className="flex space-x-3 ">
                <svg
                  width="18"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9199 15.3333C23.6266 15.3333 23.3199 15.24 23.0266 15.1733C22.4325 15.0424 21.8488 14.8686 21.2799 14.6533C20.6613 14.4283 19.9814 14.44 19.371 14.6861C18.7605 14.9323 18.2627 15.3955 17.9732 15.9867L17.6799 16.5867C16.3812 15.8642 15.1879 14.967 14.1332 13.92C13.0862 12.8654 12.189 11.672 11.4666 10.3733L12.0266 10C12.6177 9.71055 13.0809 9.2127 13.3271 8.60225C13.5732 7.9918 13.5849 7.31188 13.3599 6.69333C13.1482 6.12323 12.9745 5.53973 12.8399 4.94666C12.7732 4.65333 12.7199 4.34666 12.6799 4.04C12.518 3.10082 12.0261 2.25032 11.2927 1.64165C10.5594 1.03298 9.63282 0.706142 8.67989 0.719997H4.67989C4.10527 0.714602 3.53622 0.833082 3.0115 1.06737C2.48678 1.30166 2.0187 1.64626 1.63913 2.07771C1.25956 2.50915 0.977403 3.01732 0.811874 3.56762C0.646346 4.11791 0.601329 4.69741 0.67989 5.26666C1.39021 10.8525 3.94126 16.0425 7.93009 20.0168C11.9189 23.9912 17.1182 26.5233 22.7066 27.2133H23.2132C24.1964 27.2148 25.1458 26.854 25.8799 26.2C26.3017 25.8227 26.6387 25.3602 26.8685 24.8431C27.0984 24.3259 27.2158 23.7659 27.2132 23.2V19.2C27.1969 18.2738 26.8596 17.3821 26.259 16.6769C25.6584 15.9717 24.8316 15.4968 23.9199 15.3333ZM24.5866 23.3333C24.5863 23.5226 24.5458 23.7097 24.4676 23.8822C24.3894 24.0546 24.2754 24.2084 24.1332 24.3333C23.9842 24.462 23.81 24.5581 23.6218 24.6155C23.4335 24.6729 23.2353 24.6903 23.0399 24.6667C18.0464 24.0264 13.4082 21.742 9.85685 18.1737C6.30549 14.6055 4.0431 9.95645 3.42656 4.96C3.40534 4.76469 3.42393 4.5671 3.48123 4.37919C3.53852 4.19127 3.63332 4.01691 3.75989 3.86666C3.88484 3.72444 4.03864 3.61045 4.21106 3.53229C4.38349 3.45412 4.57058 3.41357 4.75989 3.41333H8.75989C9.06995 3.40643 9.37272 3.50784 9.61608 3.70009C9.85944 3.89235 10.0282 4.16342 10.0932 4.46666C10.1466 4.83111 10.2132 5.19111 10.2932 5.54666C10.4473 6.24952 10.6522 6.94024 10.9066 7.61333L9.03989 8.48C8.88029 8.55323 8.73672 8.65726 8.61743 8.78613C8.49815 8.91499 8.40549 9.06615 8.34479 9.23092C8.28408 9.3957 8.25652 9.57084 8.26369 9.74629C8.27086 9.92175 8.31261 10.0941 8.38656 10.2533C10.3055 14.3637 13.6096 17.6677 17.7199 19.5867C18.0445 19.72 18.4086 19.72 18.7332 19.5867C18.8995 19.5272 19.0523 19.4353 19.1828 19.3162C19.3133 19.1972 19.4188 19.0535 19.4932 18.8933L20.3199 17.0267C21.0092 17.2732 21.7127 17.478 22.4266 17.64C22.7821 17.72 23.1421 17.7867 23.5066 17.84C23.8098 17.9051 24.0809 18.0738 24.2731 18.3171C24.4654 18.5605 24.5668 18.8633 24.5599 19.1733L24.5866 23.3333Z"
                    fill="#070F18"
                  />
                </svg>

                <h1
                  className={`text-${ThemeColor} ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.phone?.value}
                </h1>
              </div>
            ) : null}
            {/* Phone */}
            {(ContactInfo?.birthday?.day ||
              ContactInfo?.birthday?.month ||
              ContactInfo?.birthday?.year) &&
            ContactInfo?.birthday?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className={`text-${ThemeColor} ${
                      FontSize == "md"
                        ? "text-[18px]"
                        : FontSize == "sm"
                        ? "text-[16px]"
                        : "text-[20px]"
                    }`}
                  ></FontAwesomeIcon>
                </span>
                <h1
                  className={`text-${ThemeColor} ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.birthday.day}{" "}
                  {ContactInfo?.birthday.month}, {ContactInfo?.birthday.year}
                </h1>
              </div>
            ) : null}
            {/* Country */}
            {ContactInfo?.country?.value && ContactInfo?.country?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faMap}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && ContactInfo?.country?.value}
                </h1>
              </div>
            ) : null}
            {/* City */}
            {ContactInfo?.city?.value && ContactInfo?.city?.visible ? (
              <div className="flex space-x-3">
                <span>
                  <FontAwesomeIcon
                    icon={faCity}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && ContactInfo?.city?.value}
                </h1>
              </div>
            ) : null}
            {/* Address */}
            {ContactInfo?.address?.value && ContactInfo?.address?.visible ? (
              <div className="flex  space-x-3" style={{ width: 300 }}>
                <span>
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor} `}>
                  {ContactInfo && ContactInfo?.address?.value}
                </h1>
              </div>
            ) : null}
            {/* Website */}
            {ContactInfo?.website?.value && ContactInfo?.website?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && ContactInfo?.website?.value}
                </h1>
              </div>
            ) : null}
            {/* LinkedIn */}
            {ContactInfo?.linkedin?.value && ContactInfo?.linkedin?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo &&
                    `linkedin.com/in/${ContactInfo?.linkedin?.value}`}
                </h1>
              </div>
            ) : null}
            {/* Twitter */}
            {ContactInfo?.twitter?.value && ContactInfo?.twitter?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && `@${ContactInfo?.twitter?.value}`}
                </h1>
              </div>
            ) : null}
            {/* Quora */}
            {ContactInfo?.quora?.value && ContactInfo?.quora?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faQuora}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo &&
                    `quora.com/profile/${ContactInfo?.quora?.value}`}
                </h1>
              </div>
            ) : null}
            {/* Skype */}
            {ContactInfo?.skype?.value && ContactInfo?.skype?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faSkype}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && ContactInfo?.skype?.value}
                </h1>
              </div>
            ) : null}
            {/* Facebook */}
            {ContactInfo?.facebook?.value && ContactInfo?.facebook?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo &&
                    `facebook.com/${ContactInfo?.facebook?.value}`}
                </h1>
              </div>
            ) : null}
            {/* Github */}
            {ContactInfo?.github?.value && ContactInfo?.github?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && `github.com/${ContactInfo?.github?.value}`}
                </h1>
              </div>
            ) : null}
            {/* Medium */}
            {ContactInfo?.medium?.value && ContactInfo?.medium?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faMedium}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && `medium.com/@${ContactInfo?.medium?.value}`}
                </h1>
              </div>
            ) : null}
            {/* StackOverFlow */}
            {ContactInfo?.stackoverflow?.value &&
            ContactInfo?.stackoverflow?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo && ContactInfo?.stackoverflow?.value}
                </h1>
              </div>
            ) : null}
            {/* Instagram */}
            {ContactInfo?.instagram?.value &&
            ContactInfo?.instagram?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={`text-${ThemeColor} text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-${ThemeColor}`}>
                  {ContactInfo &&
                    `instagram.com/${ContactInfo?.instagram?.value}`}
                </h1>
              </div>
            ) : null}
          </div>
        </div>

        {/* Summary */}
        {Summary && (
          <div className=" first flex space-x-2 gap-5  mt-5 mx-7 items-center settings relative">
            <div
              className={` w-12 h-[7rem] ${
                showSummarySettings ? "" : "hidden"
              }  bg-[#425061] rounded-lg absolute left-[-60px] top-[-38px] `}
              id={`summarymenu`}
            >
              <div className={`flex flex-col space-y-4 relative`}>
                <span className="mt-1 rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:border-primary2 hover:text-primary2">
                  ?
                </span>
                <span className=" mx-auto  cursor-pointer hover:text-primary2">
                  <Bulb></Bulb>
                </span>
                <span
                  className="mx-auto mt-2 cursor-pointer hover:text-primary2 trashicon"
                  onClick={() => setSummary(false)}
                >
                  <Trash></Trash>
                </span>
              </div>
            </div>
            <p
              contentEditable
              onClick={() => {
                setToolBar(true);
                setLinkButton(true);
              }}
              onFocus={(e) => {
                setToolBar(true);
                setLinkButton(true);
                setshowSummarySettings(true);
                e.target.classList.add("input-underline");
              }}
              data-placeholder="Short  and engaging you pitch about yourself"
              ref={pitch}
              type="text"
              maxLength="300"
              onBlur={(e) => {
                setToolBar(false);
                setLinkButton(false);
                e.target.classList.remove("input-underline");
              }}
              className={`editable text-black ${
                FontSize == "md"
                  ? "text-[18px]"
                  : FontSize == "sm"
                  ? "text-[16px]"
                  : "text-[20px]"
              }  overflow-hidden resize-none border border-white w-[50rem] focus:outline-none placeholder:text-black placeholder:${
                FontSize == "md"
                  ? "text-[18px]"
                  : FontSize == "sm"
                  ? "text-[16px]"
                  : "text-[20px]"
              } `}
            ></p>
          </div>
        )}
        <div className="w-full h-[50px]"></div>

        {/* Attributes */}

        <div className="flex w-full space-x-20 mx-3 pb-40">
          {/* Column-1 */}
          <div className="flex flex-col w-[45%] space-y-7">
            {/*<button onClick={()=>HandleSave()}>save</button>*/}
            {List1.map((item, index) => {
              return (
                <div
                  className={`flex space-x-2  ${
                    item.display === "show" ? "" : "hidden"
                  }`}
                  id={item.id}
                  ref={addreflist1}
                  key={item.id}
                >
                  <div className="relative">
                    <div
                      className={`hidden w-12 ${
                        item.settings ? "h-[auto] " : "h-[auto] "
                      } bg-[#425061] w-[50px] rounded-lg absolute left-[-60px] settings`}
                      id={`${item.id}menu`}
                      style={{
                        marginTop: event.target ? event.target.offsetTop : "",
                      }}
                    >
                      <div className={`flex flex-col relative`}>
                        <span
                          className="bg-primary rounded-full w-8 h-8 mx-auto flex justify-center items-center my-2 cursor-pointer hover:text-primary2"
                          onClick={() => handleNewField(item.id, SelectedId)}
                        >
                          <FontAwesomeIcon
                            className="text-white p-[0.5rem]"
                            icon={faAdd}
                          ></FontAwesomeIcon>
                        </span>

                        {item.settings && (
                          <span
                            className=" mx-auto  mb-1  cursor-pointer hover:text-primary2 "
                            onClick={() => setSettingsModal(true)}
                          >
                            <Settings></Settings>
                          </span>
                        )}
                        {TitleSetting && (
                          <>
                            <span
                              className={`mx-auto pb-2 mt-1 mb-3 h-6 w-6 border  border-dashed rounded-full  ${
                                disabledButtonUp(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() => {
                                handleMoveComp(SelectedId, item.id, "up");
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                            <span
                              className={`mx-auto h-6 w-6 border pb-2 mb-2 border-dashed rounded-full  ${
                                disabledButtonDown(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() =>
                                handleMoveComp(SelectedId, item.id, "down")
                              }
                            >
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <MyContents></MyContents>
                        </span>
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <Question></Question>
                        </span>
                        <span
                          className=" mx-auto pb-1  cursor-pointer my-1 hover:text-primary2"
                          onClick={() => setInstruction(true)}
                        >
                          <Bulb></Bulb>
                        </span>
                        {item.state === "deletable" ? (
                          <>
                            <span
                              className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                              onClick={() =>
                                handleDeleteField(
                                  item.id,
                                  List1,
                                  setList1,
                                  index,
                                  SelectedId
                                )
                              }
                            >
                              <Trash></Trash>
                            </span>
                          </>
                        ) : (
                          TitleSetting && (
                            <>
                              <span
                                className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                                onClick={() =>
                                  handleDeleteField(
                                    item.id,
                                    List1,
                                    setList1,
                                    index,
                                    SelectedId
                                  )
                                }
                              >
                                <Trash></Trash>
                              </span>
                            </>
                          )
                        )}
                        {/* InstructionModal */}
                        {Instruction ? (
                          <div id={`${item.id}InsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[600px] h-[550px] ${
                                item.settings ? "-top-7" : "-top-10"
                              } space-y-5 left-[4.2rem] bubbleLeft  after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.instructionModal &&
                                item.instructionModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}

                        {/* SettingsModal */}
                        {SettingsModal ? (
                          <div id={`${item.id}SettingsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[450px] ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "h-[300px]"
                                  : item.id === "language"
                                  ? "h-[300px]"
                                  : "h-[150px]"
                              } -top-1 space-y-5 left-[4.2rem] bubbleLeft ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "after:top-[28%]"
                                  : item.id === "language"
                                  ? "after:top-[26%]"
                                  : "after:top-[50%]"
                              }  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.settingsModal && item.settingsModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col space-y-3 w-full h-full ${item.id}`}
                    onClick={(e) => handleOnClick(e, item.id)}
                  >
                    {item.content.map((content) => {
                      return content;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column-2 */}
          <div className="flex flex-col space-y-7 w-[45%]">
            {List2.map((item, index) => {
              return (
                <div
                  className={`flex space-x-2 ${
                    item.display === "show" ? "" : "hidden"
                  }`}
                  id={item.id}
                  ref={addreflist2}
                  key={index}
                >
                  <div
                    className={`flex flex-col space-y-3 w-full h-full ${item.id}`}
                    onClick={(e) => handleOnClick(e, item.id, index)}
                  >
                    {item.content.map((content) => {
                      return content;
                    })}
                  </div>
                  <div className="relative">
                    <div
                      className={`hidden w-12 ${
                        item.settings ? "h-[auto] " : "h-[auto] "
                      } bg-[#425061] w-[50px] rounded-lg absolute z-10 right-[-70px] settings`}
                      id={`${item.id}menu`}
                    >
                      <div className={`flex flex-col relative`}>
                        <span
                          className="bg-primary rounded-full w-8 h-8 mx-auto flex justify-center items-center   my-2 cursor-pointer hover:text-primary2"
                          onClick={() => handleNewField(item.id, SelectedId)}
                        >
                          <FontAwesomeIcon
                            className="text-white p-[0.5rem]"
                            icon={faAdd}
                          ></FontAwesomeIcon>
                        </span>

                        {item.settings && (
                          <span
                            className=" mx-auto  mb-1  cursor-pointer hover:text-primary2 "
                            onClick={() => setSettingsModal(true)}
                          >
                            <Settings></Settings>
                          </span>
                        )}
                        {TitleSetting && (
                          <>
                            <span
                              className={`mx-auto pb-2 mt-1 mb-3 h-6 w-6 border  border-dashed rounded-full  ${
                                disabledButtonUp(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() => {
                                handleMoveComp(SelectedId, item.id, "up");
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                            <span
                              className={`mx-auto h-6 w-6 border pb-2 mb-2 border-dashed rounded-full  ${
                                disabledButtonDown(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() =>
                                handleMoveComp(SelectedId, item.id, "down")
                              }
                            >
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <MyContents></MyContents>
                        </span>
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <Question></Question>
                        </span>
                        <span
                          className=" mx-auto pb-1  cursor-pointer my-1 hover:text-primary2"
                          onClick={() => setInstruction(true)}
                        >
                          <Bulb></Bulb>
                        </span>
                        {item.state === "deletable" ? (
                          <>
                            <span
                              className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                              onClick={() =>
                                handleDeleteField(
                                  item.id,
                                  List2,
                                  setList2,
                                  index,
                                  SelectedId
                                )
                              }
                            >
                              <Trash></Trash>
                            </span>
                          </>
                        ) : (
                          TitleSetting && (
                            <>
                              <span
                                className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                                onClick={() =>
                                  handleDeleteField(
                                    item.id,
                                    List2,
                                    setList2,
                                    index,
                                    SelectedId
                                  )
                                }
                              >
                                <Trash></Trash>
                              </span>
                            </>
                          )
                        )}
                        {/* InstructionModal */}
                        {Instruction ? (
                          <div id={`${item.id}InsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[600px] h-[550px] space-y-5  ${
                                item.settings ? "-top-7" : "-top-10"
                              } -left-[39rem] bubbleRight   after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.instructionModal &&
                                item.instructionModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}

                        {/* Settings Modal */}
                        {SettingsModal ? (
                          <div id={`${item.id}SettingsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[500px] ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "h-[300px]"
                                  : item.id === "language"
                                  ? "h-[300px]"
                                  : "h-[150px]"
                              } -top-1 space-y-5 left-[-33rem] bubbleRight ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "after:top-[28%]"
                                  : item.id === "language"
                                  ? "after:top-[26%]"
                                  : "after:top-[50%]"
                              }  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.settingsModal && item.settingsModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="none"></div>
      </div>
    </>
  );
}
