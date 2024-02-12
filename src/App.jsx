
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import Avatar from "./components/Avatar";
// import { Router } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
function App() {

  return (
     <>
           <BrowserRouter>
               <Routes>
                <Route
                       exact
                       path="/"
                       element={<Home />}
                   />
                   <Route
                       exact
                       path="/avatar"
                       element={<Avatar/>}
                   />
                   <Route
                       exact
                       path="/contatus"
                       element={<ContactUs/>}
                   />
                  
               </Routes>
           </BrowserRouter>
     </>

    // <>
    //   <BrowserRouter>
    //             <Routes>
    //             <Route
    //                     exact
    //                     path="/"
    //                     element={<Home />}
    //                 />
    //                 <Route
    //                     exact
    //                     path="/avatar"
    //                     element={<Avatar/>}
    //                 />
                  
    //             </Routes>
    //         </BrowserRouter>
    //  {/* <Avatar /> */}
    //   <Home />
    //   <div>
    //     <div className="img-contaier">
    //       {/* <img
    //         src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a65_GT_features_BG.webp"
    //         alt="AI Icon"
    //       /> */}
    //     </div>
    //     {showComponent1 ? (
    //       <div className="animate-ease-in">
    //         <Ainft />
    //       </div>
    //     ) : (
    //       <div className="animate-ease-in">
    //         <Aishopping />
    //       </div>
    //     )}
    //   </div>

    //   <div className="-mt-5">
    //     {/* <div className="border border-slate-500 w-screen top-full -ml-10 my-5 opacity-40"></div> */}
    //     <div className="flex space-x-3 w-full pb-4">
    //       <div className="text-slate-100 font-extralight text-sm mr-5 py-2 whitespace-nowrap">
    //         <span className="w-32">KYC&AUDITED BY:</span>
    //       </div>
    //       <div>
    //         <Marques />
    //       </div>
    //     </div>
    //   </div>

    //   <Tablet />
    //   <Web3 />
    //   <Sdk />
    //   <ContactUs />
    //   <Footer />
    // </>
  );
}

export default App;
