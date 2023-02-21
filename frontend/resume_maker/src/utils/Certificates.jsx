import React, { useContext, useState, useEffect, useRef } from "react";
import ComponentListContext from "../context/ComponentListContext";
import AchievementSvg from "../assets/Achievements";
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

export function CertificatesComponent({ id }) {
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    CertificatesData,
    setCertificatesData,
    ToolBar,
    setToolBar,
    setLinkButton,
    SelectedId,
    FontSize,
    CoursesPerRowCertification,
    setSelectedId,
    setCertificatesCompArray,
    CertificatesCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const AchievementRef = useRef();
  const AchdescrpRef = useRef();
  const AchDateRef = useRef();
  const addCertif = useRef();
  const handleAdd = () => {
    handleNewField("certificates");
  };
  const handleOnEnter = (e) => {
    if (document.getElementById(`${id}CertcourseId`).childNodes.length < 10) {
      if (e.key === "Enter") {
        e.preventDefault();
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
    setCertificatesData([...CertificatesData, newData]);
    if (+id > 1) {
      AchievementRef.current.focus();
      AchievementRef.current.click();
    }
  }, [id]);
  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity == "certf") {
      const underliend = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".y");
      document
        .getElementById(`${id}certifcatesCourse`)
        .classList.remove("hidden");
      document
        .getElementById(`${id}certifcatesDate`)
        .classList.remove("hidden");
      addCertif.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addCertif.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }

    if (AchdescrpRef.current.innerHTML === "") {
      document.getElementById(`${id}certifcatesCourse`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}certifcatesCourse`)
        .classList.remove("hidden");
    }
    const date = Array.from(AchDateRef.current.children);

    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}certifcatesDate`).classList.add("hidden");
    } else {
      document.getElementById(`${id}certifcatesDate`).class;
    }
    const handler = (e) => {
      const menu = document.getElementById("certificatesmenu");
      const toolbar = document.getElementById("toolbar");
      const underliend = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}certifcates`)[0]
        .querySelectorAll(".y");
      if (AchievementRef && AchievementRef.current.contains(e.target)) {
        AchievementRef.current.classList.remove("placeholder:text-black");
      }
      if (AchievementRef && !AchievementRef.current.contains(e.target)) {
        AchievementRef.current.classList.add("placeholder:text-black");
      }
      if (
        document
          .getElementsByClassName(`${id}certifcates`)[0]
          .contains(e.target)
      ) {
        document
          .getElementById(`${id}certifcatesCourse`)
          .classList.remove("hidden");
        document
          .getElementById(`${id}certifcatesDate`)
          .classList.remove("hidden");
        addCertif.current.classList.remove("hidden");
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
          addCertif.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}certifcates`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
          const notunderliendDashed = document
            .getElementsByClassName(`${id}certifcates`)[0]
            .querySelectorAll(".input-underline-dashed");
          for (let i of notunderliendDashed) {
            i.classList.replace("input-underline-dashed", "y");
          }
        }
      }
      if (
        AchdescrpRef.current.innerHTML === "" &&
        !AchdescrpRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}certifcatesCourse`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}certifcatesCourse`)
          .classList.remove("hidden");
      }
      const date = Array.from(AchDateRef.current.children);

      if (
        (date[0].value === "" || date[1].value === "") &&
        !AchDateRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}certifcatesDate`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}certifcatesDate`)
          .classList.remove("hidden");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("certf");
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

    let existingObjectIndex = CertificatesData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedCertificatesData = [...CertificatesData];
      updatedCertificatesData[existingObjectIndex].title = title;
      setCertificatesData(updatedCertificatesData);
    } else {
      setCertificatesData([...CertificatesData, newData]);
    }
  };
  return (
    <div
      className={`flex flex-col border-certifcates ${id}certifcates`}
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
            data-placeholder="Certificate Name"
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
        <div className="flex flex-col space-y-2 ">
          <div
            className="flex space-x-2 items-center hidden "
            id={`${id}certifcatesDate`}
            ref={AchDateRef}
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
              id="presentCertficates"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentCertficates"
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
          <div
            className={`grid grid-cols-${CoursesPerRowCertification}`}
            id={`${id}CertcourseId`}
          >
            <div
              className="flex space-x-2 hidden SingleCourse"
              id={`${id}certifcatesCourse`}
            >
              <p
                ref={AchdescrpRef}
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
      <div className="flex items-center gap-2 hidden ml-3" ref={addCertif}>
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

export default function Certificates() {
  const { Icon, ThemeColor, CertificatesCompArray, setCertificatesCompArray } =
    useContext(ComponentListContext);

  return (
    <div className="pb-3 pr-5 " key="certificates">
      <div className="  ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5  items-center w-[450px] certificates">
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
            certificates
          </div>
        </div>
      </div>
      {CertificatesCompArray.map((data) => {
        return data;
      })}
    </div>
  );
}
