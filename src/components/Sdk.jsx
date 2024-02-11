import React from "react";
import Sdkbg from '../assets/Sdkbg.svg';

const Sdk = () => {
  return (
    <div className="sdk-container flex items-center justify-center bg-gradient-to-r from-violent-950 to-indigo-900 h-screen relative">
      <div className="sdk absolute left-44">
        <img src={Sdkbg} alt="phone" className="w-96" />
      </div>
      <div className="sdk-content text-white text-center absolute top-1/2 transform -translate-y-1/2 right-96">
        <h1 className="text-4xl font-bold mb-4">GT Protocol<br />API SDK</h1>
        <p className="text-lg">Allows integration of GT-Protocol’s Blockchain AI execution technology<br/>
          and Web3 investment marketplace solutions into third-party Web2 and <br/>
          Web3 platforms, enhancing their functionality with AI crypto investment <br/>
          capabilities.</p>
      </div>
    </div>
  );
}

export default Sdk;
