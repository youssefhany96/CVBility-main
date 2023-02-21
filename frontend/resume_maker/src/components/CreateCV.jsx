import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import BrandLogo from "../assets/BrandLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faUndo,
  faRedo,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faSun,
  faMoon,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Theme from "../assets/Theme";
import Font from "../assets/Font";
import Menu from "../assets/Menu";
import Layout from "../assets/Layout";
import Settings from "../assets/Settings";
import Menu2 from "../assets/Menu2";
import Attachment from "../assets/Attachment";
import Menu3 from "../assets/Menu3";
import BigLine from "../assets/BigLine";
import SmallLine from "../assets/SmallLine";
import Optimizer from "../assets/Optimizer";
import Template1 from "./Template1";
import Template2 from "./Template2";
import FontsModal from "./FontsModal";
import LayoutModal from "./LayoutModal";
import ThemeModal from "./ThemeModal";
import GeneralSettingsModal from "./GeneralSettingsModal";
import EngModal from "./EngModal";
import ComponentListContext from "../context/ComponentListContext";
import MyContents from "../assets/MyContents";
import Switch from "../assets/Switch";
import TemplateContext from "../context/TemplateContext";
import Loading from "./Loading";
import Download from "../assets/Download";
import Globe from "../assets/Globe";
import SwitchTemplateModal from "./SwitchTemplateModal";

