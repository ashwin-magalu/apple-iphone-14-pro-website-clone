import React from "react";
import AnimatedLogo from "../assets/images/logo-animated.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={AnimatedLogo} alt="apple animated loader" className="logo" />
    </div>
  );
};

export default Loader;
