import React, { useContext, useState, useRef, useEffect } from "react";
import ComponentListContext from "../context/ComponentListContext";
import WorkEx from "../assets/Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

export const handleDeleteKey = (e) => {
  if (
    e.key === "Backspace" &&
    !e.target.innerHTML &&
    e.target.className.includes("deadClass")
  ) {
    e.target.parentElement.remove();
  }
};

export function WorkComponent({ id }) {
  
  const {
    CurrentEntity,
    handleNewField,
    setCurrentEntity,
    WorkData,
    setWorkData,
    ToolBar,
    setToolBar,
    LinkButton,
    setLinkButton,
    MovableIndex,
    setMovableIndex,
    CoursesPerRow,
    setSelectedId,
    SelectedId,
    FontSize,
    setWorkCompArray,
    WorkCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const [ShowDate, setShowDate] = useState(true);
  const TitleRef = useRef();
  const WorkRef = useRef();
  const CompanyRef = useRef();
  const worksdescrpRef = useRef();
  const workDescriptionRef = useRef();
  const worksAddressRef = useRef();
  const worksDateRef = useRef();
  const workContacts = useRef();
  const workContact1 = useRef();
  const workContact2 = useRef();
  const addWork = useRef();
  const selectionRangeRef = useRef(null);

  const handleAdd = () => {
    handleNewField("workExperience");
  };
  const handleOnEnter = (e) => {
    if (
      document.getElementById(`${id}WorkachievementsId`).childNodes.length < 10
    ) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() !== "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById("Workexperience");
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
    const title = TitleRef.current.value;
    const title2 = CompanyRef.current.innerHTML;
    const newData = { id, title, title2 };
    setWorkData([...WorkData, newData]);
    if (+id > 1) {
      setSelectedId(id);
      TitleRef.current.focus();
    }
  }, [id]);
  const handler = (e) => {
    const menu = document.getElementById("workExperiencemenu");
    
    const toolbar = document.getElementById("toolbar");
    const underliend = document
      .getElementsByClassName(`${id}work`)[0]
      .querySelectorAll(".x");
    const underliendDash = document
      .getElementsByClassName(`${id}work`)[0]
      .querySelectorAll(".y");
    if (TitleRef.current && TitleRef.current.contains(e.target)) {
      TitleRef.current.classList.remove("placeholder:text-black");
    }
    if (TitleRef.current && !TitleRef.current.contains(e.target)) {
      TitleRef.current.classList.add("placeholder:text-black");
    }
    if (CompanyRef.current && CompanyRef.current.contains(e.target)) {
      CompanyRef.current.classList.remove("placeholder:text-black");
    }
    if (CompanyRef.current && !CompanyRef.current.contains(e.target)) {
      CompanyRef.current.classList.add("placeholder:text-black");
    }
    if (document.getElementsByClassName(`${id}work`)[0].contains(e.target)) {
      document.getElementById(`${id}workCourse`).classList.remove("hidden");
      document.getElementById(`${id}workDate`).classList.remove("hidden");
      document.getElementById(`${id}workAdress`).classList.remove("hidden");
      document.getElementById(`${id}workDescription`).classList.remove("hidden");
      // document.getElementById(`${id}workContacts`).classList.remove("hidden");
      // document.getElementById(`${id}workContact1`).classList.remove("hidden");
      // document.getElementById(`${id}workContact2`).classList.remove("hidden");
      workContact1.current.parentElement.classList.remove("hidden");
      workContact2.current.parentElement.classList.remove("hidden");
      workDescriptionRef.current.classList.remove("hidden");
      addWork.current.classList.remove("hidden");
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
        addWork.current.classList.add("hidden");
        const notunderliend = document
          .getElementsByClassName(`${id}work`)[0]
          .querySelectorAll(".input-underline");
        for (let i of notunderliend) {
          i.classList.replace("input-underline", "x");
        }
        const notunderliendDashed = document
          .getElementsByClassName(`${id}work`)[0]
          .querySelectorAll(".input-underline-dashed");
        for (let i of notunderliendDashed) {
          i.classList.replace("input-underline-dashed", "y");
        }
      }
    }
    if (
      workDescriptionRef.current.innerHTML === "" &&
      !worksdescrpRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}workCourse`).classList.add("hidden");
        document.getElementById(`${id}workDescription`).classList.add("hidden");
      }
    } else {
      document.getElementById(`${id}workCourse`).classList.remove("hidden");
      document.getElementById(`${id}workDescription`).classList.remove("hidden");
    }
    if (
      worksAddressRef.current.value === "" &&
      !worksAddressRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}workAdress`).classList.add("hidden");
      }
    } else {
      document.getElementById(`${id}workAdress`).classList.remove("hidden");
    }
    if (
      workDescriptionRef.current.innerHTML === "" &&
      !workDescriptionRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        workDescriptionRef.current.classList.add("hidden");
      }
    } else {
      workDescriptionRef.current.classList.remove("hidden");
    }
    const date = Array.from(worksDateRef.current.children);

    if (
      (date[0].value === "" || date[1].value === "") &&
      !worksDateRef.current.contains(e.target)
    ) {
      if (
        menu &&
        !menu.contains(e.target) &&
        toolbar &&
        !toolbar.contains(e.target)
      ) {
        document.getElementById(`${id}workDate`).classList.add("hidden");
      }
    } else {
      document.getElementById(`${id}workDate`).classList.remove("hidden");
    }

    if (
      (workContact1.current.value === "" ||
        workContact2.current.value === "") &&
      !workContacts.current.contains(e.target)
    ) {
      if (workContact1.current.value === "") {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          workContact1.current.parentElement.classList.add("hidden");
        }
      }
      if (workContact2.current.value === "") {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          workContact2.current.parentElement.classList.add("hidden");
        }
      }
      if (
        workContact1.current.value === "" &&
        workContact2.current.value === ""
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}workContacts`)
            .classList.add("hidden");
        }
      }
    } else {
      document.getElementById(`${id}workContacts`).classList.remove("hidden");
    }
  };
  useEffect(()=>{
    
    
  },[WorkData,WorkCompArray])
 
  useEffect(() => {
    
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[handler]);
  useEffect(() => {
    const underliend = document
      .getElementsByClassName(`${id}work`)[0]
      ?.querySelectorAll(".x");
    const underliendDash = document
      .getElementsByClassName(`${id}work`)[0]
      ?.querySelectorAll(".y");
      
    if (+id > 0 && SelectedId == id && CurrentEntity === "work") {
      document
        .getElementById(`${id}workCourse`)
        .classList.remove("hidden");
        document
        .getElementById(`${id}workDescription`)
        .classList.remove("hidden");
      document.getElementById(`${id}workDate`).classList.remove("hidden");
      document
        .getElementById(`${id}workAdress`)
        .classList.remove("hidden");
      // document.getElementsByClassName(`${id}education`)[0].classList.add('border-2', 'border-light-blue-500', 'border-opacity-25');
      addWork.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addWork.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}work`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}work`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }
    if (workDescriptionRef.current.innerHTML === "") {
      document.getElementById(`${id}workCourse`).classList.add("hidden");
      document.getElementById(`${id}workDescription`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}workCourse`)
        .classList.remove("hidden");
        document
        .getElementById(`${id}workDescription`)
        .classList.remove("hidden");
    }
    if (worksAddressRef.current.value === "") {
      document.getElementById(`${id}workAdress`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}workAdress`)
        .classList.remove("hidden");
    }
    const date = Array.from(worksDateRef.current.children);

    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}workDate`).classList.add("hidden");
    } else {
      document.getElementById(`${id}workDate`).classList.remove("hidden");
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    
    setSelectedId(id);
    setCurrentEntity("work");
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
    const title = TitleRef.current.value;
    const title2 = CompanyRef.current.innerHTML;

    const newData = { id, title, title2 };

    let existingObjectIndex = WorkData.findIndex((object) => object.id === id);
    if (existingObjectIndex !== -1) {
      let updatedWorkData = [...WorkData];
      updatedWorkData[existingObjectIndex].title = title;
      updatedWorkData[existingObjectIndex].title2 = title2;
      setWorkData(updatedWorkData);
    } else {
      setWorkData([...WorkData, newData]);
    }
  };
  return (
    <div
      className={`flex flex-col border-work ${id}work`}
      id={id}
      onClick={() => handleOnClick(id)}
      // ref={WorkRef}
    >
      <div
        className="ml-9 pb-3 workExperienceAllFields"
        id="workExperienceOldField"
      >
        <input
            id="work"
            autoFocus={id == 1 ? false : true}

          onBlur={() => handleSave()}
          onClick={() => {
            handleOnClick(id);
          }}
          onFocus={(e) => {
            handleOnClick(id);
            e.target.click();
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          type="text"
          placeholder="Title/Position"
          className={`w-[100%] x block text-black ${
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
          ref={TitleRef}
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
            data-placeholder="Company"
            ref={CompanyRef}
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

        <div className="flex flex-col space-y-2 " id="workDetail">
          <div
            className="flex space-x-2 items-center  hidden"
            id={`${id}workDate`}
            ref={worksDateRef}
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
              }  outline-none w-12`}
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
                  }  outline-none w-10`}
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
                  }  outline-none w-12`}
                />
              </>
            )}
            <input
              type="checkbox"
              className="check"
              id="presentWork"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentWork"
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
          <div className="hidden" id={`${id}workAdress`}>
            {" "}
            <input
              type="text"
              ref={worksAddressRef}
              placeholder="City, Country (Optional)"
              className={`w-[100%] y text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } outline-none `}
            />
          </div>
          <div className="SingleCourse " id={`${id}workDescription`}>
            <p
              onFocus={() => {
                setToolBar(true);
                setLinkButton(true);
              }}
              onBlur={() => {
                setToolBar(false);
                setLinkButton(false);
              }}
              contentEditable
              style={{ whiteSpace: "nowrap", overflow: "" }}
              type="text"
              data-placeholder="Description(optional)"
              ref={workDescriptionRef}
              className={`  text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } y hidden outline-none `}
              onKeyPress={(e) =>
                e.key === "Enter" ? e.preventDefault() : null
              }
            ></p>
          </div>

          <div className="hidden" id={`${id}workCourse`}>
            <input
              type="text"
              defaultValue="Tasks/Achievments"
              className={`text-primary2 y ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } outline-none `}
            />
            <div
              className={`grid grid-cols-${CoursesPerRow}`}
              id={`${id}WorkachievementsId`}
            >
              <div
                className="flex items-start space-x-2 SingleCourse "
                id={`Workexperience ${id}Description`}
            // id={`${id}Description`}

              >
                <img
                  src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                  className="h-2  mt-[0.30rem]"
                  alt=""
                />
                <p
                  ref={worksdescrpRef}
                  data-placeholder="Accomplishments/Responsibility/Task"
                  style={{ whiteSpace: "nowrap", overflow: "" }}
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
          <div
            className="flex flex-row items-start hidden "
            id={`${id}workContacts`}
            ref={workContacts}
          >
            <input
              type="text"
              defaultValue="Contact :"
              className={`text-primary2 y ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } w-[80px] outline-none `}
            />
            <div className="flex flex-col">
              <div className="flex ">
                {/*<img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2  mt-[0.30rem]' alt="" />*/}
                <input
                  type="text"
                  ref={workContact1}
                  placeholder="Contact Person"
                  className={`text-black ml-2  y ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } outline-none `}
                />
              </div>
              <div className="flex ">
                {" "}
                {/*<img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2  mt-[0.30rem]' alt="" />*/}
                <input
                  type="text"
                  ref={workContact2}
                  placeholder="Contact Info"
                  className={`text-black ml-2 y ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } outline-none `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 hidden ml-3" ref={addWork}>
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

export default function Work() {
  const { Icon, ThemeColor, WorkCompArray, setWorkCompArray,WorkData } =
  
  useContext(ComponentListContext);
  
  return (
    <div key="workExperience" className="pb-3 pr-5 relative">
      <div className="  ml-6 pt-3 px-5  ">
        <div className="flex absolute  space-x-6 relative right-5  items-center w-[450px] education">
          {Icon && (
            <span className="relative left-3">
              <WorkEx></WorkEx>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            work experience
          </div>
        </div>
      </div>
      {WorkCompArray.map((data) => {
        return data;
      })}
    </div>
  );
}
