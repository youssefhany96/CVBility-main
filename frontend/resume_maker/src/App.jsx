import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoverLetter from "./components/CoverLetter";
import CV from "./components/CV";
import Mydocument from "./components/Mydocument";
import CreateCV from "./components/CreateCV";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import { useContext } from "react";
import TemplateContext from "./context/TemplateContext";
import Loading from "./components/Loading";

function App() {
  const location = useLocation();
  const { Init, Refresh } = useContext(TemplateContext);
  useEffect(() => {
    Init();
    RefreshToken();
  }, []);

  function RefreshToken(){
    console.log('justCallled')
    if (localStorage.getItem("user_data") != null) {
      console.log("Refreshing");
      setInterval(() => {
         Refresh();
        console.log("Refreshed");
      }, 60000);
    }
  }

  return (
    <div>
      {location.pathname === "/mydocument" ? null : <Navbar></Navbar>}

      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="cv" element={<CV></CV>}></Route>
        <Route
          exact
          path="coverletter"
          element={<CoverLetter></CoverLetter>}
        ></Route>
        <Route
          exact
          path="mydocument/:type"
          element={<Mydocument></Mydocument>}
        ></Route>
        <Route exact path="create/:id" element={<CreateCV></CreateCV>}></Route>
        <Route exact path="pricing" element={<Pricing></Pricing>}></Route>
        <Route exact path="loading" element={<Loading></Loading>}></Route>
      </Routes>
    </div>
  );
}

export default App;
