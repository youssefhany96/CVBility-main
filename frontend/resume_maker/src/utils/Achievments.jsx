import React, { useContext, useState, useEffect, useRef } from "react";
import ComponentListContext from "../context/ComponentListContext";
import AchievementSvg from "../assets/Achievements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export function AchievementsComponent({ id }) {
  const [Present, setPresent] = useState(false);
  const AchievementRef = useRef();
  const achievementdescrpRef = useRef();
  const achievementDateRef = useRef();
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    AchievementsData,
    setAchievementsData,
    ToolBar,
    setToolBar,
    setLinkButton,
    setSelectedId,
    FontSize,
    CoursesPerRowAchievments,
    setAchievementsCompArray,
    AchievementsCompArray,
    SelectedId,
  } = useContext(ComponentListContext);
  const addAchievments = useRef();
  const handleAdd = () => {
    handleNewField("achievements");
  };
  const handleDeleteKey = (e) => {
    if (
      e.key === "Backspace" &&
      !e.target.innerHTML &&
      e.target.className.includes("deadClass")
    ) {
      e.target.parentElement.remove();
    }
  };

  const handleOnEnter = (e) => {
    if (document.getElementById(`${id}DescreptionAch`).childNodes.length < 10) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() != "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById(`${id}achievementCourse`);
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
    const title = AchievementRef.current.value;
    const newData = { id, title };
    setAchievementsData([...AchievementsData, newData]);
    if (+id > 1) {
      setSelectedId(id);
      AchievementRef.current.focus();
    }
  }, [id]);
  const handler = (e) => {
    const menu = document.getElementById("achievementsmenu");
    const toolbar = document.getElementById("toolbar");
    const underliend = document
      .getElementsByClassName(`${id}achievement`)[0]
      .querySelectorAll(".x");
    const underliendDash = document
      .getElementsByClassName(`${id}achievement`)[0]
      .querySelectorAll(".y");
    if (AchievementRef && AchievementRef.current.contains(e.target)) {
      AchievementRef.current.classList.remove("placeholder:text-black");
    }
    if (AchievementRef && !AchievementRef.current.contains(e.target)) {
      AchievementRef.current.classList.add("placeholder:text-black");
    }

    if (
      document.getElementsByClassName(`${id}achievement`)[0].contains(e.target)
    ) {
      document
        .getElementById(`${id}achievementCourse`)
        .classList.remove("hidden");
      document
        .getElementById(`${id}achievementDate`)
        .classList.remove("hidden");
      addAchievments.current.classList.remove("hidden");
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
        addAchievments.current.classList.add("hidden");
        const notunderliend = document
          .getElementsByClassName(`${id}achievement`)[0]
          .querySelectorAll(".input-underline");
        for (let i of notunderliend) {
          i.classList.replace("input-underline", "x");
        }
        const notunderliendDashed = document
          .getElementsByClassName(`${id}achievement`)[0]
          .querySelectorAll(".input-underline-dashed");
        for (let i of notunderliendDashed) {
          i.classList.replace("input-underline-dashed", "y");
        }
      }
    }
    if (
      achievementdescrpRef.current.innerHTML === "" &&
      !achievementdescrpRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document
          .getElementById(`${id}achievementCourse`)
          .classList.add("hidden");
      }
    } else {
      document
        .getElementById(`${id}achievementCourse`)
        .classList.remove("hidden");
    }
    const date = Array.from(achievementDateRef.current.children);

    if (
      (date[0].value === "" || date[1].value === "") &&
      !achievementDateRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}achievementDate`).classList.add("hidden");
      }
    } else {
      document
        .getElementById(`${id}achievementDate`)
        .classList.remove("hidden");
    }
  };
  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity == "ach") {
      const underliend = document
        .getElementsByClassName(`${id}achievement`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}achievement`)[0]
        .querySelectorAll(".y");

      document
        .getElementById(`${id}achievementCourse`)
        .classList.remove("hidden");
      document
        .getElementById(`${id}achievementDate`)
        .classList.remove("hidden");
      addAchievments.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addAchievments.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}achievement`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}achievement`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }

    if (achievementdescrpRef.current.innerHTML === "") {
      document.getElementById(`${id}achievementCourse`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}achievementCourse`)
        .classList.remove("hidden");
    }
    const date = Array.from(achievementDateRef.current.children);

    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}achievementDate`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}achievementDate`)
        .classList.remove("hidden");
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("ach");
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
    const title = AchievementRef.current.innerHTML;
    const newData = { id, title };

    let existingObjectIndex = AchievementsData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedAsetAchievementsData = [...AchievementsData];
      updatedAsetAchievementsData[existingObjectIndex].title = title;
      setAchievementsData(updatedAsetAchievementsData);
    } else {
      setAchievementsData([...AchievementsData, newData]);
    }
  };
  return (
    <div
      className={` flex flex-col border-achievements ${id}achievement`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div
        className="ml-9 pb-3 achievementsAllFields"
        id="achievementsOldField"
      >
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
            data-placeholder="Achievements Name"
            ref={AchievementRef}
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

        <div className="flex flex-col space-y-2 " id="achievementsDetail">
          <div
            className="flex space-x-2 items-center hidden"
            id={`${id}achievementDate`}
            ref={achievementDateRef}
          >
            <input
              type="number"
              onInput={(e) => DateInput(e)}
              max={12}
              min={1}
              placeholder="mm"
              className={`text-[#A8B0B9] y ${
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
              className={`text-[#A8B0B9] y ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              }  outline-none w-12 `}
            />

            <h1
              className={`text-[#A8B0B9] y ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } `}
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
                  className={`text-[#A8B0B9] y ${
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
                  className={`text-[#A8B0B9] y ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  }  outline-none w-12 `}
                />
              </>
            )}
            <input
              type="checkbox"
              className="check"
              id="presentAch"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentAch"
              className={`${
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
          <div
            className={`grid grid-cols-${CoursesPerRowAchievments}`}
            id={`${id}DescreptionAch`}
          >
            <div
              className="flex space-x-2 hidden SingleCourse"
              id={`${id}achievementCourse`}
            >
              <img
                src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                className="h-2 mt-[0.30rem]"
                alt=""
              />
              <p
                ref={achievementdescrpRef}
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
      <div className="flex items-center gap-2 hidden ml-3" ref={addAchievments}>
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

export default function Achievments() {
  const { Icon, ThemeColor, AchievementsCompArray, setAchievementsCompArray } =
    useContext(ComponentListContext);

  return (
    <div key="achievements" className="pb-3 pr-5 ">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5 items-center w-[450px] achievements">
          {Icon && (
            <span className="relative left-3">
              <AchievementSvg></AchievementSvg>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            achievements
          </div>
        </div>
      </div>
      {AchievementsCompArray.map((data) => {
        return data;
      })}
    </div>
  );
}
