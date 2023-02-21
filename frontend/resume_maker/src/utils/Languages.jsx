import React, { useContext, useEffect, useRef, useState } from "react";
import ComponentListContext from "../context/ComponentListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAdd } from "@fortawesome/free-solid-svg-icons";

export const LanguageComponents = ({ id }) => {
  const LanProfRef = useRef();
  const [LanProfModal, setLanProfModal] = useState(false);
  const [LanProffirst, setLanProffirst] = useState("Elementary Proficiency");
  const [LanProfsecond, setLanProfsecond] = useState(
    "Limited Work Proficiency"
  );
  const [LanProfthird, setLanProfthird] = useState(
    "Professional Work Proficiency"
  );
  const [LanProfforth, setLanProfforth] = useState(
    "Full Professional Proficiency"
  );
  const [LanProffifth, setLanProffifth] = useState(
    "Native or bilingual Proficiency"
  );
  const [Proficiency, setProficiency] = useState("Professional Proficiency");

  const {
    handleNewField,
    CurrentEntity,
    setCurrentEntity,
    LanProfData,
    setLanProfData,
    SelectedId,
    LanguageSettingInfoGraphic,
    LanProfCompArray,
    setLanProfCompArray,
    FontSize,
    setSelectedId,
  } = useContext(ComponentListContext);
  const LanguageRef = useRef();
  const addLan = useRef();
  const handleAdd = () => {
    handleNewField("language");
  };

  const handleLanguageEnterKey = (e) => {
    if (e.target.value.trim() != "") {
      if (e.key === "Enter") {
        console.log("YESSSS");
        handleSave();
        handleNewField("language");
      }
    }
    // if (e.key === 'Enter') {
    //     handleAdd()
    // }
  };
  useEffect(() => {
    const title = LanguageRef.current.value;
    const newData = { id, title };

    if (+id > 1) {
      setSelectedId(id);
      LanguageRef.current.focus();
    }
  }, [id]);

  useEffect(() => {
    if (+id > 0 && SelectedId == id && CurrentEntity === "lan") {
      const underliend = document
        .getElementsByClassName(`${id}lang`)[0]
        .querySelectorAll(".x");
      addLan.current.classList.remove("hidden");
      for (let i of underliend) {
        i.classList.replace("x", "input-underline");
      }
    } else {
      addLan.current.classList.add("hidden");
      const notunderliend = document
        .getElementsByClassName(`${id}lang`)[0]
        .querySelectorAll(".input-underline");
      for (let i of notunderliend) {
        i.classList.replace("input-underline", "x");
      }
    }
    let handler = (e) => {
      const menu = document.getElementById("languagemenu");
      const underliend = document
        .getElementsByClassName(`${id}lang`)[0]
        .querySelectorAll(".x");

      if (LanProfRef.current && !LanProfRef.current.contains(e.target)) {
        setLanProfModal(false);
      }
      if (LanguageRef.current && LanguageRef.current.contains(e.target)) {
        LanguageRef.current.classList.remove("placeholder:text-black");
      }
      if (LanguageRef.current && !LanguageRef.current.contains(e.target)) {
        LanguageRef.current.classList.add("placeholder:text-black");
      }
      if (document.getElementsByClassName(`${id}lang`)[0].contains(e.target)) {
        addLan.current.classList.remove("hidden");
        for (let i of underliend) {
          i.classList.replace("x", "input-underline");
        }
        return;
      } else {
        if (menu && !menu.contains(e.target)) {
          addLan.current.classList.add("hidden");
          const notunderliend = document
            .getElementsByClassName(`${id}lang`)[0]
            .querySelectorAll(".input-underline");
          for (let i of notunderliend) {
            i.classList.replace("input-underline", "x");
          }
        }
      }
    };
    document.addEventListener("mousedown", handler);

    if (LanguageSettingInfoGraphic === "Free1") {
      const div = document.getElementsByClassName("LanInfoDiv");

      const divArr = Array.prototype.slice.call(div);
      divArr.map((item) => {
        const tags = item.children;
        const x = Array.prototype.slice.call(tags);
        item.addEventListener("mouseleave", () => {
          x.map((data, i) => {
            if (!x[i].classList.contains("active")) {
              x[i].classList.remove("bg-primary");
            } else {
              x[i].classList.add("bg-primary");
            }
          });
        });
        x.map((itm, index) => {
          itm.addEventListener("click", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("active");
              } else {
                x[i].classList.remove("active");
              }
            });
          });
          itm.addEventListener("mouseenter", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("bg-primary");
              } else {
                x[i].classList.remove("bg-primary");
              }
            });
          });
        });
      });
    }

    // Premium2
    if (LanguageSettingInfoGraphic === "Premium2") {
      const div = document.getElementsByClassName("LanInfoDiv");
      const divArr = Array.prototype.slice.call(div);
      divArr.map((item) => {
        const tags = item.children;
        const x = Array.prototype.slice.call(tags);
        item.addEventListener("mouseleave", () => {
          x.map((data, i) => {
            if (!x[i].classList.contains("active")) {
              x[i].classList.remove("bg-[#595959]", "w-6", "h-6");
              x[i].classList.add("w-4", "h-4");
            } else {
              x[i].classList.add("bg-[#595959]", "w-6", "h-6");
              x[i].classList.remove("w-4", "h-4");
            }
          });
        });
        x.map((itm, index) => {
          itm.addEventListener("click", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("active");
              } else {
                x[i].classList.remove("active");
              }
            });
          });
          itm.addEventListener("mouseenter", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("bg-[#595959]", "w-6", "h-6");
                x[i].classList.remove("w-4", "h-4");
              } else {
                x[i].classList.remove("bg-[#595959]", "w-6", "h-6");
                x[i].classList.add("w-4", "h-4");
              }
            });
          });
        });
      });
    }

    // Premium3
    if (
      LanguageSettingInfoGraphic === "Premium3" ||
      LanguageSettingInfoGraphic === "Premium4" ||
      LanguageSettingInfoGraphic === "Premium1"
    ) {
      const div = document.getElementsByClassName("LanInfoDiv");

      const divArr = Array.prototype.slice.call(div);
      divArr.map((item) => {
        const tags = item.children;
        const x = Array.prototype.slice.call(tags);
        item.addEventListener("mouseleave", () => {
          x.map((data, i) => {
            if (!x[i].classList.contains("active")) {
              x[i].classList.remove("bg-[#595959]");
            } else {
              x[i].classList.add("bg-[#595959]");
            }
          });
        });

        x.map((itm, index) => {
          itm.addEventListener("click", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("active");
              } else {
                x[i].classList.remove("active");
              }
            });
          });
          itm.addEventListener("mouseenter", () => {
            x.map((data, i) => {
              if (i <= index) {
                x[i].classList.add("bg-[#595959]");
              } else {
                x[i].classList.remove("bg-[#595959]");
              }
            });
          });
        });
      });
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleOnClick = (id) => {
    setSelectedId(id);
    setCurrentEntity("lan");
  };
  const handleSave = () => {
    const title = LanguageRef.current.value;
    const newData = { id, title };

    let existingObjectIndex = LanProfData.findIndex(
      (object) => object.id === id
    );
    if (existingObjectIndex !== -1) {
      console.log("IFFFF");
      let updatedLanProfData = [...LanProfData];
      updatedLanProfData[existingObjectIndex].title = title;
      setLanProfData(updatedLanProfData);
    } else {
      console.log("ELSEEEEE", [...LanProfData, newData]);
      setLanProfData([...LanProfData, newData]);
    }
  };

  return (
    <div
      className={`flex flex-col border-lang ${id}lang`}
      id={id}
      onClick={() => handleOnClick(id)}
    >
      <div className="ml-9 pb-3 languageAllFields" id="languageOldField">
        <input
          type="text"
          placeholder="Language"
          onBlur={(e) => {
            handleSave();
            e.target.classList.remove("input-underline");
          }}
          autoFocus={id == 1 ? false : true}
          onFocus={(e) => {
            handleOnClick(id);
            e.target.classList.add("input-underline");
          }}
          className={`block w-[90%] x required text-black ${
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
          ref={LanguageRef}
          onKeyDown={(e) => handleLanguageEnterKey(e)}
        />

        {LanguageSettingInfoGraphic === "None" && (
          <div>
            <input
              type="text"
              readOnly={true}
              value={Proficiency}
              className="italic text-black text-[20px] font-[500] outline-none mt-3 cursor-pointer hover:text-primary2 w-96"
              onClick={() => setLanProfModal(true)}
            />
            {LanProfModal && (
              <div
                className="flex space-x-5 bg-[#425061] w-60 h-10 rounded-md "
                ref={LanProfRef}
              >
                <h1
                  className={`py-2 pl-7 ${
                    Proficiency !== LanProffirst ? "text-white" : "text-primary"
                  }  ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => setProficiency(LanProffirst)}
                >
                  1/5
                </h1>
                <h1
                  className={`py-2 ${
                    Proficiency !== LanProfsecond
                      ? "text-white"
                      : "text-primary"
                  }  ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => setProficiency(LanProfsecond)}
                >
                  2/5
                </h1>
                <h1
                  className={`py-2 ${
                    Proficiency !== LanProfthird ? "text-white" : "text-primary"
                  }  ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => setProficiency(LanProfthird)}
                >
                  3/5
                </h1>
                <h1
                  className={`py-2 ${
                    Proficiency !== LanProfforth ? "text-white" : "text-primary"
                  }  ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => setProficiency(LanProfforth)}
                >
                  4/5
                </h1>
                <h1
                  className={`py-2 ${
                    Proficiency !== LanProffifth ? "text-white" : "text-primary"
                  }  ${
                    FontSize == "md"
                      ? "text-[16px]"
                      : FontSize == "sm"
                      ? "text-[14px]"
                      : "text-[18px]"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => setProficiency(LanProffifth)}
                >
                  5/5
                </h1>
              </div>
            )}
          </div>
        )}

        {/* Free1 */}
        {LanguageSettingInfoGraphic === "Free1" && (
          <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
            <div
              className={`border border-primary rounded-full w-6 h-6 `}
            ></div>
            <div
              className={`border border-primary rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-primary rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-primary rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-primary rounded-full w-6 h-6  `}
            ></div>
          </div>
        )}

        {/* Premium1 */}
        {LanguageSettingInfoGraphic === "Premium1" && (
          <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
            <div
              className={`border border-[#595959] rounded-full w-6 h-6 `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-6 h-6  `}
            ></div>
          </div>
        )}

        {/* Premium2 */}
        {LanguageSettingInfoGraphic === "Premium2" && (
          <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
            <div
              className={`border border-[#595959] rounded-full w-4 h-4 `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-4 h-4  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-4 h-4  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-4 h-4  `}
            ></div>
            <div
              className={`border border-[#595959] rounded-full w-4 h-4  `}
            ></div>
          </div>
        )}

        {/* Premium3 */}
        {LanguageSettingInfoGraphic === "Premium3" && (
          <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
            <div
              className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6 `}
            ></div>
            <div
              className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
            ></div>
            <div
              className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}
            ></div>
          </div>
        )}

        {/* Premium4 */}
        {LanguageSettingInfoGraphic === "Premium4" && (
          <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
            <div
              className={`border border-[#BDBDBD] rounded-md w-6 h-6 `}
            ></div>
            <div
              className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
            ></div>
            <div
              className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}
            ></div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 hidden ml-3" ref={addLan}>
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

export default function Languages() {
  const { Icon, LanProfCompArray, ThemeColor } =
    useContext(ComponentListContext);

  useEffect(() => {});

  return (
    <div className="pb-3 pr-5 " key="language">
      <div className="   ml-6 pt-5 px-5 ">
        <div className="flex space-x-3 relative right-5 items-center w-[450px] language">
          {Icon && (
            <span className="">
              <FontAwesomeIcon
                className="text-2xl ml-3"
                icon={faGlobe}
              ></FontAwesomeIcon>
            </span>
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className={`text-${ThemeColor} notEditable text-[32px] font-[600] uppercase outline-none w-[400px] `}
          >
            LANGUAGE
          </div>
        </div>
      </div>

      {LanProfCompArray.map((data1) => {
        return data1;
      })}
    </div>
  );
}
