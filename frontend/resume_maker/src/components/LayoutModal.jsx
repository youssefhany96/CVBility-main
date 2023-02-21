import React, { useRef, useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faL,
  faLock,
  faTrash,
  faAdd,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { col1, col2, RightGrid } from "../Layouts/customModal";
import { Student1Col1, Student1Col2 } from "../Layouts/Student1";
import { Student2Col1, Student2Col2 } from "../Layouts/Student2";
import { Student3Col1, Student3Col2 } from "../Layouts/Student3";
import { Senior1Col1, Senior1Col2 } from "../Layouts/Senior1";
import { Senior2Col1, Senior2Col2 } from "../Layouts/Senior2";
import { Senior3Col1, Senior3Col2 } from "../Layouts/Senior3";
import { Inter1Col1, Inter1Col2 } from "../Layouts/Inter1";
import { Inter2Col1, Inter2Col2 } from "../Layouts/Inter2";
import { Inter3Col1, Inter3Col2 } from "../Layouts/Inter3";
import { Freelancer1Col1, Freelancer1Col2 } from "../Layouts/Freelancer1";
import { Freelancer2Col1, Freelancer2Col2 } from "../Layouts/Freelancer2";
import { Freelancer3Col1, Freelancer3Col2 } from "../Layouts/Freelancer3";
import ComponentListContext from "../context/ComponentListContext";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import "../CSS/layout.css";
import Trash from "../assets/Trash";
import Add from "../assets/Add";
export default function LayoutModal(props) {
  const {
    List1,
    List2,
    setList2,
    setList1,
    USFormat,
    Title,
    Picture,
    Summary,
    setPicture,
    setTitle,
    setSummary,
    setUSFormat,
  } = useContext(ComponentListContext);

  const { showLayoutModal, setshowLayoutModal } = props;
  const LayoutModalRef = useRef();
  const [SelectedLayout, setSelectedLayout] = useState("Student1");
  const [customlayout, setcustomlayout] = useState(false);
  const [LayoutGroup, setLayoutGroup] = useState("Student");

  const [items, setItems] = React.useState({
    col1: col1,
    col2: col2,
    right: RightGrid,
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      var list = [
        {
          ...items,
          [sourceId]: result[0],
          [targetId]: result[1],
        },
      ];

      handleUseLayout(list[0].col1, list[0].col2);
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    var list = [
      {
        ...items,
        [sourceId]: result,
      },
    ];
    handleUseLayout(list[0].col1, list[0].col2);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  async function onChangeTab() {
    setItems({
      col1: List1,
      col2: List2,
      right: RightGrid.filter(
        (obj1) =>
          !List1.some((obj2) => obj1.id === obj2.id) &&
          !List2.some((obj2) => obj1.id === obj2.id)
      ),
    });
    setcustomlayout(true);
    return;
    // handleUseLayout(items[0].col1,items[0].col2)
  }

  const handleMouseEnter = (SelectedLayout) => {
    const x = document.getElementById(SelectedLayout);
    x.classList.replace("opacity-0", "opacity-100");
    const y = document.getElementsByClassName(SelectedLayout);
    for (let i of y) {
      i.classList.replace("bg-primary", "bg-blur");
    }
  };
  const handleMouseLeave = (SelectedLayout) => {
    const x = document.getElementById(SelectedLayout);
    x.classList.replace("opacity-100", "opacity-0");
    const y = document.getElementsByClassName(SelectedLayout);
    for (let i of y) {
      i.classList.replace("bg-blur", "bg-primary");
    }
  };

  const OnMouseEnterComp = (id, state) => {
    if (state == "deletable") {
      const x = document.getElementById(id);
      x.classList.replace("bg-primary", "bg-red-800");
      x.children[0].classList.replace("opacity-100", "opacity-25");
      x.children[1].classList.remove("hidden");
    } else if (state == "not_deletable") {
      const x = document.getElementById(id);
      x.classList.replace("bg-blur", "bg-green-800");
      x.children[0].classList.replace("opacity-100", "opacity-25");
      x.children[2].classList.remove("hidden");
    }
  };

  const OnMouseLeaveComp = (id, state) => {
    if (state == "deletable") {
      const x = document.getElementById(id);
      x.classList.replace("bg-red-800", "bg-primary");
      x.children[0].classList.replace("opacity-25", "opacity-100");
      x.children[1].classList.add("hidden");
    } else if (state == "not_deletable") {
      const x = document.getElementById(id);
      x.classList.replace("bg-green-800", "bg-blur");
      x.children[0].classList.replace("opacity-25", "opacity-100");
      x.children[2].classList.add("hidden");
    }
  };

  const handleOnClickCol1 = (index, state, sel_list) => {
    let temp_state = [...List1];
    let temp_element = { ...temp_state[index] };
    if (state === "deletable") {
      sel_list[index].state = "not_deletable";
      temp_element.display = "hidden";
      temp_state[index] = temp_element;
      setList1(temp_state);
    }
    if (state === "not_deletable") {
      sel_list[index].state = "deletable";
      temp_element.display = "show";
      temp_state[index] = temp_element;
      setList1(temp_state);
    }
    setItems[
      {
        col1: List1,
        right: RightGrid.filter(
          (obj1) => !List1.some((obj2) => obj1.id === obj2.id)
        ),
      }
    ];
  };

  const handleOnClickCol2 = (index, state, sel_list) => {
    let temp_state = [...List2];
    let temp_element = { ...temp_state[index] };
    if (state === "deletable") {
      sel_list[index].state = "not_deletable";
      temp_element.display = "hidden";
      temp_state[index] = temp_element;
      setList2(temp_state);
    }
    if (state === "not_deletable") {
      sel_list[index].state = "deletable";
      temp_element.display = "show";
      temp_state[index] = temp_element;
      setList2(temp_state);
    }
    setItems[
      {
        col1: List2,
        right: RightGrid.filter(
          (obj1) => !List2.some((obj2) => obj1.id === obj2.id)
        ),
      }
    ];
  };

  const handleUseLayout = (l1, l2) => {
    const arrays = [
      Student1Col1,
      Student1Col2,
      Student2Col1,
      Student2Col2,
      Student3Col1,
      Student3Col2,
      Senior1Col1,
      Senior1Col2,
      Senior2Col1,
      Senior2Col2,
      Senior3Col1,
      Senior3Col2,
      Inter1Col1,
      Inter1Col2,
      Inter2Col1,
      Inter2Col2,
      Inter3Col1,
      Inter3Col2,
      Freelancer1Col1,
      Freelancer1Col2,
      Freelancer2Col1,
      Freelancer2Col2,
      Freelancer3Col1,
      Freelancer3Col2,
    ];

    arrays.forEach((array) => {
      array.map((i) => (i.state !== "" ? (i.state = "deletable") : null));
    });
    let temp_state = l2;
    let temp_state1 = l1;
    console.log('temp_state: ', temp_state);
    for (let i of temp_state) {
      if (i.state != "") {
        i.state = "deletable";
      }
    }
    for (let i of temp_state1) {
      if (i.state != "") {
        i.state = "deletable";
      }
    }

    const x = document.getElementsByClassName(l1[0].layout);
    for (let i of x) {
      i.classList.replace("bg-blur", "bg-primary");
    }
    setList1([...l1]);
    setList2([...l2]);
    setSelectedLayout(l1[0].layout);
  };

  const update = () => {
    setItems({
      col1: List1.filter((obj) => obj.state !== "not_deletable"),
      col2: List2.filter((obj) => obj.state !== "not_deletable"),
      right: RightGrid.filter(
        (obj1) =>
          !List1.some(
            (obj2) => obj1.id === obj2.id && obj2.state !== "not_deletable"
          ) &&
          !List2.some(
            (obj2) => obj1.id === obj2.id && obj2.state !== "not_deletable"
          )
      ),
    });
  };
  useEffect(() => {
    let handler = (e) => {
      if (
        LayoutModalRef.current &&
        !LayoutModalRef.current.contains(e.target)
      ) {
        setshowLayoutModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return showLayoutModal ? (
    <>
      <div
        className=" notFilled flex flex-col absolute  -left-64 mt-20 bubbleTop w-[1050px] h-[750px] after:left-[28%]  inset-0 z-50 outline-none focus:outline-none"
        ref={LayoutModalRef}
      >
        <div className="flex flex-col space-y-8  py-10">
          <div className="flex space-x-6 justify-center  ">
            <button
              onClick={() => setcustomlayout(false)}
              className={
                customlayout
                  ? "text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg"
                  : `bg-primary py-2 px-4  text-white rounded-lg cursor-pointer`
              }
            >
              Predefined
            </button>
            <button
              onClick={onChangeTab}
              className={
                customlayout
                  ? "bg-primary py-2 px-4  text-white rounded-lg cursor-pointer"
                  : "text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg"
              }
            >
              Custom{" "}
              <FontAwesomeIcon className="pl-2" icon={faLock}></FontAwesomeIcon>
            </button>
          </div>

          <div className="flex space-x-6 justify-center">
            <div className="flex flex-col space-y-2">
              <h1
                onClick={() => {
                  setLayoutGroup("Student");
                  handleUseLayout(Student1Col1, Student1Col2);
                }}
                className={`${
                  LayoutGroup == "Student" ? "text-primary" : "text-[#A8B0B9]"
                } ml-4 cursor-pointer`}
              >
                Student
              </h1>
              {LayoutGroup == "Student" ? (
                <h1 className={`text-primary text-sm`}>(0 Experience)</h1>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <h1
                onClick={() => {
                  setLayoutGroup("Graduate");
                  handleUseLayout(Student1Col1, Student1Col2);
                }}
                className={`${
                  LayoutGroup == "Graduate" ? "text-primary" : "text-[#A8B0B9]"
                } ml-4 cursor-pointer`}
              >
                Graduate
              </h1>
              {LayoutGroup == "Graduate" ? (
                <h1 className={`text-primary text-sm`}>(3 Experience)</h1>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <h1
                onClick={() => {
                  setLayoutGroup("Inter");
                  handleUseLayout(Inter1Col1, Inter1Col2);
                }}
                className={`${
                  LayoutGroup == "Inter" ? "text-primary" : "text-[#A8B0B9]"
                } ml-4 cursor-pointer`}
              >
                Intermediate
              </h1>
              {LayoutGroup == "Inter" ? (
                <h1 className={`text-primary text-sm`}>(1-5 Experience)</h1>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <h1
                onClick={() => {
                  setLayoutGroup("Senior");
                  handleUseLayout(Senior1Col1, Senior1Col2);
                }}
                className={`${
                  LayoutGroup == "Senior" ? "text-primary" : "text-[#A8B0B9]"
                } ml-4 cursor-pointer`}
              >
                Senior
              </h1>
              {LayoutGroup == "Senior" ? (
                <h1 className={`text-primary text-sm`}>(5+ Experience)</h1>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <h1
                onClick={() => {
                  setLayoutGroup("Freelancer");
                  handleUseLayout(Freelancer1Col1, Freelancer2Col1);
                }}
                className={`${
                  LayoutGroup == "Freelancer"
                    ? "text-primary"
                    : "text-[#A8B0B9]"
                } ml-4 cursor-pointer`}
              >
                Freelancer
              </h1>
              {LayoutGroup == "Freelancer" ? (
                <h1 className={`text-primary text-sm`}>(Any Experience)</h1>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex justify-between mx-10">
            <div>
              <input
                id="USformat"
                className="check"
                checked={USFormat}
                type="checkbox"
                onClick={() =>
                  USFormat ? setUSFormat(false) : setUSFormat(true)
                }
              />
              <label htmlFor="USformat" className="text-black mx-3 ">
                US Letter format
              </label>
            </div>

            <div className="flex space-x-5">
              <div>
                <input
                  id="Title"
                  className="check"
                  checked={Title}
                  type="checkbox"
                  onClick={() => (Title ? setTitle(false) : setTitle(true))}
                />
                <label htmlFor="Title" className="text-black mx-3 ">
                  Title
                </label>
              </div>
              <div>
                <input
                  id="Summary"
                  className="check"
                  checked={Summary}
                  type="checkbox"
                  onClick={() =>
                    Summary ? setSummary(false) : setSummary(true)
                  }
                />
                <label htmlFor="Summary" className="text-black mx-3 ">
                  Summary
                </label>
              </div>
              <div>
                <input
                  id="Photo"
                  className="check"
                  checked={Picture ? true : false}
                  type="checkbox"
                  onClick={() =>
                    Picture ? setPicture(false) : setPicture(true)
                  }
                />
                <label htmlFor="Photo" className="text-black mx-3 ">
                  Photo
                </label>
              </div>
            </div>
          </div>
          {customlayout ? (
            <GridContextProvider onChange={onChange}>
              <div className="container">
                <div className="container-left">
                  <GridDropZone
                    className="flex w-72 h-[26rem] space-x-1 cursor-pointer "
                    id="col1"
                    style={{ height: 400 }}
                    boxesPerRow={1}
                    rowHeight={400 / List1.length}
                  >
                    {List1.filter(item=>item.display==='show').map((item) => (
                      <GridItem key={item.name}>
                        <div className={`grid-item left `} id={item.id}>
                          <div className="grid-item-content">
                            {item.name.includes("*")
                              ? item.name.slice(0, -1)
                              : item.name}
                          </div>
                        </div>
                      </GridItem>
                    ))}
                  </GridDropZone>
                  <GridDropZone
                    className="flex w-72 h-[26rem] space-x-1 cursor-pointer "
                    id="col2"
                    style={{ height: 400 }}
                    boxesPerRow={1}
                    rowHeight={400 / List2.length}
                  >
                    {List2.filter((item)=>item.display==='show').map((item) => {
                     return  (
                        <GridItem key={item.name}>
                          <div className="grid-item" id={item.id}>
                            <div className="grid-item-content">
                              {item.name.includes("*")
                                ? item.name.slice(0, -1)
                                : item.name}
                            </div>
                          </div>
                        </GridItem>
                      )

                     })}
                  </GridDropZone>
                </div>
                <div className="container-right-main">
                  <h1
                    className="text-black text-sm my-15"
                    style={{ fontSize: 19 }}
                  >
                    Drag and drop to Add or Remove Sections.
                  </h1>
                  <div className="container-right">
                    <GridDropZone
                      className=""
                      style={{ height: "100%", width: "100%" }}
                      id="right"
                      boxesPerRow={3}
                      rowHeight={50}
                    >
                      {items.right.map((item) => {
                        return (
                          <GridItem key={item.name} style={{}}>
                            <div className="grid-item lol">
                              <div className="grid-item-content right">
                                {item.name.includes("*")
                                  ? item.name.slice(0, -1)
                                  : item.name}
                              </div>
                            </div>
                          </GridItem>
                        );
                      })}
                      {List1.filter(item=>item.display==='hidden').map((item) => (
                      <GridItem key={item.name} style={{}}>
                      <div className="grid-item lol">
                        <div className="grid-item-content right">
                          {item.name.includes("*")
                            ? item.name.slice(0, -1)
                            : item.name}
                        </div>
                      </div>
                    </GridItem>
                    ))}
                    {List2.filter(item=>item.display==='hidden').map((item) => (
                      <GridItem key={item.name} style={{}}>
                      <div className="grid-item lol">
                        <div className="grid-item-content right">
                          {item.name.includes("*")
                            ? item.name.slice(0, -1)
                            : item.name}
                        </div>
                      </div>
                    </GridItem>
                    ))}
                    </GridDropZone>
                  </div>
                </div>
              </div>
            </GridContextProvider>
          ) : LayoutGroup == "Student" ? (
            <Student></Student>
          ) : LayoutGroup == "Inter" ? (
            <Inter></Inter>
          ) : LayoutGroup == "Senior" ? (
            <Senior></Senior>
          ) : LayoutGroup == "Freelancer" ? (
            <Freelancer></Freelancer>
          ) : (
            <Student></Student>
          )}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
  function Student() {
    return (
      <div className="flex mx-5 my-3 space-x-16">
        {/* Student 1 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Student1Col1[0].layout
              ? handleMouseEnter(Student1Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Student1Col1[0].layout
              ? handleMouseLeave(Student1Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem]  space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Student1Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } realtive flex items-center justify-center w-ful text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Student1Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm my-20">
                      {item.name}
                    </h1>

                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Student1Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Student1Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Student1Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Student1Col1[0].layout}
              onClick={() => handleUseLayout(Student1Col1, Student1Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Student 2 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Student2Col1[0].layout
              ? handleMouseEnter(Student2Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Student2Col1[0].layout
              ? handleMouseLeave(Student2Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Student2Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[32.7%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Student2Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Student2Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[25%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Student2Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Student2Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Student2Col1[0].layout}
              onClick={() => {
                window.scrollTo(0, 0),
                  handleUseLayout(Student2Col1, Student2Col2);
              }}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Student 3 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Student3Col1[0].layout
              ? handleMouseEnter(Student3Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Student3Col1[0].layout
              ? handleMouseLeave(Student3Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Student3Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Student3Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Student3Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Student3Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Student3Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Student3Col1[0].layout}
              onClick={() => handleUseLayout(Student3Col1, Student3Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>
      </div>
    );
  }
  function Inter() {
    return (
      <div className="flex mx-5 my-3 space-x-16">
        {/* Inter 1 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Inter1Col1[0].layout
              ? handleMouseEnter(Inter1Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Inter1Col1[0].layout
              ? handleMouseLeave(Inter1Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Inter1Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Inter1Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Inter1Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Inter1Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Inter1Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Inter1Col1[0].layout}
              onClick={() => handleUseLayout(Inter1Col1, Inter1Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Inter 2 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Inter2Col1[0].layout
              ? handleMouseEnter(Inter2Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Inter2Col1[0].layout
              ? handleMouseLeave(Inter2Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Inter2Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[32.7%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Inter2Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Inter2Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[16.66666666666667%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Inter2Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Inter2Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Inter2Col1[0].layout}
              onClick={() => handleUseLayout(Inter2Col1, Inter2Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Inter 3 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Inter3Col1[0].layout
              ? handleMouseEnter(Inter3Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Inter3Col1[0].layout
              ? handleMouseLeave(Inter3Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-pointer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Inter3Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Inter3Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Inter3Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Inter3Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Inter3Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Inter3Col1[0].layout}
              onClick={() => handleUseLayout(Inter3Col1, Inter3Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>
      </div>
    );
  }
  function Senior() {
    return (
      <div className="flex mx-5 my-3 space-x-16">
        {/* Senior 1 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Senior1Col1[0].layout
              ? handleMouseEnter(Senior1Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Senior1Col1[0].layout
              ? handleMouseLeave(Senior1Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poSenior `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Senior1Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Senior1Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Senior1Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Senior1Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Senior1Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Senior1Col1[0].layout}
              onClick={() => handleUseLayout(Senior1Col1, Senior1Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Senior 2 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Senior2Col1[0].layout
              ? handleMouseEnter(Senior2Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Senior2Col1[0].layout
              ? handleMouseLeave(Senior2Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poSenior `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Senior2Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[32.7%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Senior2Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Senior2Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[25%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Senior2Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Senior2Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Senior2Col1[0].layout}
              onClick={() => handleUseLayout(Senior2Col1, Senior2Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Senior 3 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Senior3Col1[0].layout
              ? handleMouseEnter(Senior3Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Senior3Col1[0].layout
              ? handleMouseLeave(Senior3Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poSenior `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Senior3Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Senior3Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Senior3Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Senior3Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Senior3Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Senior3Col1[0].layout}
              onClick={() => handleUseLayout(Senior3Col1, Senior3Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>
      </div>
    );
  }
  function Freelancer() {
    return (
      <div className="flex mx-5 my-3 space-x-16">
        {/* Freelancer 1 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Freelancer1Col1[0].layout
              ? handleMouseEnter(Freelancer1Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Freelancer1Col1[0].layout
              ? handleMouseLeave(Freelancer1Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poFreelancer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Freelancer1Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Freelancer1Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Freelancer1Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Freelancer1Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Freelancer1Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Freelancer1Col1[0].layout}
              onClick={() => handleUseLayout(Freelancer1Col1, Freelancer1Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Freelancer 2 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Freelancer2Col1[0].layout
              ? handleMouseEnter(Freelancer2Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Freelancer2Col1[0].layout
              ? handleMouseLeave(Freelancer2Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poFreelancer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Freelancer2Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[32.7%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Freelancer2Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Freelancer2Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[25%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Freelancer2Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Freelancer2Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Freelancer2Col1[0].layout}
              onClick={() => handleUseLayout(Freelancer2Col1, Freelancer2Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>

        {/* Freelancer 3 */}
        <div
          className=" relative "
          onMouseOver={() =>
            SelectedLayout !== Freelancer3Col1[0].layout
              ? handleMouseEnter(Freelancer3Col1[0].layout)
              : null
          }
          onMouseOut={() =>
            SelectedLayout !== Freelancer3Col1[0].layout
              ? handleMouseLeave(Freelancer3Col1[0].layout)
              : null
          }
        >
          <div className={`flex w-72 h-[26rem] space-x-1 cursor-poFreelancer `}>
            {/* Column 1 */}
            <div className="flex flex-col w-1/2 space-y-1">
              {Freelancer3Col1.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[50%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol1(index, item.state, Freelancer3Col1)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/2 space-y-1 ml-[0.10rem] ">
              {Freelancer3Col2.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.state === "not_deletable" ? "bg-blur" : "bg-primary"
                    } flex items-center justify-center w-full text-center h-[19.3%] ${
                      item.layout
                    } `}
                    key={item.id}
                    id={SelectedLayout === item.layout ? item.id : null}
                    onMouseOver={() =>
                      SelectedLayout === item.layout
                        ? OnMouseEnterComp(item.id, item.state)
                        : null
                    }
                    onMouseOut={() =>
                      SelectedLayout === item.layout
                        ? OnMouseLeaveComp(item.id, item.state)
                        : null
                    }
                    onClick={() =>
                      SelectedLayout === item.layout
                        ? handleOnClickCol2(index, item.state, Freelancer3Col2)
                        : null
                    }
                  >
                    <h1 className="text-white opacity-100 text-sm ">
                      {item.name}
                    </h1>
                    <div className="text-white text-lg my-20 absolute hidden noneFill">
                      <Trash></Trash>{" "}
                    </div>
                    <div className="text-white text-lg my-20 absolute hidden ">
                      <Add></Add>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SelectedLayout !== Freelancer3Col1[0].layout ? (
            <button
              className="bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0"
              id={Freelancer3Col1[0].layout}
              onClick={() => handleUseLayout(Freelancer3Col1, Freelancer3Col2)}
            >
              Use Layout
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
