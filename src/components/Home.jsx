import React from "react";
import VideoBg from "../assets/videobg.mp4";

const Home = () => {
  return (
    <div className="main">
      <video
  src={VideoBg}
  autoPlay
  loop
  muted
  className="w-full h-full object-cover"
></video>
      <div className="content absolute h-full w-full flex items-center top-0 left-40">
        <h1 className="text-white font-bold text-3xl">
          Blockchain <br />
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a59_hero-title-arrow.svg"
            alt="AI Icon"
            height={50}
            className="inline-block"
          />
          AI Execution
          <br /> Protocol{" "}
        </h1>
        <p className="text-white absolute top-300 font-bold">
          Available On:{" "}
          <img
            src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21d33fb6cf4529d94c421_logo-hero-01.svg"
            alt="AI Icon"
            height={30}
            className="inline-block"
          />
          {/* Repeat for other images */}
        </p>
      </div>
      <div className="contentP absolute h-full w-full flex items-center justify-end top-0 right-350 text-white text-2xl">
        <p>
          A Web3 AI execution technology that <br />
          provides you with access to CeFi, DeFi, and <br />
          NFT crypto markets through an all-in-one
          <br /> conversational AI interface.
        </p>
      </div>
      <div className="buttonContainer absolute flex items-center justify-end top-0 right-510 pt-430">
        <button className="button">OurPitchdeck</button>
        <button className="button1">Explore</button>
      </div>
      <div className="container absolute flex items-center left-40 bottom-0 right-0 text-white text-2xl">
        <p>Trusted By:</p>
        <div className="marquee w-full whitespace-nowrap overflow-hidden">
          <img src="image1.jpg" alt="Image 1" className="inline-block mr-10" />
          <img src="image2.jpg" alt="Image 2" className="inline-block mr-10" />
          <img src="image3.jpg" alt="Image 3" className="inline-block" />
        </div>
      </div>
    </div>
  );
};

export default Home;
