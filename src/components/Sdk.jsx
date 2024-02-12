import React from "react";
import Sdkbg from '../assets/Sdkbg.svg';

const Sdk = () => {
  document.body.style.background = "linear-gradient(to bottom, #02081a, #342485)";
  return (
    <div className=" flex h-screen w-full relative">
      <div className="flex w-full h-full mt-32">
        <div className="w-1/2 flex items-center justify-center">
          <img src={Sdkbg} alt="phone" className="px-20 ml-44" />
        </div>
        <div className="w-1/2 flex items-center justify-center text-white text-left">
          <div className="my-12 w-100">
            <h1 className="text-4xl font-bold mb-4">GT Protocol<br />API SDK</h1>
            <p className="text-sm">Allows integration of GT-Protocol’s Blockchain AI execution technology<br/>
              and Web3 investment marketplace solutions into third-party Web2 and <br/>
              Web3 platforms, enhancing their functionality with AI crypto investment <br/>
              capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sdk;
