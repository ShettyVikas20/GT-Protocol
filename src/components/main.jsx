import React from "react";
import VideoBg from '../assets/videobg.mp4';

const  Main  = () => {
   return(
    
<div className="main"> 
  <video src={VideoBg} autoPlay loop muted style={{ width: '100%', height: 'auto' }}></video>
  <div className="content">
   <h1>Blockchain <br/> 
   <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a59_hero-title-arrow.svg"alt="AI Icon"height={50}/>AI Execution<br/> Protocol </h1>
   <p>Available On:</p>
  </div>
  <div className="contentP">
   <p> A Web3 AI execution technology that <br/>provides you with access to CeFi, DeFi, and <br/>NFT crypto markets through an all-in-one<br/> conversational AI interface.</p>
  </div>
  <div className="buttonContainer">
    <button className="button">OurPitchdeck</button>
    <button className="button">Explore</button>
  </div>
</div>
   );
}
export default Main