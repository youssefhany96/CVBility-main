import React, { useRef, useEffect, useContext, useState } from "react";
import ComponentListContext from "../context/ComponentListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Templates from "./Templates";
export default function SwitchTemplateModal(props) {
  const { switchTemplateModal, setShowSwitchTemplateModal } = props;
  const switchModalRef = useRef();
  const { ThemeColor, setThemeColor, setBackgroundImg, BackgroundImg } =
    useContext(ComponentListContext);
  const [Background, setBackground] = useState(false);
  useEffect(() => {
    let handler = (e) => {
      if (switchModalRef.current && !switchModalRef.current.contains(e.target)) {
        setShowSwitchTemplateModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return switchTemplateModal ? (
    <>
      <div
        className=" flex flex-col absolute space-y-5 -left-14 mt-20 bubbleTop w-[450px] h-[320px] after:right-[25%]  inset-0 z-50 outline-none focus:outline-none"
        ref={switchModalRef}
      >
        <div className="flex space-x-6 justify-center mt-10  ">
          <button
            className={
              Background
                ? `text-[#A8B0B9] text-sm  py-2 px-4 cursor-pointer rounded-lg`
                : "bg-primary text-sm py-2 px-4  text-white rounded-lg cursor-pointer"
            }
            onClick={() => setBackground(false)}
          >
            Free
          </button>
          <button
            className={
              Background
                ? "bg-primary text-sm py-2 px-4  text-white rounded-lg cursor-pointer"
                : `text-[#A8B0B9] text-sm  py-2 px-4 cursor-pointer rounded-lg`
            }
            onClick={() => setBackground(true)}
          >
            Premium
          </button>
        </div>
            <Templates />


        {/* <div className='flex justify-between mx-auto space-x-32 relative bottom-3'>
                    <h1 className='text-black font-bold text-sm '>Professional</h1>
                    <h1 className='text-black font-bold text-sm pr-6'>Fancy</h1>

    </div>*/}
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

      {/* Dummy Div */}
      <div className="hidden">
        <h1 className="text-Professional1"></h1>
        <h1 className="text-Professional2"></h1>
        <h1 className="text-Professional3"></h1>
        <h1 className="text-Professional4"></h1>
        <h1 className="text-Professional5"></h1>
        <h1 className="text-Professional6"></h1>
        <h1 className="text-Fancy1"></h1>
        <h1 className="text-Fancy2"></h1>
        <h1 className="text-Fancy3"></h1>
        <h1 className="text-Fancy4"></h1>
        <h1 className="text-Fancy5"></h1>
        <h1 className="text-Fancy6"></h1>
      </div>
    </>
  ) : null;
}
