import React, { useContext, useState, useRef, useEffect } from "react";
import ComponentListContext from "../context/ComponentListContext";
import EducationSvg from "../assets/Education";
import Bullet from "../assets/Bullet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export const handleDeleteKey = (e) => {
  if (
    e.key === "Backspace" &&
    !e.target.innerHTML &&
    e.target.className.includes("deadClass")
  ) {
    e.target.parentElement.remove();
  }
};

export const AwardsComponent = ({ id }) => {
  const {
    handleNewField,
    CurrentEntity,
    AwardsCompArray,
    setCurrentEntity,
    AwardsData,
    setAwardsData,
    ToolBar,
    setToolBar,
    setLinkButton,
    SelectedId,
    CoursesPerRowAwards,
    setSelectedId,
    FontSize,
    setAwardsCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const StudyProgramRef = useRef();
  const InstRef = useRef();
  const awardsdescrpRef = useRef();
  const awardsDateRef = useRef();
  const addAward = useRef();
  const handleAdd = () => {
    handleNewField("awards");
  };
  const handleOnEnter = (e) => {
    if (document.getElementById(`${id}AwardscourseId`).childNodes.length < 10) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() != "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById(`${id}awardCourse`);
          newField.innerHTML = SingleCourse.innerHTML;
          newField.children[1].addEventListener("keypress", handleOnEnter);
          newField.children[1].addEventListener("keydown", handleDeleteKey);
          newField.getElementsByTagName("p")[0].innerHTML = "";
          newField.children[1].classList.add("deadClass");
          e.target.parentElement.parentElement.appendChild(newField);
          newField.children[1].focus();
        }
      }
    } else {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    }
  };
  useEffect(() => {
    const title = InstRef.current.value;
    const newData = { id, title };
    setAwardsData([...AwardsData, newData]);
    if (+id > 1) {
      InstRef.current.focus();
    }
  }, [id]);
  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity == "award") {
      const underliend = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".y");
      document.getElementById(`${id}awardCourse`).classList.remove("hidden");
      document.getElementById(`${id}awardDate`).classList.remove("hidden");
      addAward.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addAward.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }

    if (awardsdescrpRef.current.innerHTML === "") {
      document.getElementById(`${id}awardCourse`).classList.add("hidden");
    } else {
      document.getElementById(`${id}awardCourse`).classList.remove("hidden");
    }
    const date = Array.from(awardsDateRef.current.children);

    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}awardDate`).classList.add("hidden");
    } else {
      document.getElementById(`${id}awardDate`).classList.remove("hidden");
    }
    const handler = (e) => {
      const menu = document.getElementById("awardsmenu");
      const toolbar = document.getElementById("toolbar");
      const underliend = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}award`)[0]
        .querySelectorAll(".y");
      if (InstRef && InstRef.current.contains(e.target)) {
        InstRef.current.classList.remove("placeholder:text-black");
      }
      if (InstRef && !InstRef.current.contains(e.target)) {
        InstRef.current.classList.add("placeholder:text-black");
      }
      if (document.getElementsByClassName(`${id}award`)[0].contains(e.target)) {
        document.getElementById(`${id}awardCourse`).classList.remove("hidden");
        document.getElementById(`${id}awardDate`).classList.remove("hidden");
        addAward.current.classList.remove("hidden");
        for (let i of underliend) {
          i.classList.replace("x", "input-underline");
        }
        for (let i of underliendDash) {
          i.classList.replace("y", "input-underline-dashed");
        }
        return;
      } else {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          addAward.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}award`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
          const notunderliendDashed = document
            .getElementsByClassName(`${id}award`)[0]
            .querySelectorAll(".input-underline-dashed");
          for (let i of notunderliendDashed) {
            i.classList.replace("input-underline-dashed", "y");
          }
        }
      }
      if (
        awardsdescrpRef.current.innerHTML === "" &&
        !awardsdescrpRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document.getElementById(`${id}awardCourse`).classList.add("hidden");
        }
      } else {
        document.getElementById(`${id}awardCourse`).classList.remove("hidden");
      }
      const date = Array.from(awardsDateRef.current.children);

      if (
        (date[0].value === "" || date[1].value === "") &&
        !awardsDateRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document.getElementById(`${id}awardDate`).classList.add("hidden");
        }
      } else {
        document.getElementById(`${id}awardDate`).classList.remove("hidden");
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("award");
  };
  const DateInput = (e) => {
    if (e.target.placeholder == "mm") {
      if (e.target.value.slice(0, 2) > 12) e.target.value = 12;
      else {
        e.target.value = e.target.value.slice(0, 2);
      }
    }
    if (e.target.placeholder == "yy") {
      if (e.target.value.slice(0, 4) > 2030) e.target.value = 2030;
      else {
        e.target.value = e.target.value.slice(0, 4);
      }
    }
  };
  const handleSave = () => {
    const title = InstRef.current.innerHTML;
    const newData = { id, title };

    let existingObjectIndex = AwardsData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedAwardsData = [...AwardsData];
      updatedAwardsData[existingObjectIndex].title = title;
      setAwardsData(updatedAwardsData);
    } else {
      setAwardsData([...AwardsData, newData]);
    }
  };
  return (
    <div
      className={`flex flex-col border-award ${id}award`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div className="ml-9 pb-3 educationAllFields" id="educationOldField">
        <div className="first">
          <p
            onFocus={() => {
              setLinkButton(true);
            }}
            onBlur={() => {
              setLinkButton(false);
              handleSave();
            }}
            contentEditable
            style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            type="text"
            data-placeholder="Title/Award Name"
            ref={InstRef}
            className={`w-[100%] x block text-black ${
              FontSize == "md"
                ? "text-[24px]"
                : FontSize == "sm"
                ? "text-[22px]"
                : "text-[26px]"
            } outline-none  placeholder:text-black placeholder:${
              FontSize == "md"
                ? "text-[24px]"
                : FontSize == "sm"
                ? "text-[22px]"
                : "text-[26px]"
            } placeholder:font-[300] `}
            onKeyPress={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
          ></p>
        </div>
        <div className="flex flex-col space-y-2 " id="educationDetail">
          <div
            className="flex space-x-2 items-center hidden"
            id={`${id}awardDate`}
            ref={awardsDateRef}
          >
            <input
              type="number"
              onInput={(e) => DateInput(e)}
              max={12}
              min={1}
              placeholder="mm"
              className={`y text-[#A8B0B9] ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              }  outline-none w-10 `}
            />
            <h1 className="text-[#A8B0B9]">/</h1>
            <input
              type="number"
              onInput={(e) => DateInput(e)}
              max={2030}
              min={1930}
              placeholder="yy"
              className={`y text-[#A8B0B9] ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              }  outline-none w-12 `}
            />

            <h1
              className={`text-[#A8B0B9] y text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              }`}
            >
              -
            </h1>

            {!Present && (
              <>
                <input
                  type="number"
                  onInput={(e) => DateInput(e)}
                  max={12}
                  min={1}
                  placeholder="mm"
                  className={`text-[#A8B0B9] y text-black ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } outline-none w-10`}
                />
                <h1 className="text-[#A8B0B9]">/</h1>
                <input
                  type="number"
                  onInput={(e) => DateInput(e)}
                  max={2030}
                  min={1930}
                  placeholder="yy"
                  className={`text-[#A8B0B9] y text-black ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } outline-none w-12`}
                />
              </>
            )}
            <input
              type="checkbox"
              className="check"
              id="presentAward"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentAward"
              className={`y text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              }`}
            >
              Present
            </label>
          </div>

          <input
            type="text"
            placeholder="Name of the Institution that issued/awarded it"
            className={`text-black y text-black ${
              FontSize == "md"
                ? "text-[16px]"
                : FontSize == "sm"
                ? "text-[14px]"
                : "text-[18px]"
            } outline-none `}
          />
          <div
            className={`grid grid-cols-${CoursesPerRowAwards}`}
            id={`${id}AwardscourseId`}
          >
            <div
              className="flex space-x-2 hidden  SingleCourse"
              id={`${id}awardCourse`}
            >
              <img
                src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                className="h-2  mt-[0.30rem]"
                alt=""
              />
              <p
                ref={awardsdescrpRef}
                data-placeholder="Description(optional)"
                style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                onFocus={() => {
                  setToolBar(true);
                  setLinkButton(true);
                }}
                onBlur={() => {
                  setToolBar(false);
                  setLinkButton(false);
                }}
                contentEditable
                type="text"
                className={` SingleCourse editable text-black input-underline w-[90%] ${
                  FontSize == "md"
                    ? "text-[18px]"
                    : FontSize == "sm"
                    ? "text-[16px]"
                    : "text-[20px]"
                } outline-none`}
                onKeyPress={(e) => handleOnEnter(e)}
                onKeyDown={(e) => handleDeleteKey(e)}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 hidden ml-3" ref={addAward}>
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
};

export default function Awards() {
  const {
    Icon,
    CoursesPerRowAwards,
    ThemeColor,
    AwardsCompArray,
    setAwardsCompArray,
  } = useContext(ComponentListContext);
  return (
    <div className="pb-3 pr-5 " key="awards">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5 items-center w-[450px] awards">
          {Icon && (
            <span className="relative left-3">
              <EducationSvg></EducationSvg>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            awards
          </div>
        </div>
      </div>
      {AwardsCompArray.map((data) => {
        return data;
      })}

      {/* Dummy Div */}
      <div className="hidden grid grid-cols-1"></div>
      <div className="hidden grid grid-cols-2"></div>
      <div className="hidden grid grid-cols-3"></div>
    </div>
  );
}
