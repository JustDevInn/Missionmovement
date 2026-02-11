import React from "react";
import { Link } from "react-router-dom";

const PrimaryLinkButton = ({ to, children, className }) => {
  const baseClassName =
    "bg-mmAccent text-white hover:bg-mmAccentHover px-6 py-3 rounded-xl font-semibold text-sm ring-2 ring-transparent focus:ring-mmFocus border border-transparent transition";
  const resolvedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <Link to={to} className={resolvedClassName}>
      {children}
    </Link>
  );
};

export default PrimaryLinkButton;
