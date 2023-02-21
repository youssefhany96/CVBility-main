import React, { useState, useRef, useEffect, useContext } from "react";
import Avatar from "../assets/Avatar.png";
import ImageModal from "./ImageModal";
import Settings from "../assets/Settings";
import Rectangle48 from "../assets/Rectangle48";
import Rectangle49 from "../assets/Rectangle49";
import ComponentListContext from "../context/ComponentListContext";
import Trash from "../assets/Trash";
import Upload from "../assets/Upload";
import Avatar1 from "../assets/Avatar1";
import Avatar4 from "../assets/Avatar4";
import Avatar5 from "../assets/Avatar5";

export default function ProfileImage() {
  const { setPicture } = useContext(ComponentListContext);
  const [ShowModal, setShowModal] = useState(false);
  const [image, setimage] = useState(Avatar);
  const [CropedImg, setCropedImg] = useState();
  const [imageSetting, setimageSetting] = useState(false);
  const imgSettingRef = useRef();

  const [ImageBorder, setImageBorder] = useState("dpFirst");
  const [ImageOutline, setImageOutline] = useState("dpFirstBorder");
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCropedImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setShowModal(true);
    document.getElementById("uploadbtn").classList.add("hidden");
    document
      .getElementById("dp")
      .classList.remove("border-2", "border-primary", "border-dashed");
    event.target.value = "";
  };

  useEffect(() => {
    let handler = (e) => {
      if (imgSettingRef.current && !imgSettingRef.current.contains(e.target)) {
        document
          .getElementById("dp")
          .classList.remove("border-2", "border-primary", "border-dashed");
        document.getElementById("uploadbtn").classList.add("hidden");
        setimageSetting(false);
      }
      if (
        document.getElementById("Profile pic") &&
        !document.getElementById("Profile pic").contains(e.target)
      ) {
        document.getElementById("uploadbtn").classList.add("hidden");
        document
          .getElementById("dp")
          .classList.remove("border-2", "border-primary", "border-dashed");
      }
    };
    document.addEventListener("mousedown", handler);
  });
  const handleDpclick = () => {
    const x = document.getElementById("dp");
    x.classList.add("border-2", "border-primary", "border-dashed");
  };

  const handleDeleteImage = () => {
    document
      .getElementById("dp")
      .classList.remove("border-2", "border-primary", "border-dashed");

    if (image !== Avatar) {
      setimage(Avatar);
      document.getElementById("uploadbtn").classList.add("hidden");
    } else {
      setPicture(false);
    }
  };
  return (
    <div className="h-[220px]" id="Profile pic">
      <div
        className={`${ImageOutline} `}
        id="dp"
        onClick={() => handleDpclick()}
      >
        <img
          src={image}
          className={`${ImageBorder}  cursor-pointer mx-auto my-1 `}
          alt=""
          onClick={() =>
            document.getElementById("uploadbtn").classList.remove("hidden")
          }
        />
      </div>

      <div
        className="hidden flex bg-[#425061] relative left-5 bottom-12 w-[210px] h-10 rounded-md settings"
        id="uploadbtn"
      >
        <span className=" cursor-pointer ">
          <div
            className="text-white text-lg"
            onClick={() => {
              setShowModal(true);
              document.getElementById("uploadbtn").classList.add("hidden");
              document
                .getElementById("dp")
                .classList.remove(
                  "border-2",
                  "border-primary",
                  "border-dashed"
                );
            }}
          ></div>
        </span>
        <label htmlFor="contained-button-file" className="flex items-center">
          <input
            className="hidden"
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onInput={onChange}
          />
          <h1
            className="text-white text-sm flex gap-2 items-center font-[400] px-[0.6rem] cursor-pointer"
            onClick={() => {}}
          >
            <Upload></Upload>Upload Photo
          </h1>
        </label>
        <div className={`flex items-center `}>
          <span
            className={` cursor-pointer relative ${imageSetting && 'settingsClicked'}`}
            onClick={() => setimageSetting(true)}
          >
            <Settings></Settings>
          </span>
          <span
            className="p-2 cursor-pointer trashicon"
            onClick={handleDeleteImage}
          >
            <Trash></Trash>
          </span>
        </div>
      </div>

      {imageSetting ? (
        <div className="relative bottom-7 left-[5.8rem]">
          <div
            className="flex flex-col absolute bubbleTop w-[400px] h-[120px] after:left-[20%] inset-0 z-50 outline-none focus:outline-none"
            ref={imgSettingRef}
          >
            <div className="flex space-x-6 pt-6 px-6 pb-3  ">
              <h1 className="text-black text-sm font-semibold ">Free</h1>
              <h1 className="text-black text-sm font-semibold ">Premium</h1>
            </div>
            <div className="flex px-3 space-x-7">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImageBorder("dpFirst");
                  setImageOutline("dpFirstBorder");
                }}
              >
                <Avatar1
                  fill={ImageBorder == "dpFirst" ? "#007CE1" : "#D9D9D9"}
                ></Avatar1>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImageBorder("dpSecond");
                  setImageOutline("dpSecondBorder");
                }}
              >
                <Rectangle48
                  fill={ImageBorder == "dpSecond" ? "#007CE1" : "#D9D9D9"}
                ></Rectangle48>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImageBorder("dpThird");
                  setImageOutline("dpThirdBorder");
                }}
              >
                <Rectangle49
                  fill={ImageBorder == "dpThird" ? "#007CE1" : "#D9D9D9"}
                ></Rectangle49>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImageBorder("dpForth");
                  setImageOutline("dpForthBorder");
                }}
              >
                <Avatar4
                  fill={ImageBorder == "dpForth" ? "#007CE1" : "#D9D9D9"}
                ></Avatar4>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImageBorder("dpFifth");
                  setImageOutline("dpFifthBorder");
                }}
              >
                <Avatar5
                  fill={ImageBorder == "dpFifth" ? "#007CE1" : "#D9D9D9"}
                ></Avatar5>
              </span>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}

      <ImageModal
        CropedImg={CropedImg}
        setCropedImg={setCropedImg}
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        image={image}
        setimage={setimage}
        imageBorder={ImageBorder}
      ></ImageModal>
    </div>
  );
}
