import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import SecondFooterPricing from "./SecondFooterPricing";

function Pricing() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-black text-3xl font-bold">
        Pricing Plans
      </h1>

      <div className="flex gap-2 justify-center pt-10">
        <div className="px-6 py-2.5 gap-2.5 inline-flex items-start font-normal text-grey">
          <button className="text-base leading-normal m-0">1 Months</button>
        </div>
        <div className="px-6 py-2.5  gap-2.5 inline-flex items-start text-white font-medium bg-primary rounded-[10px]">
          <button className="text-base leading-normal m-0">3 Months</button>
          <div className="gap-2.5 flex justify-center items-center rounded-md pl-[11px] pr-[11px] pt-[3px] pb-[3px] w-[66px] bg-[rgba(255,152,0,1)]">
            <p className="text-xs leading-normal m-0">Popular</p>
          </div>
        </div>
        <div className="px-6 py-2.5 gap-2.5 inline-flex items-start font-normal text-grey">
          <button className="text-base leading-normal m-0">12 Months</button>
        </div>
      </div>

      <div className="flex gap-[3rem] justify-center pt-10">
        <div
          className={`[box-shadow:0px_0px_0px_1px_rgba(0,_124,_225,_1)_inset] [box-shadow-width:1px] justify-between p-[50px] flex-col flex relative text-left w-[464px] h-[685px] overflow-clip rounded-[10px]`}
        >
          <h5 className="font-semibold leading-normal inline m-0 text-[26px] text-primary">
            Basic
          </h5>
          <p className=" text-base font-normal leading-normal inline m-0 text-[rgba(7,15,24,0.5)]">
            Perfect for get started
          </p>
          <h1 className=" text-5xl font-bold leading-normal inline m-0 text-primary">
            $0
          </h1>
          <div
            className={`[box-shadow:0px_0px_0px_1px_rgba(0,_124,_225,_1)_inset] [box-shadow-width:1px] py-3 w-[80%] mx-[auto] inline-flex justify-center text-left font-normal pl-[50px] pr-[50px] drop-shadow-lg rounded-[10px] text-primary`}
          >
            <button className="text-base leading-normal m-0">Sign Up</button>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-primary text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-primary">
              One Page Resume
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-primary text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-primary">
              Predefined Layout
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-primary text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-primary">
              One Resume
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-grey text-[25px]`}
              icon={faXmark}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-grey">
              Cover letters{" "}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-grey text-[25px]`}
              icon={faXmark}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-grey">
              Custom layout
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-grey text-[25px]`}
              icon={faXmark}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-grey">
              Create multiple version
            </p>
          </div>
        </div>
        <div
          className={`[box-shadow:0px_0px_0px_1px_rgba(0,_124,_225,_1)_inset] [box-shadow-width:1px] justify-between bg-primary p-[50px] flex-col flex relative text-left w-[464px] h-[685px] overflow-clip rounded-[10px]`}
        >
          <h5 className="font-semibold leading-normal inline m-0 text-[26px] text-white">
            Pro
          </h5>
          <div className="absolute top-12 gap-2.5 inline-flex justify-center items-center p-2.5 font-medium left-[344px] bg-[rgba(255,152,0,1)] rounded-[10px]">
            <p className="text-base text-white leading-normal m-0">Save $19</p>
          </div>
          <p className=" text-base font-normal text-white leading-normal inline m-0">
            Perfect for get started
          </p>
          <h1 className=" text-5xl font-bold leading-normal inline m-0 text-white">
            $39.99
          </h1>
          <div
            className={`[box-shadow:0px_0px_0px_1px_rgba(255,255,_225,_1)_inset] [box-shadow-width:1px] bg-white py-3 w-[80%] mx-[auto] inline-flex justify-center text-left font-normal pl-[50px] pr-[50px] drop-shadow-lg rounded-[10px] text-primary`}
          >
            <button className="text-base font-[500] leading-normal m-0">
              Upgarde Now
            </button>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              One Page Resume
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              Predefined Layout
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              One Resume
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              Cover letters{" "}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              Custom layout
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={`text-white text-[25px]`}
              icon={faCheck}
            ></FontAwesomeIcon>
            <p className=" text-base font-normal leading-normal inline m-0 text-white">
              Create multiple version
            </p>
          </div>
        </div>
      </div>
      <SecondFooterPricing></SecondFooterPricing>
    </div>
  );
}

export default Pricing;
