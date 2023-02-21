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

export const OrganisationComponent = ({ id }) => {
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    OrganisationData,
    setOrganisationData,
    ToolBar,
    setToolBar,
    setLinkButton,
    SelectedId,
    FontSize,
    setSelectedId,
    CoursesPerRowOrganisation,
    setOrganisationCompArray,
    OrganisationCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const OrgProgramRef = useRef();
  const orgRef = useRef();
  const OrgdescrpRef = useRef();
  const OrgDateRef = useRef();
  const addOrganisation = useRef();
  const handleAdd = () => {
    handleNewField("organisation");
  };
  const handleOnEnter = (e) => {
    if (document.getElementById(`${id}OrgcourseId`).childNodes.length < 10) {
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
    const title = OrgProgramRef.current.value;
    const newData = { id, title };
    setOrganisationData([...OrganisationData, newData]);
    if (+id > 1) {
      OrgProgramRef.current.focus();
    }
  }, [id]);
  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity == "org") {
      const underliend = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".y");
      document
        .getElementById(`${id}organisationCourse`)
        .classList.remove("hidden");
      document
        .getElementById(`${id}organisationDate`)
        .classList.remove("hidden");
      addOrganisation.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addOrganisation.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }

    if (OrgdescrpRef.current.innerHTML === "") {
      document
        .getElementById(`${id}organisationCourse`)
        .classList.add("hidden");
    } else {
      document
        .getElementById(`${id}organisationCourse`)
        .classList.remove("hidden");
    }
    const date = Array.from(OrgDateRef.current.children);
    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}organisationDate`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}organisationDate`)
        .classList.remove("hidden");
    }

    const handler = (e) => {
      const underliend = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}organisation`)[0]
        .querySelectorAll(".y");
      const toolbar = document.getElementById("toolbar");
      const menu = document.getElementById("organisationmenu");
      if (OrgProgramRef && OrgProgramRef.current.contains(e.target)) {
        OrgProgramRef.current.classList.remove("placeholder:text-black");
      }
      if (OrgProgramRef && !OrgProgramRef.current.contains(e.target)) {
        OrgProgramRef.current.classList.add("placeholder:text-black");
      }
      if (
        document
          .getElementsByClassName(`${id}organisation`)[0]
          .contains(e.target)
      ) {
        document
          .getElementById(`${id}organisationCourse`)
          .classList.remove("hidden");
        document
          .getElementById(`${id}organisationDate`)
          .classList.remove("hidden");
        addOrganisation.current.classList.remove("hidden");
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
          addOrganisation.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}organisation`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
          const notunderliendDashed = document
            .getElementsByClassName(`${id}organisation`)[0]
            .querySelectorAll(".input-underline-dashed");
          for (let i of notunderliendDashed) {
            i.classList.replace("input-underline-dashed", "y");
          }
        }
      }

      if (
        OrgdescrpRef.current.innerHTML === "" &&
        !OrgdescrpRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}organisationCourse`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}organisationCourse`)
          .classList.remove("hidden");
      }
      const date = Array.from(OrgDateRef.current.children);

      if (
        (date[0].value === "" || date[1].value === "") &&
        !OrgDateRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}organisationDate`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}organisationDate`)
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
    setCurrentEntity("org");
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
    const title = OrgProgramRef.current.innerHTML;
    const newData = { id, title };

    let existingObjectIndex = OrganisationData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedOrganisationData = [...OrganisationData];
      updatedOrganisationData[existingObjectIndex].title = title;
      setOrganisationData(updatedOrganisationData);
    } else {
      setOrganisationData([...OrganisationData, newData]);
    }
  };
  return (
    <div
      className={`flex flex-col border-skill ${id}organisation`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div className="ml-9 pb-3 educationAllFields" id="educationOldField">
        {/* <input type="text" placeholder='Organisation Name' className='text-black text-[24px] outline-none placeholder:text-lg placeholder:text-black placeholder:text-[24px] placeholder:font-[500] ' ref={OrgProgramRef} /> */}
        <div className="first">
          <p
            autoFocus={id == 1 ? false : true}
            onFocus={() => {
              setLinkButton(true);
              handleOnClick(id);
            }}
            onBlur={() => {
              setLinkButton(false);
              handleSave();
            }}
            contentEditable
            style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            type="text"
            data-placeholder="Organisation Name"
            ref={OrgProgramRef}
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

        <div className="flex flex-col  space-y-2" id="educationDetail">
          <div
            className="flex space-x-2 items-center hidden"
            id={`${id}organisationDate`}
            ref={OrgDateRef}
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
              id="presentOrg"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentOrg"
              className={`text-black ${
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
            className={`grid grid-cols-${CoursesPerRowOrganisation}`}
            id={`${id}OrgcourseId`}
          >
            <div
              className="flex space-x-2 hidden  SingleCourse"
              id={`${id}organisationCourse`}
            >
              <p
                ref={OrgdescrpRef}
                data-placeholder="Role(optional)"
                style={{ overflow: "hidden" }}
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
      <div
        className="flex items-center gap-2 hidden ml-3"
        ref={addOrganisation}
      >
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

export default function Organisation() {
  const {
    Icon,
    CoursesPerRowOrganisation,
    ThemeColor,
    OrganisationCompArray,
    setOrganisationCompArray,
  } = useContext(ComponentListContext);
  return (
    <div className="pb-3 pr-5 " key="organisation">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5 items-center w-[450px] organisation">
          {Icon && (
            <span className="relative left-3">
              <EducationSvg></EducationSvg>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} text-[32px] notEditable font-[600] uppercase outline-none w-[400px] `}
          >
            Organisation
          </div>
        </div>
      </div>
      {OrganisationCompArray.map((data) => {
        return data;
      })}

      {/* Dummy Div */}
      <div className="hidden grid grid-cols-1"></div>
      <div className="hidden grid grid-cols-2"></div>
      <div className="hidden grid grid-cols-3"></div>
    </div>
  );
}
