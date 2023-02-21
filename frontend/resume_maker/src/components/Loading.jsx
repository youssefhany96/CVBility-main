import React from "react";
import loading from "../assets/loading.gif";
function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img className=" w-[150px] mx-0 " src={loading} />
    </div>
  );
}

export default Loading;
