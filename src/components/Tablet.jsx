import React from "react";
import Tabletbg from '../assets/tablet.png';
import Tabletholder from '../assets/tabletholder.png';

const Tablet = () => {
  document.body.style.background = "linear-gradient(to bottom, #02081a, #342485)";
  return (
    <>
      <div className="h-96 bg-gradient-to-b absolute top-48 w-full"></div>

      <div className="absolute2 top-80 right-0 z-10" >
        <img src={Tabletbg} alt="tablet" className="w-full" />
      </div>
      <div className="absolute1  right-0" >
        <img src={Tabletholder} alt="tablet holder" className="w-full" />
      </div>
    </>
  );
}

export default Tablet;
