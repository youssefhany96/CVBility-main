import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import ComponentListContext from "../context/ComponentListContext";
import EducationSvg from "../assets/Education";

export const handleDeleteKey = (e) => {
  if (
    e.key === "Backspace" &&
    !e.target.innerHTML &&
    e.target.className.includes("deadClass")
  ) {
    e.target.parentElement.remove();
  }
};

export const EducationComponent = ({ id }) => {
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    EducationData,
    setEducationData,
    ToolBar,
    setToolBar,
    setLinkButton,
    SelectedId,
    CoursesPerRowEducation,
    setEducationCompArray,
    setSelectedId,
    FontSize,
    EducationCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);

  const StudyProgramRef = useRef();
  const InstituteRef = useRef();
  const educationsdescrpRef = useRef();
  const educationsAddressRef = useRef();
  const educationsDateRef = useRef();
  const addEducation = useRef();
  const handleAdd = () => {
    // addEducation.current.classList.add("hidden");
    handleNewField("education");
  };
  const handleInput = (event) => {
    if (event.inputType === "insertLineBreak") {
      event.preventDefault();
    }
  };
  const handleEducationEnterKey = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleOnEnter = (e) => {
    if (
      document.getElementById(`${id}EducationCourseId`).childNodes.length < 10
    ) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() != "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById("SingleCourse");
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
    const title = StudyProgramRef.current.value;
    const title2 = InstituteRef.current.innerHTML;
    const newData = { id, title, title2 };
    setEducationData([...EducationData, newData]);

    if (+id > 1) {
      setSelectedId(id);
      StudyProgramRef.current.focus();
    }
  }, [id]);

  const handler = (e) => {
    const menu = document.getElementById("educationmenu");
    
    const toolbar = document.getElementById("toolbar");
    const underliend = document
      .getElementsByClassName(`${id}education`)[0]
      ?.querySelectorAll(".x");
    const underliendDash = document
      .getElementsByClassName(`${id}education`)[0]
      ?.querySelectorAll(".y");
    if (StudyProgramRef && StudyProgramRef.current.contains(e.target)) {
      StudyProgramRef.current.classList.remove("placeholder:text-black");
    }
    if (StudyProgramRef && !StudyProgramRef?.current?.contains(e.target)) {
      StudyProgramRef.current.classList.add("placeholder:text-black");
    }
    if (StudyProgramRef && InstituteRef?.current?.contains(e.target)) {
      InstituteRef.current.classList.remove("placeholder:text-black");
    }
    if (StudyProgramRef && !InstituteRef?.current?.contains(e.target)) {
      InstituteRef.current.classList.add("placeholder:text-black");
    }
    if (
      document.getElementsByClassName(`${id}education`)[0].contains(e.target)
    ) {
      document
        .getElementById(`${id}educationCourse`)
        .classList.remove("hidden");
      document.getElementById(`${id}educationDate`).classList.remove("hidden");
      document
        .getElementById(`${id}educationAdress`)
        .classList.remove("hidden");
      // document.getElementsByClassName(`${id}education`)[0].classList.add('border-2', 'border-light-blue-500', 'border-opacity-25');
      addEducation.current.classList.remove("hidden");
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
        // document.getElementsByClassName(`${id}education`)[0].classList.remove('border-2', 'border-light-blue-500', 'border-opacity-25');
        addEducation.current.classList.add("hidden");

        const notunderliend = document
          .getElementsByClassName(`${id}education`)[0]
          .querySelectorAll(".input-underline");
        for (let i of notunderliend) {
          i.classList.replace("input-underline", "x");
        }
        const notunderliendDashed = document
          .getElementsByClassName(`${id}education`)[0]
          .querySelectorAll(".input-underline-dashed");
        for (let i of notunderliendDashed) {
          i.classList.replace("input-underline-dashed", "y");
        }
      }
    }

    if (
      educationsdescrpRef.current.innerHTML === "" &&
      !educationsdescrpRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}educationCourse`).classList.add("hidden");
      }
    } else {
      document
        .getElementById(`${id}educationCourse`)
        .classList.remove("hidden");
    }
    if (
      educationsAddressRef.current.value === "" &&
      !educationsAddressRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}educationAdress`).classList.add("hidden");
      }
    } else {
      document
        .getElementById(`${id}educationAdress`)
        .classList.remove("hidden");
    }
    const date = Array.from(educationsDateRef.current.children);

    if (
      (date[0].value === "" || date[1].value === "") &&
      !educationsDateRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}educationDate`).classList.add("hidden");
      }
    } else {
      document.getElementById(`${id}educationDate`).classList.remove("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [handler]);

  useEffect(() => {
    const underliend = document
      .getElementsByClassName(`${id}education`)[0]
      ?.querySelectorAll(".x");
    const underliendDash = document
      .getElementsByClassName(`${id}education`)[0]
      ?.querySelectorAll(".y");
    if (+id > 0 && SelectedId == id && CurrentEntity === "edu") {
      document
        .getElementById(`${id}educationCourse`)
        .classList.remove("hidden");
      document.getElementById(`${id}educationDate`).classList.remove("hidden");
      document
        .getElementById(`${id}educationAdress`)
        .classList.remove("hidden");
      // document.getElementsByClassName(`${id}education`)[0].classList.add('border-2', 'border-light-blue-500', 'border-opacity-25');
      addEducation.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addEducation.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}education`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}education`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }
    if (educationsdescrpRef.current.innerHTML === "") {
      document.getElementById(`${id}educationCourse`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}educationCourse`)
        .classList.remove("hidden");
    }
    if (educationsAddressRef.current.value === "") {
      document.getElementById(`${id}educationAdress`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}educationAdress`)
        .classList.remove("hidden");
    }
    const date = Array.from(educationsDateRef.current.children);

    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}educationDate`).classList.add("hidden");
    } else {
      document.getElementById(`${id}educationDate`).classList.remove("hidden");
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("edu");
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
    const title = StudyProgramRef.current.value;
    const title2 = InstituteRef.current.innerHTML;
    const newData = { id, title, title2 };
    let existingObjectIndex = EducationData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedEducationData = [...EducationData];
      updatedEducationData[existingObjectIndex].title = title;
      updatedEducationData[existingObjectIndex].title2 = title2;
      setEducationData(updatedEducationData);
    } else {
      setEducationData([...EducationData, newData]);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col border-education ${id}education`}
        id={id}
        onClick={() => handleOnClick(id)}
      >
        <div className="ml-9 pb-3 educationAllFields" id="educationOldField">
          <input
            id="edu"
            type="text"
            autoFocus={id == 1 ? false : true}
            onBlur={() => handleSave()}
            onFocus={(e) => {
              handleOnClick(id);
              e.target.click();
            }}
            onKeyPress={(e) => handleEducationEnterKey(e)}
            placeholder="Study Program"
            className={`w-[100%] study x block required text-black  ${
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
            ref={StudyProgramRef}
          />
          <div className="seconed">
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
              data-placeholder="Institute Name"
              ref={InstituteRef}
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
              onKeyPress={(e) =>
                e.key === "Enter" ? e.preventDefault() : null
              }
            ></p>
          </div>

          <div className="flex flex-col space-y-2 " id="educationDetail">
            <div
              className="flex space-x-2 hidden items-center"
              id={`${id}educationDate`}
              ref={educationsDateRef}
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
                className={`y text-[#A8B0B9] ${
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
                </>
              )}
              <input
                type="checkbox"
                className="check"
                id="presentEducation"
                onClick={() => (Present ? setPresent(false) : setPresent(true))}
              />
              <label
                htmlFor="presentEducation"
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
            <div className="hidden w-[100%]" id={`${id}educationAdress`}>
              <input
                type="text"
                ref={educationsAddressRef}
                placeholder="City, Country (Optional)"
                className={`text-black w-[100%] y ${
                  FontSize == "md"
                    ? "text-[16px]"
                    : FontSize == "sm"
                    ? "text-[14px]"
                    : "text-[18px]"
                } outline-none `}
              />
            </div>

            <div className="hidden w-[100%]" id={`${id}educationCourse`}>
              {" "}
              <input
                type="text"
                defaultValue="Courses"
                className={`text-primary2 y ${
                  FontSize == "md"
                    ? "text-[16px]"
                    : FontSize == "sm"
                    ? "text-[14px]"
                    : "text-[18px]"
                } outline-none `}
              />
              <div
                className={`grid grid-cols-${CoursesPerRowEducation}`}
                id={`${id}EducationCourseId`}
              >
                <div className="flex space-x-2 SingleCourse" id="SingleCourse">
                  <img
                    src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                    className="h-2 mt-[0.30rem]"
                    alt=""
                  />
                  <p
                    data-placeholder="Course /Thesis"
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    onInput={handleInput}
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
                    ref={educationsdescrpRef}
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
        </div>
        <div className="flex items-center gap-2 hidden ml-3" ref={addEducation}>
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
      </div>{" "}
    </>
  );
};

export default function Education() {
  const {
    Icon,
    CoursesPerRowEducation,
    ThemeColor,
    EducationCompArray,
    setEducationCompArray,
  } = useContext(ComponentListContext);
  
  return (
    <div className="pb-3 pr-5 relative" key="education">
      <div className="  ml-6 pt-3 px-5  ">
        <div className="flex absolute  space-x-6 relative right-5  items-center w-[450px] education">
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
            education
          </div>
        </div>
      </div>
      {EducationCompArray.map((data) => {
        
        return data;
      })}

      {/* Dummy Div */}
      <div className="hidden grid grid-cols-1"></div>
      <div className="hidden grid grid-cols-2"></div>
      <div className="hidden grid grid-cols-3"></div>
    </div>
  );
}
