import React from "react";
import Aishop from "../assets/aishopping.png";
import ImgBg from "../assets/mobil2.jpg";

const Aishopping = () => {
  return (
    <section>
      {" "}
      <div className="ai-shopping flex">
        <div className="relative top-60 ml-16">
          <h1 className=" font-normal text-4xl  block text-white font-['Instrument Sans']">
            AI Shopping
            <h1 className="relative m-5 -left-4"> Assistance</h1>
          </h1>

          <button className="flex m-10  text-white font-bold py-2 px-6 rounded hover:opacity-80" style={{ backgroundColor: '#542fe8' }} >Play Video</button>

          <div class="text-base font-small text-white">
            <ul class="list-disc pl-16 w-96 leading-[1]">
              <li  className="mb-3 ">
                Get AI assistance to purchase goods online as easily as talking
                to a friend
              </li>
              <li className="mb-3">Get $GTAI Token cashback after your purchases</li>
              <li className="mb-3">
                Explore cashback reinvestment offers to enhance the growth of
                your crypto portfolio
              </li>
              <li className="mb-3">
                Receive additional AI onboarding and mentoring throughout your
                crypto journey
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile_for">
          <img src={Aishop} className='opacity-80' alt="yo" />
        </div>
      </div>
      <div className="image-button ">
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a43_slider-arrow-top.svg"
          alt="yo"
          className="hover:opacity-65"
        />
        <img
          src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a42_slider-arrow-bottom.svg"
          alt="yo"
          className="hover:opacity-65"
        />
      </div>
    </section>
  );
};
export default Aishopping;
