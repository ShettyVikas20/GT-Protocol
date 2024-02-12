import React from 'react'
import Marques from "./Marques";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Sdk from "./Sdk";
import Web3 from "./Web3";
import Tablet from "./Tablet";

import { useEffect, useState } from "react";

export const Nayapage = () => {


    const [showComponent1, setShowComponent1] = useState(true);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShowComponent1((prev) => !prev); // Toggle between true and false
      }, 5000); // Switch every 5 seconds
  
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [showComponent1]);
  return (
    <div>
  

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
 </div>
 
  )
}
