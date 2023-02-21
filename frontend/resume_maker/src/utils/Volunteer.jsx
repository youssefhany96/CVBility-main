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

export const VolunteerComponent = ({ id }) => {
  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    VolunteerData,
    setVolunteerData,
    ToolBar,
    setToolBar,
    setLinkButton,
    CoursesPerRowVolunteer,
    FontSize,
    setSelectedId,
    SelectedId,
    setVolunteerCompArray,
    VolunteerCompArray,
  } = useContext(ComponentListContext);
  const [Present, setPresent] = useState(false);
  const StudyProgramRef = useRef();
  const InstituteRef = useRef();
  const vlounteersdescrpRef = useRef();
  const vlounteersAddressRef = useRef();
  const vlounteersDateRef = useRef();
  const vlounteerContacts = useRef();
  const vlounteerContact1 = useRef();
  const vlounteerContact2 = useRef();
  const vlounteersDescriptionRef = useRef();
  const addVlounteer = useRef();
  const handleAdd = () => {
    handleNewField("volunteer");
  };
  const handleOnEnter = (e) => {
    if (
      document.getElementById(`${id}ValouAchievementsId`).childNodes.length < 10
    ) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (e.target.innerHTML.replace(/&nbsp;/g, "").trim() != "") {
          let newField = document.createElement("div");
          newField.classList.add("flex", "space-x-2", "SingleCourse");
          let SingleCourse = document.getElementById("VolunteerCourse");
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
    setVolunteerData([...VolunteerData, newData]);

    if (+id > 1) {
      setSelectedId(id);
      StudyProgramRef.current.focus();
    }
  }, [id]);
  useEffect(() => {
    const handler = (e) => {
      const menu = document.getElementById("volunteermenu");
      const toolbar = document.getElementById("toolbar");
      const underliend = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".y");
      if (StudyProgramRef && StudyProgramRef.current.contains(e.target)) {
        StudyProgramRef.current.classList.remove("placeholder:text-black");
      }
      if (StudyProgramRef && !StudyProgramRef.current.contains(e.target)) {
        StudyProgramRef.current.classList.add("placeholder:text-black");
      }
      if (StudyProgramRef && InstituteRef.current.contains(e.target)) {
        InstituteRef.current.classList.remove("placeholder:text-black");
      }
      if (StudyProgramRef && !InstituteRef.current.contains(e.target)) {
        InstituteRef.current.classList.add("placeholder:text-black");
      }
      if (
        document.getElementsByClassName(`${id}vlounteer`)[0].contains(e.target)
      ) {
        document
          .getElementById(`${id}vlounteerCourse`)
          .classList.remove("hidden");
        document
          .getElementById(`${id}vlounteerDate`)
          .classList.remove("hidden");
        document
          .getElementById(`${id}vlounteerAdress`)
          .classList.remove("hidden");
        document
          .getElementById(`${id}vlounteerContacts`)
          .classList.remove("hidden");
        vlounteersDescriptionRef.current.classList.remove("hidden");
        vlounteerContact1.current.parentElement.classList.remove("hidden");
        vlounteerContact2.current.parentElement.classList.remove("hidden");
        addVlounteer.current.classList.remove("hidden");
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
          addVlounteer.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}vlounteer`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
          const notunderliendDashed = document
            .getElementsByClassName(`${id}vlounteer`)[0]
            .querySelectorAll(".input-underline-dashed");
          for (let i of notunderliendDashed) {
            i.classList.replace("input-underline-dashed", "y");
          }
        }
      }
      if (
        vlounteersdescrpRef.current.innerHTML === "" &&
        !vlounteersdescrpRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}vlounteerCourse`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}vlounteerCourse`)
          .classList.remove("hidden");
      }
      if (
        vlounteersAddressRef.current.value === "" &&
        !vlounteersAddressRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document
            .getElementById(`${id}vlounteerAdress`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}vlounteerAdress`)
          .classList.remove("hidden");
      }
      if (
        vlounteersDescriptionRef.current.innerHTML === "" &&
        !vlounteersDescriptionRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          vlounteersDescriptionRef.current.classList.add("hidden");
        }
      } else {
        vlounteersDescriptionRef.current.classList.remove("hidden");
      }
      const date = Array.from(vlounteersDateRef.current.children);
      if (
        (date[0].value === "" || date[1].value === "") &&
        !vlounteersDateRef.current.contains(e.target)
      ) {
        if (
          menu &&
          !menu.contains(e.target) &&
          toolbar &&
          !toolbar.contains(e.target)
        ) {
          document.getElementById(`${id}vlounteerDate`).classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}vlounteerDate`)
          .classList.remove("hidden");
      }

      if (
        (vlounteerContact1.current.value === "" ||
          vlounteerContact2.current.value === "") &&
        !vlounteerContacts.current.contains(e.target)
      ) {
        if (vlounteerContact1.current.value === "") {
          if (
            menu &&
            !menu.contains(e.target) &&
            toolbar &&
            !toolbar.contains(e.target)
          ) {
            vlounteerContact1.current.parentElement.classList.add("hidden");
          }
        }
        if (vlounteerContact2.current.value === "") {
          if (
            menu &&
            !menu.contains(e.target) &&
            toolbar &&
            !toolbar.contains(e.target)
          ) {
            vlounteerContact2.current.parentElement.classList.add("hidden");
          }
        }
        if (
          vlounteerContact1.current.value === "" &&
          vlounteerContact2.current.value === ""
        ) {
          document
            .getElementById(`${id}vlounteerContacts`)
            .classList.add("hidden");
        }
      } else {
        document
          .getElementById(`${id}vlounteerContacts`)
          .classList.remove("hidden");
      }
    };
    if (+id > 0 && SelectedId == id && CurrentEntity == "volun") {
      const underliend = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".x");
      const underliendDash = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".y");
      document
        .getElementById(`${id}vlounteerCourse`)
        .classList.remove("hidden");
      document.getElementById(`${id}vlounteerDate`).classList.remove("hidden");
      document
        .getElementById(`${id}vlounteerAdress`)
        .classList.remove("hidden");
      document
        .getElementById(`${id}vlounteerContacts`)
        .classList.remove("hidden");
      vlounteersDescriptionRef.current.classList.remove("hidden");
      vlounteerContact1.current.parentElement.classList.remove("hidden");
      vlounteerContact2.current.parentElement.classList.remove("hidden");
      addVlounteer.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
      for (let i of underliendDash) {
        i.classList.replace("y", "input-underline-dashed");
      }
      return;
    } else {
      addVlounteer.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
      const notunderliendDashed = document
        .getElementsByClassName(`${id}vlounteer`)[0]
        .querySelectorAll(".input-underline-dashed");
      for (let i of notunderliendDashed) {
        i.classList.replace("input-underline-dashed", "y");
      }
    }

    if (vlounteersdescrpRef.current.innerHTML === "") {
      document.getElementById(`${id}vlounteerCourse`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}vlounteerCourse`)
        .classList.remove("hidden");
    }
    if (vlounteersAddressRef.current.value === "") {
      document.getElementById(`${id}vlounteerAdress`).classList.add("hidden");
    } else {
      document
        .getElementById(`${id}vlounteerAdress`)
        .classList.remove("hidden");
    }
    if (vlounteersDescriptionRef.current.innerHTML === "") {
      vlounteersDescriptionRef.current.classList.add("hidden");
    } else {
      vlounteersDescriptionRef.current.classList.remove("hidden");
    }
    const date = Array.from(vlounteersDateRef.current.children);
    if (date[0].value === "" || date[1].value === "") {
      document.getElementById(`${id}vlounteerDate`).classList.add("hidden");
    } else {
      document.getElementById(`${id}vlounteerDate`).classList.remove("hidden");
    }

    if (
      vlounteerContact1.current.value === "" ||
      vlounteerContact2.current.value === ""
    ) {
      if (vlounteerContact1.current.value === "") {
        vlounteerContact1.current.parentElement.classList.add("hidden");
      }
      if (vlounteerContact2.current.value === "") {
        vlounteerContact2.current.parentElement.classList.add("hidden");
      }
      if (
        vlounteerContact1.current.value === "" &&
        vlounteerContact2.current.value === ""
      ) {
        document
          .getElementById(`${id}vlounteerContacts`)
          .classList.add("hidden");
      }
    } else {
      document
        .getElementById(`${id}vlounteerContacts`)
        .classList.remove("hidden");
    }
    addVlounteer.current.classList.add("hidden");
    const notunderliend = document
      .getElementsByClassName(`${id}vlounteer`)[0]
      .querySelectorAll(".input-underline");
    for (let i of notunderliend) {
      i.classList.replace("input-underline", "x");
    }
    const notunderliendDashed = document
      .getElementsByClassName(`${id}vlounteer`)[0]
      .querySelectorAll(".input-underline-dashed");
    for (let i of notunderliendDashed) {
      i.classList.replace("input-underline-dashed", "y");
    }

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("volun");
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

    let existingObjectIndex = VolunteerData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      let updatedVolunteerData = [...VolunteerData];
      updatedVolunteerData[existingObjectIndex].title = title;
      updatedVolunteerData[existingObjectIndex].title2 = title2;
      setVolunteerData(updatedVolunteerData);
    } else {
      setVolunteerData([...VolunteerData, newData]);
    }
  };

  return (
    <div
      className={`flex flex-col border-vlounteer ${id}vlounteer`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div className="ml-9 pb-3 educationAllFields" id="educationOldField">
        <input
          type="text"
          onBlur={() => handleSave()}
          onClick={(e) => {
            handleOnClick(id);
          }}
          placeholder="Title/Position"
          className={`text-black x w-[100%] ${
            FontSize == "md"
              ? "text-[24px]"
              : FontSize == "sm"
              ? "text-[22px]"
              : "text-[26px]"
          } font-[500] outline-none placeholder: ${
            FontSize == "md"
              ? "text-[24px]"
              : FontSize == "sm"
              ? "text-[22px]"
              : "text-[26px]"
          } placeholder:font-[500] placeholder:text-black  `}
          ref={StudyProgramRef}
        />
        <div className="seconed">
          <p
            onFocus={() => {
              setLinkButton(true);
            }}
            onBlur={() => {
              setLinkButton(true);
              handleSave();
            }}
            contentEditable
            style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            type="text"
            data-placeholder="Organizations"
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
            onKeyPress={(e) => (e.key === "Enter" ? e.preventDefault() : null)}
          ></p>
        </div>

        <div className="flex flex-col space-y-2 " id="educationDetail">
          <div
            className="flex space-x-2 items-center hidden"
            id={`${id}vlounteerDate`}
            ref={vlounteersDateRef}
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
              className={`text-[#A8B0B9] text-black ${
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
              id="presentVl"
              onClick={() => (Present ? setPresent(false) : setPresent(true))}
            />
            <label
              htmlFor="presentVl"
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
          <div className="hidden " id={`${id}vlounteerAdress`}>
            <input
              type="text"
              ref={vlounteersAddressRef}
              placeholder="City, Country (Optional)"
              className={`y w-[100%] text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } outline-none `}
            />
          </div>
          <div className="SingleCourse">
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
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              type="text"
              data-placeholder="Description(optional)"
              ref={vlounteersDescriptionRef}
              className={` hidden text-black ${
                FontSize == "md"
                  ? "text-[16px]"
                  : FontSize == "sm"
                  ? "text-[14px]"
                  : "text-[18px]"
              } y outline-none `}
              onKeyPress={(e) =>
                e.key === "Enter" ? e.preventDefault() : null
              }
            ></p>
          </div>
          <div className="hidden" id={`${id}vlounteerCourse`}>
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
              className={`grid grid-cols-${CoursesPerRowVolunteer}`}
              id={`${id}ValouAchievementsId`}
            >
              <div
                className="flex space-x-2  space-x-2 SingleCourse"
                id="VolunteerCourse"
              >
                <img
                  src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg"
                  className="h-2 mt-[0.30rem]"
                  alt=""
                />
                <p
                  ref={vlounteersdescrpRef}
                  data-placeholder="Accomplishments/Responsibility/Task"
                  style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                  contentEditable
                  type="text"
                  onClick={() => {
                    setToolBar(true);
                    setLinkButton(true);
                  }}
                  onSelect={() => {
                    setToolBar(true);
                    setLinkButton(true);
                  }}
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
            className="flex flex-row items-start  hidden "
            id={`${id}vlounteerContacts`}
            ref={vlounteerContacts}
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
                  ref={vlounteerContact1}
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
                  ref={vlounteerContact2}
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
        {/* <div className={`grid grid-cols-${CoursesPerRowVolunteer}`} id='courseId' >

                        <div className='flex space-x-2' id='SingleCourse' >
                            <img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2 mt-[0.30rem]' alt="" />
                            <input type="text" placeholder='Course /Thesis' className='text-black  text-sm outline-none ' onKeyPress={(e) => handleOnEnter(e)} onKeyDown={(e) => handleDeleteKey(e)} />
                        </div>
                    </div> */}
      </div>
      <div className="flex items-center gap-2 hidden ml-3" ref={addVlounteer}>
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

export default function Volunteer() {
  const {
    Icon,
    CoursesPerRowVolunteer,
    ThemeColor,
    VolunteerCompArray,
    setVolunteerCompArray,
  } = useContext(ComponentListContext);
  return (
    <div key="volunteer" className="pb-3 pr-5 ">
      <div className="  ml-6 pt-5 px-5 ">
        <div className="flex space-x-6 relative right-5  items-center w-[450px] volunteer">
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
            VOLUNTEER EXPERIENCE
          </div>
        </div>
      </div>
      {VolunteerCompArray.map((data) => {
        return data;
      })}

      {/* Dummy Div */}
      <div className="hidden grid grid-cols-1"></div>
      <div className="hidden grid grid-cols-2"></div>
      <div className="hidden grid grid-cols-3"></div>
    </div>
  );
}
