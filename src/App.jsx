import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Sdk from "./components/Sdk";
import Web3 from "./components/Web3";
import Tablet from "./components/Tablet";
import Ainft from "./components/Ainft";
import Aishopping from "./components/Aishopping";
import Marques from "./components/Marques";
import Avatar from "./components/Avatar";
// import { Router } from "react-router-dom";

function App() {
  const [showComponent1, setShowComponent1] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent1((prev) => !prev); // Toggle between true and false
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [showComponent1]);
  return (
    <>
      <Home />
      <div>
        <div className="img-contaier">
          {/* <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a65_GT_features_BG.webp"
            alt="AI Icon"
          /> */}
        </div>
        {showComponent1 ? (
          <div className="animate-ease-in">
            <Ainft />
          </div>
        ) : (
          <div className="animate-ease-in">
            <Aishopping />
          </div>
        )}
      </div>

      <div className="-mt-5">
        {/* <div className="border border-slate-500 w-screen top-full -ml-10 my-5 opacity-40"></div> */}
        <div className="flex space-x-3 w-full pb-4">
          <div className="text-slate-100 font-extralight text-sm mr-5 py-2 whitespace-nowrap">
            <span className="w-32">KYC&AUDITED BY:</span>
          </div>
          <div>
            <Marques />
          </div>
        </div>
      </div>

      <Tablet />
      <Web3 />
      <Sdk />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
