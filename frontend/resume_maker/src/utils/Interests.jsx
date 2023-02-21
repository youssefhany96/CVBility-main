import React, { useContext, useEffect, useRef } from "react";
import ComponentListContext from "../context/ComponentListContext";
import InterestSvg from "../assets/Interests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAppleAlt,
  faBiking,
  faCode,
  faAdd,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export function InterestsComponent({ id }) {
  const InsterestRef = useRef();
  const IconModal = useRef();
  const [showIconModal, setshowIconModal] = useState(false);
  const [Icon, setIcon] = useState(faStar);
  const {
    handleNewField,
    InterestsData,
    setInterestsData,
    InterestsCompArray,
    ThemeColor,
    setInterestsCompArray,
    InterestsSettingInfoGraphic,
    setSelectedId,
    FontSize,
    SelectedId,
  } = useContext(ComponentListContext);
  const [size, setSize] = useState(6);
  const handleSize = (e) => {
    if (e.target.value.length == 0) {
      setSize(9);
    } else {
      setSize(e.target.value.length);
    }
  };
  useEffect(() => {
    const title = InsterestRef.current.value;
    const newData = { id, title };

    if (+id > 1) {
      setSelectedId(id);
      InsterestRef.current.focus();
    }
  }, [id]);
  const handleInterestEnterKey = (e) => {
    if (e.target.value.trim() != "") {
      if (e.key === "Enter") {
        handleSave();
        handleNewField("interests");
      }
    }
  };
  const handler = (e) => {
    const menu = document.getElementById("interestsmenu");
    const underliend = document
      .getElementsByClassName(`${id}interest`)[0]
      .querySelectorAll(".x");
    if (
      document.getElementsByClassName(`${id}interest`)[0].contains(e.target)
    ) {
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }

      return;
    } else {
      if (menu && !menu.contains(e.target)) {
        const notunderliend = document
          .getElementsByClassName(`${id}interest`)[0]
          .querySelectorAll(".input-underline");
        for (let i of notunderliend) {
          i.classList.replace("input-underline", "x");
        }
      }
    }
    if (IconModal.current && !IconModal.current.contains(e.target)) {
      setshowIconModal(false);
    }

    if (InsterestRef.current && InsterestRef.current.contains(e.target)) {
      InsterestRef.current.classList.remove("placeholder:text-black");
    }
    if (InsterestRef.current && !InsterestRef.current.contains(e.target)) {
      InsterestRef.current.classList.add("placeholder:text-black");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
  };
  const handleSave = () => {
    
    const title = InsterestRef.current.value;
    const newData = { id, title };

    let existingObjectIndex = InterestsData.findIndex(
      (object) => object.id === id
      );
      console.log('existingObjectIndex: ', existingObjectIndex);
    if (existingObjectIndex !== -1) {
      console.log('HEREE IFF');
      let updatedInterestsData = [...InterestsData];
      updatedInterestsData[existingObjectIndex].title = title;
      setInterestsData(updatedInterestsData);
    } else {
      console.log('HEREE ELSEEE');
      setInterestsData([...InterestsData, newData]);
    }
  };
  return (
    <div
      className={`${id}interest border-interest relative`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div
        style={{ alignItems: "center" }}
        className="ml-9 pb-3 mr-0 flex  space-x-2 interestsAllFields"
        id="interestsOldField"
      >
        {InterestsSettingInfoGraphic === "Icons" && (
          <span>
            <FontAwesomeIcon
              icon={Icon}
              onClick={() => setshowIconModal(true)}
              className={`text-${ThemeColor} color-grey text-lg ml-3 cursor-pointer`}
            ></FontAwesomeIcon>
          </span>
        )}
        <input
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
          style={{ textAlign: "match-parent", flexWrap: "wrap" }}
          placeholder="Interests"
          className={`text-black w-[90%] x ${
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
          ref={InsterestRef}
          onKeyDown={(e) => handleInterestEnterKey(e)}
        />
      </div>
      {showIconModal ? (
        <div id={`iconSettingsModal`}>
          <div
            className={`flex flex-col absolute h-[300px] w-[300px] space-y-5  -top-[4rem] -left-[19rem] bubbleRight after:top-[26%]  inset-0 z-50 outline-none focus:outline-none`}
            key={5}
          >
            <div
              ref={IconModal}
              className="flex flex-wrap items-center justify-center p-7 gap-1 text-grey "
            >
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => {
                  setIcon(faStar);
                  setshowIconModal(false);
                }}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faAppleAlt}
                onClick={() => {
                  setIcon(faAppleAlt);
                  setshowIconModal(false);
                }}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faBiking}
                onClick={() => {
                  setIcon(faBiking);
                  setshowIconModal(false);
                }}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faCode}
                onClick={() => {
                  setIcon(faCode);
                  setshowIconModal(false);
                }}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary `}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className={`color-grey text-[30px] p-[8px] cursor-pointer mx-0 hover:text-primary`}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}

export default function Interests() {
  const {
    handleNewField,
    SelectedId,
    Icon,
    ThemeColor,
    InterestsCompArray,
    setInterestsCompArray,
  } = useContext(ComponentListContext);
  const addIntreset = useRef();
  const handleAdd = () => {
    handleNewField("interests");
  };

  useEffect(() => {
    const handler = (e) => {
      const menu = document.getElementById("interestsmenu");
      if (document.getElementsByClassName("interests")[0].contains(e.target)) {
        addIntreset.current.classList.remove("hidden");
        return;
      } else {
        if (menu && !menu.contains(e.target)) {
          addIntreset.current.classList.add("hidden");
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="pb-3 pr-5 " key="interests">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5 items-center w-[450px] interests">
          {Icon && (
            <span className="relative left-3">
              <InterestSvg></InterestSvg>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            INTERESTS
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 10 }}>
        {InterestsCompArray.map((data) => {
          return data;
        })}
      </div>
      <div className="flex items-center gap-2 hidden ml-3" ref={addIntreset}>
        <span
          onClick={handleAdd}
          className="bg-primary rounded-full w-8 h-8  cursor-pointer hover:text-primary2"
        >
          <FontAwesomeIcon
            className="text-white p-[0.5rem]"
            icon={faAdd}
          ></FontAwesomeIcon>
        </span>
        <div className=" new-border w-[90%]"> </div>{" "}
        <div className="w-[16px] h-[16px] border border-2 border-primary rounded-full "></div>
      </div>
    </div>
  );
}
