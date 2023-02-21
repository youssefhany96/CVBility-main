import React, { useEffect, useRef, useContext, useState } from "react";
import ComponentListContext from "../context/ComponentListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LanguageSettingsModal(props) {
  const {
    SettingsModal,
    setSettingsModal,
    LanguageSettingInfoGraphic,
    setLanguageSettingInfoGraphic,
    LanguageInfographic,
    setLanguageInfographic,
    LanProffirst,
    setLanProffirst,
    LanProfsecond,
    setLanProfsecond,
    LanProfthird,
    setLanProfthird,
    LanProfforth,
    setLanProfforth,
    LanProffifth,
    setLanProffifth,
    Proficiency,
    setProficiency,
  } = useContext(ComponentListContext);
  const LanguageSettingsModalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        LanguageSettingsModalRef.current &&
        !LanguageSettingsModalRef.current.contains(e.target)
      ) {
        setSettingsModal(false);
      }
    };
    document
      .getElementById("languageSettingsModal")
      .addEventListener("mousedown", handler);
  });

  return (
    <div className="ml-5 my-5" ref={LanguageSettingsModalRef}>
      <div className="flex flex-col my-5 mx-5">
        <div className="flex ml-12 space-x-5 bg-[#FBFCFF] w-72 h-10">
          <button
            className={`${
              LanguageInfographic === "None" ? "text-white" : "text-[#A8B0B9]"
            } ${
              LanguageInfographic === "None" ? "bg-primary" : null
            } py-2 px-2 text-sm rounded-md`}
            onClick={() => {
              setLanguageSettingInfoGraphic("None");
              setLanguageInfographic("None");
            }}
          >
            None
          </button>

          <button
            className={`${
              LanguageInfographic !== "InfoGraphic"
                ? "text-[#A8B0B9]"
                : "text-white"
            }  ${
              LanguageInfographic !== "InfoGraphic" ? null : "bg-primary"
            } py-2 px-2 text-sm rounded-md`}
            onClick={() => {
              setLanguageInfographic("InfoGraphic");
            }}
          >
            Infographic
          </button>
        </div>

        {LanguageInfographic === "None" && (
          <div className="flex  space-x-4 w-full">
            <div className="flex flex-col space-y-3 my-5 w-1/2">
              <div className="flex space-x-3 ">
                <input
                  type="radio"
                  checked={Proficiency === LanProffirst && true}
                  id="Elementary"
                  name="LanProficiency"
                  onClick={() => {
                    setProficiency(LanProffirst);
                  }}
                />
                <div
                  className={`flex flex-col space-y-1  border border-gray-500 w-48 h-[3rem] rounded-lg transform transition  duration-500 hover:scale-110 hover:border-primary2`}
                >
                  <h1 className="text-[#A8B0B9] text-[12px] px-3 pt-1">
                    Elementary Proficiency
                  </h1>
                  <input
                    type="text"
                    defaultValue={LanProffirst}
                    className="text-sm mx-2 w-44  h-4 outline outline-none  text-black"
                    onChange={(e) => setLanProffirst(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex space-x-3 ">
                <input
                  type="radio"
                  id="Limited Work"
                  checked={Proficiency === LanProfsecond && true}
                  name="LanProficiency"
                  onClick={() => {
                    setProficiency(LanProfsecond);
                  }}
                />
                <div
                  className={`flex flex-col space-y-1  border border-gray-500 w-48 h-[3rem] rounded-lg transform transition  duration-500 hover:scale-110 hover:border-primary2`}
                >
                  <h1 className="text-[#A8B0B9] text-[12px] px-3 pt-1">
                    Limited Work Proficiency
                  </h1>
                  <input
                    type="text"
                    defaultValue={LanProfsecond}
                    className="text-sm mx-2 w-44  h-4 outline outline-none  text-black"
                    onChange={(e) => setLanProfsecond(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex space-x-3 ">
                <input
                  type="radio"
                  id="Professional"
                  checked={Proficiency === LanProfthird && true}
                  name="LanProficiency"
                  onClick={() => setProficiency(LanProfthird)}
                />
                <div
                  className={`flex flex-col space-y-1  border border-gray-500 w-48 h-[3rem] rounded-lg transform transition  duration-500 hover:scale-110 hover:border-primary2`}
                >
                  <h1 className="text-[#A8B0B9] text-[12px] px-3 pt-1">
                    Professional Work Proficiency
                  </h1>
                  <input
                    type="text"
                    defaultValue={LanProfthird}
                    className="text-sm mx-2 w-44  h-4 outline outline-none  text-black"
                    onChange={(e) => setLanProfthird(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3 my-5 w-1/2">
              <div className="flex space-x-3 ">
                <input
                  type="radio"
                  id="Full Professional"
                  checked={Proficiency === LanProfforth && true}
                  name="LanProficiency"
                  onClick={() => setProficiency(LanProfforth)}
                />
                <div
                  className={`flex flex-col space-y-1  border border-gray-500 w-48 h-[3rem] rounded-lg transform transition  duration-500 hover:scale-110 hover:border-primary2`}
                >
                  <h1 className="text-[#A8B0B9] text-[12px] px-3 pt-1">
                    Full Professional Proficiency
                  </h1>
                  <input
                    type="text"
                    defaultValue={LanProfforth}
                    className="text-sm mx-2 w-44  h-4 outline outline-none  text-black"
                    onChange={(e) => setLanProfforth(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex space-x-3 ">
                <input
                  type="radio"
                  id="Native"
                  checked={Proficiency === LanProffifth && true}
                  name="LanProficiency"
                  onClick={() => setProficiency(LanProffifth)}
                />
                <div
                  className={`flex flex-col space-y-1  border border-gray-500 w-48 h-[3rem] rounded-lg transform transition  duration-500 hover:scale-110 hover:border-primary2`}
                >
                  <h1 className="text-[#A8B0B9] text-[12px] px-3 pt-1">
                    Native or bilingual Proficiency
                  </h1>
                  <input
                    type="text"
                    defaultValue={LanProffifth}
                    className="text-sm mx-2 w-44  h-4 outline outline-none  text-black"
                    onChange={(e) => setLanProffifth(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {LanguageInfographic === "InfoGraphic" && (
          <div className="flex mt-10">
            {/* Free */}
            <div className="flex flex-col w-[30%]">
              <h1 className="text-black font-bold text-sm">Free</h1>

              <div
                className="flex my-4 space-x-4 cursor-pointer"
                onClick={() => setLanguageSettingInfoGraphic("Free1")}
              >
                <div
                  className={`${
                    LanguageSettingInfoGraphic === "Free1"
                      ? "bg-primary2"
                      : "bg-primary "
                  } rounded-full b w-6 h-6`}
                ></div>
                <div
                  className={`${
                    LanguageSettingInfoGraphic === "Free1"
                      ? "bg-primary2"
                      : "bg-primary "
                  } rounded-full b w-6 h-6`}
                ></div>
                <div
                  className={`${
                    LanguageSettingInfoGraphic === "Free1"
                      ? "bg-primary2"
                      : "bg-primary "
                  } rounded-full b w-6 h-6 border-[#BDBDBD] border-4`}
                ></div>
              </div>
            </div>

            {/* Premium */}
            <div className="flex flex-col w-[70%] ml-10">
              <h1 className="text-black font-bold text-sm">Premium</h1>
              <div className="flex space-x-10">
                <div className="flex space-x-10">
                  <div className="flex flex-col space-y-4">
                    {/* Premium1 */}
                    <div
                      className="flex my-4 space-x-4 cursor-pointer"
                      onClick={() => setLanguageSettingInfoGraphic("Premium1")}
                    >
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium1"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full b w-6 h-6`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium1"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full b w-6 h-6`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium1"
                            ? "bg-primary2"
                            : "bg-[#BDBDBD]"
                        } rounded-full b w-6 h-6`}
                      ></div>
                    </div>

                    {/* Premium2 */}
                    <div
                      className="flex my-4 space-x-4 cursor-pointer"
                      onClick={() => setLanguageSettingInfoGraphic("Premium2")}
                    >
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium2"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full b w-6 h-6`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium2"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full b w-6 h-6`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium2"
                            ? "bg-primary2"
                            : "bg-[#BDBDBD]"
                        } rounded-full b w-4 h-4`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {/* Premium3 */}
                    <div
                      className="flex my-4 space-x-4 cursor-pointer"
                      onClick={() => setLanguageSettingInfoGraphic("Premium3")}
                    >
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium3"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium3"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium3"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        } rounded-full  w-6 h-6 border-[#BDBDBD] border-4`}
                      ></div>
                    </div>

                    {/* Premium4 */}
                    <div
                      className="flex my-4 space-x-4 cursor-pointer"
                      onClick={() => setLanguageSettingInfoGraphic("Premium4")}
                    >
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium4"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        }  w-6 h-6 rounded-md`}
                      ></div>
                      <div
                        className={`${
                          LanguageSettingInfoGraphic === "Premium4"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        }  w-6 h-6 rounded-md`}
                      ></div>
                      <div
                        className={`bg-[#BDBDBD] ${
                          LanguageSettingInfoGraphic === "Premium4"
                            ? "bg-primary2"
                            : "bg-[#595959]"
                        }  w-6 h-6 rounded-md`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
