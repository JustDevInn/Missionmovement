import React from "react";

const Container = ({ children, className = "", wide = false }) => {
  const baseClass = wide ? "mm-containerWide" : "mm-container";
  return <div className={`${baseClass} ${className}`}>{children}</div>;
};

export default Container;
