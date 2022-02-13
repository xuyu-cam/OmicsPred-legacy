import React from "react";

import Htext from "./components/Htext";

import Href from "./components/Href";

const Feedback = () => {
  return (
    <div className="w-screen bg-white px-[5%] ">
      <Htext text="Questions and Feedback" />
      <div
        style={{ width: "100%" }}
        className="mySwiper w-[100%] overflow-visible rounded-sm"
      >
        <p className="mt-3 w-[100%] text-base text-gray-500 sm:mt-5 sm:text-lg sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
          We would love to hear from you! To provide feedback or ask a question,
          you can contact the OMICSPRED team <Href text="here" href="" /> .
        </p>
      </div>
    </div>
  );
};
export default Feedback;
