import React from "react";
import Aishop from "../assets/aishopping.png";
import ImgBg from "../assets/mobil2.jpg";

const Aishopping = () => {
  return (
    <>
      {" "}
      <div className="img-contaier">
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a65_GT_features_BG.webp"
          alt="AI Icon"
        />
      </div>
      <div className="mobile-contaier">
        <img src={ImgBg} alt="gone" />
      </div>
      <div className="ai-shopping">
      <h1 className="w-[15%] flex-none my-0 font-normal text-4xl lg:text-6xl block text-white font-['Instrument Sans']">
          Ai Shopping
          <br />
          Assistance{" "}
        </h1>
     
        <button className="button3">Play Video</button>

        <img src={Aishop} alt="yo" />
        <p>
          Get AI assistance to purchase goods online as easily as talking to a
          friend
          <br />
          <br />
          Get $GTAI Token cashback after your purchases
          <br />
          <br />
          Explore cashback reinvestment offers to enhance the growth of your
          crypto portfolio
          <br />
          <br />
          Receive additional AI onboarding and mentoring throughout your crypto
          journey
        </p>
      </div>
      
      <div className="image-button">
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a43_slider-arrow-top.svg"
          alt="yo"
        />
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a42_slider-arrow-bottom.svg"
          alt="yo"
        />
      </div> 
    </>
  );
};
export default Aishopping;
