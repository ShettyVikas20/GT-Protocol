import React from "react";



const Web3 = () => {
  document.body.style.background = "linear-gradient(to bottom, #02081a, #342485)";

  return (
    <div className="web3 font-normal text-white p-4 relative top-20">
      <ul class="pl-16 mb-8">
        <li className="text-3xl md:text-5xl  leading-tight mb-3">
          GT APP is the Next-
        </li>
        <li className="text-3xl md:text-5xl  leading-tight mb-3">
          gen Web 3.0 Crypto
        </li>
        <li className="text-3xl md:text-5xl  leading-tight mb-8">
          Investment Platform
        </li>
      </ul>
      <ul class="list-disc font-normal pl-16 mb-8 leading-tight">
  <li className="md:text-md mb-3">
    GT Protocol offers an intuitive non-custodial crypto investment <br/>experience guided by blockchain AI execution interface
  </li>
  <li className="text-md md:text-md mb-3">
    Profitable strategies featuring controllable risk levels, along with<br/> a transparent and traceable history of every deal
  </li>
  <li className="text-md md:text-md mb-3">
    Unique AI trading and investment tools powered by an AI execution<br/> technology
  </li>
  <li className="text-md md:text-md mb-3">
    Access to crypto investments across DeFi, CeFi, and NFT markets
  </li>
</ul>
<button style={{ backgroundColor: '#542fe8' }} className="text-white font-bold ml-12 mb-12 py-2 px-6 rounded absolute -bottom-24 left-8 hover:opacity-80">Join Now</button>

    </div>
  );
}

export default Web3;
