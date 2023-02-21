import React from "react";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
const Templates = () => {
  const template = [
    {
      id: 1,
      image: template1,
      name: "Basic",
      description:
        "Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process.",
    },

    {
      id: 2,
      image: template2,
      name: "Modern",
      description:
        "It can be hard to stand out from the crowd, but this modern resume sample will take care of this.",
    },
  ];
  return (
    <>
      <div className="lg:flex justify-center lg:space-x-32 sm:space-y-14 md:space-y-12 lg:space-y-0 xl:space-y-0 mt-28 mx-20 ">
        {template.map((item) => {
          return (
            <div
              className="lg:w-80 "
              key={item.id}
              onClick={() => handleCreate(item.id)}
            >
              <div className="relative justify-center ">
                <img
                  src={item.image}
                  className={`  border border-gray-500 rounded-md transform transition  duration-500 hover:scale-110 mx-auto `}
                  id={`item${item.id}`}
                  width="300px"
                  height="250px "
                  alt=""
                  onMouseEnter={() => handleShowButton(item.id)}
                  onMouseLeave={() => handleLeaveButton(item.id)}
                ></img>
                <button
                  id={item.id}
                  className={`hidden absolute top-1/2 lg:right-20 sm:right-6 md:right-56 px-4 py-2 rounded-md bg-primary  text-white transform transition duration-500 hover:scale-125 hover:border-primary`}
                  onMouseEnter={() => handleShowButton(item.id)}
                  onMouseLeave={() => handleLeaveButton(item.id)}
                >
                  Use this template
                </button>
              </div>

              {/* <h1 className="text-[#070F18] font-bold text-[26px] mx-auto  mt-4 text-start">
                {item.name}
              </h1>
              <p className="text-[16px] text-start mx-auto">
                {item.description}
              </p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Templates;