export default function CreateCV() {
  const { id } = useParams();
  const [darkMode, setdarkMode] = useState(false);
  const [showFontModal, setshowFontModal] = useState(false);
  const [showLayoutModal, setshowLayoutModal] = useState(false);
  const [showThemeModal, setshowThemeModal] = useState(false);
  const [switchTemplateModal, setShowSwitchTemplateModal] = useState(false);
  const [showGeneralSettingsModal, setshowGeneralSettingsModal] =
    useState(false);
  const [showEngModal, setshowEngModal] = useState(false);
  const [href, setHref] = useState("");

  const {
    CurrentEntity,
    setCurrentEntity,
    setDummyState,
    DummyState,
    Icon,
    setIcon,
    ToolBar,
    setToolBar,
    LinkButton,
    setLinkButton,
  } = useContext(ComponentListContext);
  const {
    isLoading,
    Document,
    DocData,
    setDocData,
    ChangeDocName,
    setShowCurrentTitleMd,
  } = useContext(TemplateContext);
  const selectionRangeRef = useRef(null);
  const [DocData2, setDocData2] = useState(DocData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [Popup, setPopup] = useState(false);

  const handleLinkClick = () => {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      if (LinkButton) {
        setSelectedRange(window.getSelection().getRangeAt(0));
        setShowPopup(true);
        setPopup(false);
      }
    } else {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 4000);
    }
  };

  const handleSave = (linkurl) => {
    setShowPopup(false);

    if (selectedRange) {
      const link = document.createElement("a");
      link.href = linkurl;
      link.innerHTML = selectedRange.toString();
      selectedRange.deleteContents();
      selectedRange.insertNode(link);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(selectedRange);
      link.focus();
    }
    setHref("");
  };
  const handleUnlink = () => {
    setShowPopup(false);
    if (selectedRange) {
      document.execCommand("unlink", false, null);
    }
  };

  const handleChangeName = (id, name) => {
    ChangeDocName({
      docID: id,
      docName: name,
    });
  };
  useEffect(() => {
    Document(id);
  }, [id]);
  useEffect(() => {
    setDocData2(DocData);
  }, [DocData]);
  useEffect(() => {
    const handleSelection = (e) => {
      const selection = window.getSelection();
      let selectedNode = selection.anchorNode;

      while (selectedNode) {
        if (selectedNode.nodeName === "A") {
          let range = selection.getRangeAt(0);
          let selectedHref = range.toString().trim();
          if (selectedNode.textContent.trim() === selectedHref) {
            setHref(selectedNode.getAttribute("href"));
            break;
          }
        }
        selectedNode = selectedNode.parentNode;
      }
    };

    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);
  useEffect(() => {
    const handleMouseDown = (e) => {
      const toolbar = document.getElementById("toolbar");
      const linkbtn = document.getElementById("linkbtn");
      if (
        (toolbar && !toolbar.contains(e.target)) ||
        (linkbtn && !linkbtn.contains(e.target))
      ) {
        setCurrentEntity();
      }
      if (linkbtn && !linkbtn.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mouseup", handleMouseDown);
    return () => {
      document.addEventListener("mouseup", handleMouseDown);
    };
  }, []);

  const handleClick = () => {
    var ae = document.activeElement;
    setTimeout(function () {
      ae.focus();
    }, 1);
  };

  const handleBoldClick = (e) => {
    if (ToolBar) {
      document.execCommand("bold", false, null);
    }
  };

  const handleItalicClick = () => {
    if (ToolBar) {
      document.execCommand("italic", false, null);
    }
  };

  const handleUnderlineClick = () => {
    if (ToolBar) {
      document.execCommand("underline", false, null);
    }
  };

  const handleCenterAlignClick = () => {
    //const selectedText = window.getSelection().toString();
    /* if (selectedText) {
         const parentElement = window.getSelection().anchorNode.parentElement;
         if(!parentElement.classList.contains('notEditable')){

       document.execCommand("justifyCenter", false, null);}
     }*/
  };

  const handleRightAlignClick = () => {
    /*
   const selectedText = window.getSelection().toString();
    if (selectedText) {
        const parentElement = window.getSelection().anchorNode.parentElement;
        if(!parentElement.classList.contains('notEditable')){

      document.execCommand("justifyLeft", false, null);}}*/
  };
  const triggerUndo = () => {
    document.execCommand("undo");
  };

  const triggerRedo = () => {
    document.execCommand("redo");
  };

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          {Popup ? (
            <div className="fixed inset-0">
              <div class="absolute gap-4 flex flex-col justify-center shadow-lg rounded-lg w-64 h-40 bg-white top-60 p-5 right-5 z-50 transform transition-all duration-500 ease-in-out">
                <h1 class="text-xl font-medium text-primary text-center flex gap-4 justify-center items-center mb-2">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                  ></FontAwesomeIcon>
                  Important
                </h1>
                <p class="text-sm ">
                  Please select some text to add the hyperlink.
                </p>
              </div>
            </div>
          ) : null}

          <div
            className={`${
              darkMode ? "bg-[#313B47]" : "bg-[#EEEEEE] "
            } h-[100%]  sm:w-[70rem] md:w-[70rem] text-editor lg:w-full`}
          >
            <div className="fixed top-0 left-0 right-0 z-50">
              <nav className="p-6">
                <div className="mr-5 cursor-pointer absolute ">
                  <Link to="/">
                    <BrandLogo></BrandLogo>
                  </Link>
                </div>

                <div
                  className={`${
                    darkMode
                      ? "bg-[#425061]"
                      : "bg-white border-2 shadow-lg  border-slate-700  "
                  } rounded-lg w-[47.5rem] h-16 settings top-[20px] ml-[-24rem] mr-[-24rem] left-1/2 absolute z-50  `}
                >
                  <div className="items-center flex space-x-6 mx-auto p-2 px-5">
                    {/* Font */}
                    <div className="flex flex-col  relative buttonsvg ">
                      <span
                        className="flex cursor-pointer toolFill "
                        onClick={() => setshowFontModal(true)}
                      >
                        <Font></Font>
                        <button className=" text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2">
                          {" "}
                          Font
                        </button>
                      </span>
                      <FontsModal
                        showFontModal={showFontModal}
                        setshowFontModal={setshowFontModal}
                      ></FontsModal>
                    </div>

                    {/* Layout */}
                    <div className="relative">
                      <span
                        className="flex cursor-pointer toolFill"
                        onClick={() => setshowLayoutModal(true)}
                      >
                        <Layout></Layout>
                        <button className=" text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 ">
                          {" "}
                          Layout
                        </button>
                      </span>
                      <LayoutModal
                        showLayoutModal={showLayoutModal}
                        setshowLayoutModal={setshowLayoutModal}
                      ></LayoutModal>
                    </div>

                    <div className="relative">
                      <span
                        className="flex cursor-pointer toolFill "
                        onClick={() => setshowThemeModal(true)}
                      >
                        <Theme></Theme>
                        <button className=" text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 ">
                          {" "}
                          Theme
                        </button>
                      </span>
                      <ThemeModal
                        showThemeModal={showThemeModal}
                        setshowThemeModal={setshowThemeModal}
                      ></ThemeModal>
                    </div>

                    <div className="relative">
                      <span
                        className="flex cursor-pointer svg-grey toolFill "
                        onClick={() => setshowGeneralSettingsModal(true)}
                      >
                        <Settings></Settings>
                        <button className=" text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 ">
                          {" "}
                          Settings
                        </button>
                        <GeneralSettingsModal
                          showGeneralSettingsModal={showGeneralSettingsModal}
                          setshowGeneralSettingsModal={
                            setshowGeneralSettingsModal
                          }
                        ></GeneralSettingsModal>
                      </span>
                    </div>

                    <div className="relative">
                      <span
                        className="flex cursor-pointer   toolFillGlobe "
                        onClick={() => setshowEngModal(true)}
                      >
                        <Globe></Globe>
                        <button className=" text-[#A8B0B9] rounded-md p-2 text-md  hover:text-primary2">
                          {" "}
                          Eng
                        </button>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="text-[#A8B0B9] mt-3 toolFill  "
                        ></FontAwesomeIcon>
                      </span>
                      <EngModal
                        showEngModal={showEngModal}
                        setshowEngModal={setshowEngModal}
                      ></EngModal>
                    </div>

                    <button className=" bg-primary text-white rounded-lg py-3 px-8 items-center flex gap-3  text-sm">
                      <span>
                        <Download></Download>
                      </span>{" "}
                      Download
                    </button>
                  </div>
                </div>
                <div className="absolute flex items-center gap-8 right-2 mr-6">
                  <div>
                    <Link to="/mydocument/resume">
                      <button
                        className={`  text-[#A8B0B9] border border-[#A8B0B9] py-2 px-2 rounded-md cursor-pointer hover:border-black hover:text-black`}
                      >
                        My Document
                      </button>
                    </Link>
                  </div>

                  <div className="flex-col cursor-pointer">
                    <Menu></Menu>
                  </div>
                </div>
              </nav>

              <div
                id="toolbar"
                onMouseDown={handleClick}
                className={`  h-16 w-[38rem] ${
                  ToolBar ? "activeToolbar" : "null"
                } shadow-lg  settings flex justify-between px-4 top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute lg:max-w-5xl md:items-center md:flex md:px-8 ${
                  darkMode
                    ? "bg-[#425061]"
                    : "bg-[white] border-2 border-slate-700 "
                } rounded-lg`}
              >
                <button
                  onMouseDown={handleClick}
                  onClick={handleRightAlignClick}
                >
                  <span className="cursor-pointer">
                    <Menu2></Menu2>
                  </span>
                </button>
                <button
                  onMouseDown={handleClick}
                  onClick={handleCenterAlignClick}
                >
                  <span className="cursor-pointer">
                    <Menu3></Menu3>
                  </span>
                </button>
                <button onMouseDown={handleClick} onClick={handleBoldClick}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faBold}
                    className=" text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2"
                  ></FontAwesomeIcon>{" "}
                </button>
                <button onMouseDown={handleClick} onClick={handleItalicClick}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faItalic}
                    className=" text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2"
                  ></FontAwesomeIcon>
                </button>
                <button
                  onMouseDown={handleClick}
                  onClick={handleUnderlineClick}
                >
                  <FontAwesomeIcon
                    icon={faUnderline}
                    className=" text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2"
                  ></FontAwesomeIcon>
                </button>
                <span
                  className={`cursor-pointer relative ${
                    LinkButton ? "activeToolbar" : ""
                  } `}
                >
                  <button onMouseDown={handleClick} onClick={handleLinkClick}>
                    <Attachment></Attachment>
                  </button>
                </span>
                <FontAwesomeIcon
                  onClick={triggerUndo}
                  icon={faUndo}
                  className="text-[#A8B0B9] IndoRedo text-lg cursor-pointer hover:text-primary2"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  onClick={triggerRedo}
                  icon={faRedo}
                  className="text-[#A8B0B9] IndoRedo text-lg cursor-pointer hover:text-primary2"
                ></FontAwesomeIcon>
                <button className=" bg-primary text-white rounded-lg py-[14px] font-[16px] px-8  text-sm">
                  Generate Text
                </button>
              </div>
              {showPopup && (
                <div
                  id="linkbtn"
                  className="absolute inset-x-0 shadow-xl top-[180px] mx-auto -mt-1 rounded-lg  border border-[#A8B0B9] items-center  w-[365px] h-[160px]  bg-white flex flex-col p-5  after:top-[26%] shadow-lg  inset-0 z-50 "
                >
                  <div className="editInput ml-0 flex flex-col">
                    <p className="InputTitle">link</p>
                    <input
                      value={href}
                      onChange={(e) => setHref(e.target.value)}
                      type="text"
                      id="inputID"
                      placeholder="link"
                      className={`bg-white text-[15px]  focus:outline-none placeholder: placeholder:text-[15px] `}
                    />
                  </div>
                  <div className="space-y-6 space-x-5">
                    <button
                      onClick={() => handleUnlink()}
                      className=" bg-[#A8B0B9] text-black rounded-lg py-3 px-12 font-semibold text-sm"
                    >
                      Remove
                    </button>
                    <button
                      className=" bg-primary text-white rounded-lg py-3 px-12 font-semibold text-sm"
                      onClick={() => handleSave(href)}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center  lg:space-x-[174px] sm:space-x-20 md:space-x-24 pt-48 ">
              <input
                type="text"
                defaultValue={
                  DocData2?.content?.docName
                    ? DocData2.content.docName
                    : "My Resume"
                }
                onFocus={(e) => {
                  e.target.classList.add("input-underline");
                }}
                onBlur={(e) => {
                  e.target.classList.remove("input-underline");
                  DocData2?.content?.docName != e.target.value
                    ? handleChangeName(DocData2.docID, e.target.value)
                    : null;
                }}
                className={`${
                  darkMode ? "text-[white]" : "text-black"
                } text-xl font-bold relative  outline-none`}
              />
              <div
                className={`${
                  darkMode ? "bg-[#425061]" : "bg-[white]"
                } text-white w-64 h-12 rounded-lg  relative lg:left-20 sm:left-10 md:left-10 flex space-x-2 justify-center py-3 `}
              >
                <span>
                  <FontAwesomeIcon
                    className="text-black cursor-pointer mx-2"
                    icon={faAngleLeft}
                  ></FontAwesomeIcon>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <BigLine></BigLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>
                <span className="cursor-pointer">
                  <SmallLine></SmallLine>
                </span>

                <span>
                  <FontAwesomeIcon
                    className="text-black cursor-pointer mx-2"
                    icon={faAngleRight}
                  ></FontAwesomeIcon>
                </span>
              </div>

              <div
                className={`${
                  darkMode ? "bg-[#425061]" : "bg-[white]"
                } text-white w-80 flex h-12 rounded-lg`}
              >
                <div className="flex">
                  <span className="relative left-5">
                    <Optimizer></Optimizer>
                  </span>
                  <h1
                    className={`${
                      darkMode ? "text-[white]" : "text-primary2"
                    } ml-8 mt-2 text-[16px]`}
                  >
                    Optimizer
                  </h1>
                  <label className="inline-flex relative items-center mb-5 cursor-pointer ml-3 mt-4">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="mx-4 pt-1">
                  <BigLine></BigLine>
                </div>

                <div className="flex">
                  <h1
                    className={`${
                      darkMode ? "text-[white]" : "text-primary2"
                    }  mt-2 text-[16px]`}
                  >
                    Icons
                  </h1>
                  <label className="inline-flex relative items-center mb-5 cursor-pointer ml-3 mt-4">
                    <input
                      type="checkbox"
                      value=""
                      checked={Icon}
                      className="sr-only peer"
                      onClick={() => (Icon ? setIcon(false) : setIcon(true))}
                    />
                    <div className="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center relative">
              {DocData2?.templateID == "1" ? (
                <Template1></Template1>
              ) : (
                <Template2></Template2>
              )}

              <div className="pt-4">
                <div className="flex flex-col space-y-2 z-0 ml-4 fixed top-[45%]  ">
                  <button
                    className={`${
                      darkMode ? "bg-[#425061]" : "bg-primary"
                    } py-3 px-5 rounded-lg`}
                    onClick={() => setdarkMode(false)}
                  >
                    <FontAwesomeIcon
                      className={`${
                        darkMode ? "text-[#A8B0B9]" : "text-white"
                      }`}
                      icon={faSun}
                    ></FontAwesomeIcon>
                  </button>
                  <button
                    className={`${
                      !darkMode ? "bg-white" : "bg-primary"
                    } py-3 px-5 rounded-lg`}
                    onClick={() => setdarkMode(true)}
                  >
                    <FontAwesomeIcon
                      className={`${
                        !darkMode ? "text-[#A8B0B9]" : "text-white"
                      }`}
                      icon={faMoon}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
              <div className="fixed  ">
                <div className=" fixed bg-primary rounded-lg w-[200px] h-16 settings  ml-[-55rem]  absolute z-40  shadow-lg ">
                  <div className="flex w-full h-full justify-center space-x-5  items-center text-white font-[16px]">
                    <div
                      className="flex items-center cursor-pointer space-x-3"
                      onClick={() => {
                        setShowSwitchTemplateModal(true);
                      }}
                    >
                      <Switch></Switch>
                      {/* <p>Switch Templates</p> */}
                    </div>
                    <br />
                    {/* <div>|</div>
                    <div className="flex  items-center space-x-3 cursor-pointer">
                      <p>Switch Templates</p>
                    </div> */}
                  </div>
                </div>
                <div className="fixed ml-[-55rem] mt-5">
                  <SwitchTemplateModal
                    switchTemplateModal={switchTemplateModal}
                    setShowSwitchTemplateModal={setShowSwitchTemplateModal}
                  ></SwitchTemplateModal>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
