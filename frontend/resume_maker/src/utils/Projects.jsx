import React, { useContext, useState, useRef, useEffect } from "react";
import ComponentListContext from "../context/ComponentListContext";
import ProjectSvg from "../assets/PersonalProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export function ProjectsComponent({ id }) {
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    ProjectsData,
    setProjectsData,
    ToolBar,
    setToolBar,
    setLinkButton,
    SelectedId,
    CoursesPerRowProjects,
    setSelectedId,
    FontSize,
    setProjectsCompArray,
    ProjectsCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const [ShowDate, setShowDate] = useState(false);
  const ProjectRef = useRef();
  const ProjectsdescrpRef = useRef();
  const ProjectsDateRef = useRef();
  const addProject = useRef();
  const handleAdd = () => {
    handleNewField("personalProject");
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
    if (
      document.getElementById(`${id}ProjectsachievementsId`).childNodes.length <
      10
    ) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() != "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById(`${id}ProjectCourse`);
          newField.innerHTML = SingleCourse.innerHTML;
          newField.children[1].addEventListener("keypress", handleOnEnter);
          newField.children[1].addEventListener("keydown", handleDeleteKey);
          newField.getElementsByTagName("p")[0].innerHTML = "";
          newField.children[1].classList.add("deadClass");
          e.target.parentElement.parentElement.appendChild(newField);
          newField.children[1].focus();
          setToolBar(true);
          setLinkButton(true);
          newField.children[1].addEventListener("focusin", () => {
            setToolBar(true);
            setLinkButton(true);
          });
          newField.children[1].addEventListener("blur", () => {
            setToolBar(false);
            setLinkButton(false);
          });
        }
      }
    } else {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    }
  };
  useEffect(() => {
    const title = ProjectRef.current.value;
    const newData = { id, title };
    setProjectsData([...ProjectsData, newData]);
    if (+id > 1) {
      ProjectRef.current.focus();
    }
  }, [id]);
  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity == "pro") {
      const underliend = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".y");
      document.getElementById(`${id}ProjectCourse`).classList.remove("hidden");
      document.getElementById(`${id}projectDate`).classList.remove("hidden");
      addProject.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addProject.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }

      if (ProjectsdescrpRef.current.innerHTML === "") {
        document.getElementById(`${id}ProjectCourse`).classList.add("hidden");
      } else {
        document
          .getElementById(`${id}ProjectCourse`)
          .classList.remove("hidden");
      }
      const date = Array.from(ProjectsDateRef.current.children);

      if (date[0].value === "" || date[1].value === "") {
        document.getElementById(`${id}projectDate`).classList.add("hidden");
      } else {
        document.getElementById(`${id}projectDate`).classList.remove("hidden");
      }
    }

    const handler = (e) => {
      const menu = document.getElementById("personalProjectmenu");
      const toolbar = document.getElementById("toolbar");
      const underliend = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}project`)[0]
        .querySelectorAll(".y");
      if (ProjectRef && ProjectRef.current.contains(e.target)) {
        ProjectRef.current.classList.remove("placeholder:text-black");
      }

      if (ProjectRef && !ProjectRef.current.contains(e.target)) {
        ProjectRef.current.classList.add("placeholder:text-black");
      }

      if (
        document.getElementsByClassName(`${id}project`)[0].contains(e.target)
      ) {
        document
          .getElementById(`${id}ProjectCourse`)
          .classList.remove("hidden");
        document.getElementById(`${id}projectDate`).classList.remove("hidden");
        addProject.current.classList.remove("hidden");
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
          addProject.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}project`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
          const notunderliendDashed = document
            .getElementsByClassName(`${id}project`)[0]
            .querySelectorAll(".input-underline-dashed");
          for (let i of notunderliendDashed) {
            i.classList.replace("input-underline-dashed", "y");
          }
        }
      }
      if (
        ProjectsdescrpRef.current.innerHTML === "" &&
        !ProjectsdescrpRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document.getElementById(`${id}ProjectCourse`).classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}ProjectCourse`)
          .classList.remove("hidden");
      }
      const date = Array.from(ProjectsDateRef.current.children);

      if (
        (date[0].value === "" || date[1].value === "") &&
        !ProjectsDateRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document.getElementById(`${id}projectDate`).classList.add("hidden");
        }
      } else {
        document.getElementById(`${id}projectDate`).classList.remove("hidden");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("pro");
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
    const title = ProjectRef.current.innerHTML;
    const newData = { id, title };

    let existingObjectIndex = ProjectsData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedProjectsData = [...ProjectsData];
      updatedProjectsData[existingObjectIndex].title = title;
      setProjectsData(updatedProjectsData);
    } else {
      setProjectsData([...ProjectsData, newData]);
    }
  };
  return (
    <div
      className={`flex flex-col border-projects ${id}project`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div
        className="ml-9 pb-3 personalProjectAllFields"
        id="personalProjectOldField"
      >
        <div className="first">
          <p
            autoFocus={id == 1 ? false : true}
            onFocus={() => {
              setToolBar(true);
              handleOnClick(id);
            }}
            onBlur={() => {
              handleSave();
              setToolBar(false);
            }}
            contentEditable
            style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            type="text"
            data-placeholder="Project Name"
            ref={ProjectRef}
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

        <div className="flex flex-col space-y-2 " id="projectDetail">
          <div
            className="flex space-x-2 items-center hidden"
            id={`${id}projectDate`}
            ref={ProjectsDateRef}
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
              }  outline-none w-12`}
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
                  }  outline-none w-10`}
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
                  }  outline-none w-12`}
                />
              </>
            )}
            <input
              type="checkbox"
              className="check"
              id="presentProjects"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentProjects"
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
            className={`grid grid-cols-${CoursesPerRowProjects}`}
            id={`${id}ProjectsachievementsId`}
          >
            <div
              className="flex space-x-2 hidden SingleCourse "
              id={`${id}ProjectCourse`}
            >
              <img
                src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                className="h-2  mt-[0.30rem]"
                alt=""
              />
              <p
                ref={ProjectsdescrpRef}
                data-placeholder="Description of Achievments  (optional)"
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
      <div className="flex items-center gap-2 hidden ml-3" ref={addProject}>
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

export default function Projects() {
  const { Icon, ThemeColor, ProjectsCompArray, setProjectsCompArray } =
    useContext(ComponentListContext);

  return (
    <div key="personalProject" className="pb-3 pr-5 ">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5 items-center w-[450px] personalProject">
          {Icon && (
            <span className="relative left-3">
              <ProjectSvg></ProjectSvg>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            PROJECTS
          </div>
        </div>
      </div>
      {ProjectsCompArray.map((data) => {
        return data;
      })}
    </div>
  );
}
