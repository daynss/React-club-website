import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ label, kind = "primary", renderIcon = false, href }) => {
  const classNames = {
    primary: "link-button-primary",
    ghost: "link-button-ghost",
  };
  return (
    <Link to={href} className={`link-button ${classNames[kind]}`}>
      <span>{label} </span>
      {renderIcon}
    </Link>
  );
};

export default LinkButton;
